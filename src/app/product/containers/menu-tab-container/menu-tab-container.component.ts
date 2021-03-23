import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-tab-container',
  templateUrl: './menu-tab-container.component.html',
})
export class MenuTabContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(`I will init when tab active`);
  }

}
