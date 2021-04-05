import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Category } from 'src/app/shared/interfaces/category.type';
import { RestaurantBranch } from 'src/app/shared/interfaces/restaurant-branch.type';

@Component({
  selector: 'app-category-tab-container',
  templateUrl: './category-tab-container.component.html'
})
export class CategoryTabContainerComponent implements OnInit {
  categories: Category[] = [
    {
      categoryId: 1,
      categoryName: 'Pescados y mariscos',
      familyCode: '',
      points: 0,
      color: '',
      isParentCategory: true,
      parentCategoryId: null,
      delivery: false,
      selfService: false,
      active: true,
      restBranches: [1, 2, 4]
    },
    {
      categoryId: 2,
      categoryName: 'Bebidas frias',
      familyCode: '',
      points: 0,
      color: '',
      isParentCategory: true,
      parentCategoryId: null,
      delivery: false,
      selfService: false,
      active: true,
      restBranches: []
    },
    {
      categoryId: 3,
      categoryName: 'Bebidas calientes',
      familyCode: '',
      points: 0,
      color: '',
      isParentCategory: false,
      parentCategoryId: 1,
      delivery: false,
      selfService: false,
      active: true,
      restBranches: []
    }
  ];

  restaurantBranches: RestaurantBranch[] = [
    {
      restBranchId: 1,
      restBranchName: 'Miraflores'
    },
    {
      restBranchId: 2,
      restBranchName: 'La molina'
    },
    {
      restBranchId: 4,
      restBranchName: 'San isidro'
    }
  ];

  categoryFilterForm = this.fb.group({
    rbSelector: this.fb.group({
      restBranchId: 0
    }),
    searchCategory: '',
    inactive: false
  });

  categoryForm: FormGroup;

  disable = false;
  edit = false;
  cardTittle = 'Crear categoría';

  constructor(private fb: FormBuilder) {
    this.createCategoryForm();
  }

  ngOnInit(): void {}

  createCategoryForm() {
    this.categoryForm = this.fb.group({
      categoryId: '',
      categoryName: ['', Validators.required],
      familyCode: '',
      points: '',
      color: '#ededed',
      isParentCategory: true,
      parentCategoryId: '',
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
    const branchId = this.restaurantBranches[index].restBranchId;

    this.restaurantBranches[index].activeCategory = active;

    if (active) {
      control.push(
        this.fb.control({
          restBranchId: branchId
        })
      );
    } else {
      control.removeAt(
        control.value.findIndex(
          (branch: RestaurantBranch) => branch.restBranchId === branchId
        )
      );
    }
  }

  parentCategoryRequired(required: boolean): void {
    if (!required) {
      this.categoryForm
        .get('parentCategoryId')
        .setValidators([Validators.required]);
      this.categoryForm.get('parentCategoryId').markAsTouched();
      this.categoryForm.get('parentCategoryId').markAsDirty();
      this.categoryForm.get('parentCategoryId').updateValueAndValidity();
    } else {
      this.categoryForm.get('parentCategoryId').setValidators([]);
      this.categoryForm.get('parentCategoryId').setValue(null);
    }
  }

  setActiveCategoryValue(restBranches: number[]) {
    this.restaurantBranches.map((branch) => {
      branch.activeCategory = restBranches.some(
        (id) => branch.restBranchId === id
      );
    });
  }

  viewCategory(index: number) {
    const category: Category = this.categories[index];
    const branchControl = this.categoryForm.controls.restBranches as FormArray;

    this.cardTittle = 'Mostrar categoría';
    this.disable = true;

    branchControl.clear();
    this.setActiveCategoryValue(category.restBranches);

    this.categoryForm.get('categoryId').setValidators([Validators.required]);
    this.categoryForm.get('parentCategoryId').setValidators([]);

    this.categoryForm.patchValue({
      categoryId: category.categoryId,
      categoryName: category.categoryName,
      familyCode: category.familyCode,
      points: category.points,
      color: category.color === '' ? '#ededed' : category.color,
      delivery: category.delivery,
      selfService: category.selfService,
      active: category.active,
      isParentCategory: category.isParentCategory,
      parentCategoryId: category.parentCategoryId
    });

    category.restBranches.forEach((id) => {
      branchControl.push(
        this.fb.control({
          restBranchId: id
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

  onSubmit() {
    if (this.categoryForm.valid) {
      console.log('from container:', this.categoryForm.value);
      this.newCategory();
    }
  }
}
