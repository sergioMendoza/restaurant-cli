import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combo-tab-container',
  templateUrl: './combo-tab-container.component.html'
})
export class ComboTabContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(`I will init when tab active`);
  }

}
