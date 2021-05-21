import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../store';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/shared/interfaces/category.type';
import { RestBranch } from 'src/app/shared/interfaces/rest-branch.type';

@Component({
  selector: 'app-category-tab-container',
  templateUrl: './category-tab-container.component.html'
})
export class CategoryTabContainerComponent implements OnInit {
  categories$: Observable<Category[]>;

  selectedCategory: Category;

  restaurantBranches: RestBranch[] = [
    {
      id: 1,
      name: 'Miraflores'
    },
    {
      id: 2,
      name: 'La molina'
    },
    {
      id: 4,
      name: 'San isidro'
    }
  ];

  categoryFilterForm = this.fb.group({
    rbSelector: this.fb.group({
      id: 0
    }),
    searchCategory: '',
    inactive: false
  });

  categoryForm: FormGroup;

  disable = false;
  edit = false;
  cardTittle = 'Crear categoría';

  constructor(
    private fb: FormBuilder,
    private store: Store<fromStore.ProductsState>
  ) {
    this.createCategoryForm();
  }

  ngOnInit(): void {
    this.categories$ = this.store.select(fromStore.getAllCategories);
    this.store.dispatch(new fromStore.LoadCategories());
  }

  createCategoryForm() {
    this.categoryForm = this.fb.group({
      id: '',
      categoryName: ['', Validators.required],
      familyCode: '',
      points: '',
      color: '#ededed',
      isParentCategory: true,
      parentId: '',
      delivery: false,
      selfService: false,
      active: true,
      restBranches: this.fb.array([])
    });
    this.setActiveCategoryValue([]);
  }

  rbCheckedChange(event) {
    const { active, index } = event;
    const control = this.categoryForm.controls.restBranches as FormArray;
    const branchId = this.restaurantBranches[index].id;

    this.restaurantBranches[index].activeCategory = active;

    if (active) {
      control.push(
        this.fb.control({
          id: branchId
        })
      );
    } else {
      control.removeAt(
        control.value.findIndex((branch: RestBranch) => branch.id === branchId)
      );
    }
  }

  parentCategoryRequired(required: boolean): void {
    if (!required) {
      this.categoryForm.get('parentId').setValidators([Validators.required]);
      this.categoryForm.get('parentId').markAsTouched();
      this.categoryForm.get('parentId').markAsDirty();
      this.categoryForm.get('parentId').updateValueAndValidity();
    } else {
      this.categoryForm.get('parentId').setValidators([]);
      this.categoryForm.get('parentId').setValue(null);
    }
  }

  setActiveCategoryValue(restBranches: number[]) {
    this.restaurantBranches.map((branch) => {
      branch.activeCategory = restBranches.some((id) => branch.id === id);
    });
  }

  setCategory(category: Category) {
    const branchControl = this.categoryForm.controls.restBranches as FormArray;

    this.cardTittle = 'Mostrar categoría';
    this.disable = true;

    branchControl.clear();
    this.setActiveCategoryValue(category.restBranches);

    this.categoryForm.get('id').setValidators([Validators.required]);
    this.categoryForm.get('parentId').setValidators([]);

    this.categoryForm.patchValue({
      id: category.id,
      categoryName: category.categoryName,
      familyCode: category.familyCode,
      points: category.points,
      color: category.color === '' ? '#ededed' : category.color,
      delivery: category.delivery,
      selfService: category.selfService,
      active: category.active,
      isParentCategory: category.isParentCategory,
      parentId: category.parentId
    });

    category.restBranches.forEach((id) => {
      branchControl.push(
        this.fb.control({
          id
        })
      );
    });

    this.categoryForm.disable();
    this.categoryForm.markAsPristine();
    this.categoryForm.markAsUntouched();
    this.categoryForm.updateValueAndValidity();
  }

  editCategory() {
    this.categoryForm.enable();
    this.disable = false;
    this.edit = true;
    this.cardTittle = 'Editar categoría';
  }

  newCategory() {
    this.categoryForm.enable();
    this.createCategoryForm();
    this.disable = false;
    this.edit = false;
    this.cardTittle = 'Crear categoría';
  }

  viewCategory(category: Category) {
    this.selectedCategory = category;
    console.log(this.selectedCategory);
    this.setCategory(this.selectedCategory);
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      console.log('from container:', this.categoryForm.value);
      this.newCategory();
    }
  }
}
