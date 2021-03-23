import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplies-tab-container',
  templateUrl: './supplies-tab-container.component.html'
})
export class SuppliesTabContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(`I will init when tab active`);
  }

}
