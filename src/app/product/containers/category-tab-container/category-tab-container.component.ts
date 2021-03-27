import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Category } from 'src/app/shared/interfaces/category.type';
import {
  RestaurantBranch,
  RestBranchCategory
} from 'src/app/shared/interfaces/restaurant-branch.type';

@Component({
  selector: 'app-category-tab-container',
  templateUrl: './category-tab-container.component.html'
})
export class CategoryTabContainerComponent implements OnInit {
  restBranchesById = [
    {
      restBranchId: 1
    }
  ];

  categories: Category[] = [
    {
      categoryId: 1,
      categoryName: 'Pescados y mariscos',
      active: true
    },
    {
      categoryId: 2,
      categoryName: 'Bebidas frias',
      active: true
    },
    {
      categoryId: 3,
      categoryName: 'Bebidas calientes',
      active: true
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

  restBranchesMatchCategory: RestBranchCategory[] = [];

  categoryFilterForm: FormGroup;

  categoryForm = this.fb.group({
    categoryName: ['', Validators.required],
    familyCode: '',
    points: '',
    color: '#ededed',
    orderNumber: '',
    isParentCategory: true,
    delivery: false,
    selfService: false,
    active: true,
    restBranches: this.fb.array([])
  });

  selectedValue = 1;
  rbDisable = true;

  constructor(private fb: FormBuilder) {}

  rbCheckedChange(event) {
    const { active, index } = event;
    const control = this.categoryForm.controls.restBranches as FormArray;
    const branchId = this.restBranchesMatchCategory[index].restBranchId;

    this.restBranchesMatchCategory[index].active = active;

    if (active) {
      const localRestBranch = this.fb.group({
        restBranchId: branchId
      });
      control.push(localRestBranch);
    } else {
      control.removeAt(
        control.value.findIndex((branch) => branch.restBranchId === branchId)
      );
    }
  }

  parentCategoryRequired(required: boolean): void {
    if (!required) {
      this.categoryForm.addControl(
        'parentCategory',
        this.fb.group({
          categoryId: [Validators.required]
        })
      );
      this.categoryForm.controls.parentCategory
        .get('categoryId')
        .setValidators([Validators.required]);
      this.categoryForm.controls.parentCategory.markAllAsTouched();
      this.categoryForm.controls.parentCategory
        .get('categoryId')
        .updateValueAndValidity();
    } else {
      this.categoryForm.removeControl('parentCategory');
    }
  }

  onSubmit() {
    if(this.categoryForm.valid){
      console.log('from container:', this.categoryForm.value);
    }

  }

  mapRestaurantBranches() {
    this.restaurantBranches.forEach((branch) => {
      this.restBranchesMatchCategory.push({ ...branch, active: false });
    });
  }

  ngOnInit(): void {
    this.mapRestaurantBranches();
    this.categoryForm.disable();
    //console.log('CategoryForm', this.categoryForm.value);
  }
}
