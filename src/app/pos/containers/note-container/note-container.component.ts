import { Component, Input, OnInit } from '@angular/core';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-note-container',
  templateUrl: './note-container.component.html',
})
export class NoteContainerComponent implements OnInit {

  @Input() value = '';

  constructor(private drawerRef: NzDrawerRef<string>) {}

  close(): void {
    this.drawerRef.close(this.value);
  }


  ngOnInit(): void {
  }

}
