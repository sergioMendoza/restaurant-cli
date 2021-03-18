import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-panel-container',
  templateUrl: './panel-container.component.html'
})
export class PanelContainerComponent implements OnInit {
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
      this.validateForm.get('nickname')?.clearValidators();
      this.validateForm.get('nickname')?.markAsPristine();
    } else {
      this.validateForm.get('nickname')?.setValidators(Validators.required);
      this.validateForm.get('nickname')?.markAsDirty();
    }
    this.validateForm.get('nickname')?.updateValueAndValidity();
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      nickname: [null],
      required: [false]
    });
  }
}
