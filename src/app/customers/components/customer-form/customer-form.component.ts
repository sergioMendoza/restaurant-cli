import { Component, Input, OnInit } from '@angular/core';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html'
})
export class CustomerFormComponent implements OnInit {

  @Input() value = '';

  constructor(private drawerRef: NzDrawerRef<string>) {}

  close(): void {
    this.drawerRef.close(this.value);
  }

  ngOnInit(): void {
  }

}
