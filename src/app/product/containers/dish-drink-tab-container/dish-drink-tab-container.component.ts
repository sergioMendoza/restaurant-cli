import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { th } from 'date-fns/locale';

interface Product {
  id: number;
  key: string;
  name: string;
  modified: boolean;
  active: boolean;
}

export interface RestaurantBranch {
  id: number;
  name: string;
}
@Component({
  selector: 'app-dish-drink-tab-container',
  templateUrl: './dish-drink-tab-container.component.html'
})
export class DishDrinkTabContainerComponent implements OnInit {
  tabs = [
    {
      name: 'Categorias',
      icon: 'apple'
    },
    {
      name: 'Platos y bebidas',
      icon: 'android'
    }
  ];

  listOfData: Product[] = [
    {
      id: 1,
      key: '1',
      name: 'Pescados y mariscos',
      modified: true,
      active: true
    },
    {
      id: 2,
      key: '2',
      name: 'Bebidas frias',
      modified: true,
      active: true
    },
    {
      id: 3,
      key: '3',
      name: 'Bebidas calientes',
      modified: true,
      active: true
    }
  ];
  selectedValue = '1';
  validateForm!: FormGroup;
  productFilterForm!: FormGroup;
  productForm!: FormGroup;

  checked = false;
  loading = false;
  indeterminate = false;
  modified = true;
  listOfData2: ReadonlyArray<RestaurantBranch> = [];
  listOfCurrentPmodifiedData: ReadonlyArray<RestaurantBranch> = [];
  setOfCheckedId = new Set<number>();

  constructor(private fb: FormBuilder) {}

  submitForm(): void {
    // eslint-disable-next-line guard-for-in
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  requiredChange(required: boolean): void {
    if (!required) {
      this.validateForm.get('parentCategory')?.clearValidators();
      this.validateForm.get('parentCategory')?.markAsPristine();
    } else {
      this.validateForm
        .get('parentCategory')
        ?.setValidators(Validators.required);
      this.validateForm.get('parentCategory')?.markAsDirty();
    }
    this.validateForm.get('parentCategory')?.updateValueAndValidity();
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      fcode: [null],
      points: [null],
      color: [null],
      orderNumber: [null],
      isSubCategory: [false],
      parentCategory: [null],
      delivery: [false],
      selfService: [false],
      active: [true]
    });

    this.productFilterForm = this.fb.group({
      restaurantBranch: [null],
      categoryBranch: [null],
      searchProduct: [null],
      activeProduct: [true]
    });

    this.productForm = this.fb.group({
      id: [null],
      name: [null],
      modified: [true],
      category: [null],
      description: [null, [Validators.maxLength(100)]],
      key: [null],
      favorite:[false],
      active: [true],

    });

    this.listOfData2 = new Array(5).fill(0).map((_, index) => ({
      id: index,
      name: `Local ${index}`
    }));
  }

  get favorite(){
    return this.productForm.get('favorite');
  }

  setFavorite() {
    this.productForm.controls.favorite.setValue(!this.productForm.controls.favorite.value);
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onCurrentPmodifiedDataChange(
    listOfCurrentPmodifiedData: ReadonlyArray<RestaurantBranch>
  ): void {
    this.listOfCurrentPmodifiedData = listOfCurrentPmodifiedData;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {}

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.refreshCheckedStatus();
  }

  sendRequest(): void {
    this.loading = true;
  }
}
