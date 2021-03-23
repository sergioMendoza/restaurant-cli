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
  selector: 'app-panel-container',
  templateUrl: './panel-container.component.html'
})
export class PanelContainerComponent implements OnInit {
  

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

  }

}
