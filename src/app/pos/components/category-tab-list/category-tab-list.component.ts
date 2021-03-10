import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-tab-list',
  templateUrl: './category-tab-list.component.html'
})
export class CategoryTabListComponent implements OnInit {
  @Input() categoryList: [];
  constructor() {}

  ngOnInit(): void {}
}
