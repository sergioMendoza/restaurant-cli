import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

export interface RestaurantBranch {
  id: number;
  name: string;
}


@Component({
  selector: 'app-category-tab-container',
  templateUrl: './category-tab-container.component.html'
})
export class CategoryTabContainerComponent implements OnInit {
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

  listOfData: Person[] = [
    {
      key: '1',
      name: 'Pescados y mariscos',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Bebidas frias',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Bebidas calientes',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  selectedValue = '1';
  validateForm!: FormGroup;

  checked = false;
  loading = false;
  indeterminate = false;
  listOfData2: ReadonlyArray<RestaurantBranch> = [];
  listOfCurrentPageData: ReadonlyArray<RestaurantBranch> = [];
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

    console.log(`I will init when tab active`);


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

    this.listOfData2 = new Array(5).fill(0).map((_, index) => ({
        id: index,
        name: `Local ${index}`
            }));
  }
  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: ReadonlyArray<RestaurantBranch>): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
  }

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
