import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
} from '@angular/forms';
import { Category } from 'src/app/shared/interfaces/category.type';
import { RestaurantBranch } from 'src/app/shared/interfaces/restaurant-branch.type';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html'
})
export class CategoryFormComponent implements OnInit {
  @Input()
  parent: FormGroup;

  @Input()
  restaurantBranches: RestaurantBranch[];

  @Input()
  parentCategories: Category[];

  @Input()
  disable: boolean;

  @Input()
  edit: boolean;

  @Output()
  rbCheckedChange = new EventEmitter<any>();

  @Output()
  checkParentCategory = new EventEmitter<boolean>();

  @Output()
  catSubmit = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  get isParentCategory(): boolean {
    return this.parent.get('isParentCategory').value;
  }

  rbOnCheckedChange(active: boolean, index: number): void {
    this.rbCheckedChange.emit({ active, index });
  }

  onParentCategoryRequired(required: boolean): void {
    this.checkParentCategory.emit(required);
  }

  onSubmit(): void {
    this.catSubmit.emit(this.parent);
  }
}
