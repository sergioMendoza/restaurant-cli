import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { Category } from 'src/app/shared/interfaces/category.type';
import { RestaurantBranch } from 'src/app/shared/interfaces/restaurant-branch.type';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent implements OnInit {
  @Input()
  parent: FormGroup;

  @Input()
  restaurantBranches: RestaurantBranch[];

  @Input()
  categories$: Observable<Category[]>;

  @Output()
  checkedChange = new EventEmitter<boolean>();

  @Output()
  viewCategory = new EventEmitter<Category>();

  constructor() {}

  ngOnInit(): void {}

  onCheckedChange(event): void {
    this.checkedChange.emit(event);
  }

  onViewCategory(category: Category) {
    this.viewCategory.emit(category);
  }
}
