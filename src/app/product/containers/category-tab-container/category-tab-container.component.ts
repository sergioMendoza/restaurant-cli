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
    this.setActiveCategoryValue([]);
  }

  ngOnInit(): void {
    console.log('CategoryFilterForm', this.categoryFilterForm.value);
  }

  createCategoryForm(): void {
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
  }

  rbCheckedChange(event) {
    const { active, index } = event;
    const control = this.categoryForm.controls.restBranches as FormArray;
    const branchId = this.restaurantBranches[index].restBranchId;

    this.restaurantBranches[index].activeCategory = active;

    if (active) {
      const localRestBranch = this.fb.group({
        restBranchId: branchId
      });
      control.push(localRestBranch);
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
    }
  }

  setActiveCategoryValue(restBranches: number[]) {
    this.restaurantBranches.map((branch) => {
      branch.activeCategory = restBranches.some(
        (id) => branch.restBranchId === id
      );
    });
    console.log(this.restaurantBranches);
  }

  viewCategory(index: number) {
    const category: Category = this.categories[index];
    const color: string = category.color === '' ? '#ededed' : category.color;

    this.cardTittle = 'Mostrar categoría';
    this.disable = true;
    this.setActiveCategoryValue(category.restBranches);

    this.categoryForm.get('categoryId').setValidators([Validators.required]);
    this.categoryForm.get('categoryId').setValue(category.categoryId);
    this.categoryForm.get('categoryName').setValue(category.categoryName);
    this.categoryForm.get('familyCode').setValue(category.familyCode);
    this.categoryForm.get('points').setValue(category.points);
    this.categoryForm.get('color').setValue(color);
    this.categoryForm.get('delivery').setValue(category.delivery);
    this.categoryForm.get('selfService').setValue(category.selfService);
    this.categoryForm.get('active').setValue(category.active);

    this.categoryForm
      .get('isParentCategory')
      .setValue(category.isParentCategory);

    this.categoryForm
      .get('parentCategoryId')
      .setValue(category.parentCategoryId);

    this.categoryForm.disable();
    this.categoryForm.markAsPristine();
    this.categoryForm.markAsUntouched();
    this.categoryForm.updateValueAndValidity();

    console.log('view category', this.categoryForm.value);
  }

  editCategory() {
    this.disable = false;
    this.edit = true;
    this.cardTittle = 'Editar categoría';
    this.categoryForm.enable();
    console.log('edit category', this.categoryForm.value);
  }

  newCategory() {
    this.createCategoryForm();
    this.setActiveCategoryValue([]);
    this.disable = false;
    this.edit = false;
    this.cardTittle = 'Crear categoría';
    console.log('new category', this.categoryForm.value);
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      console.log('from container:', this.categoryForm.value);
    }
  }
}
