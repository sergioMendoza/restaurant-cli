import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-tab-list',
  templateUrl: './product-tab-list.component.html'
})
export class ProductTabListComponent implements OnInit {
  @Input() productList: [];

  constructor() {}

  getAcronym(str: string) {
    const matches = str.match(/\b(\w)/g);
    return matches.join('').toUpperCase();
  }

  ngOnInit(): void {}
}
