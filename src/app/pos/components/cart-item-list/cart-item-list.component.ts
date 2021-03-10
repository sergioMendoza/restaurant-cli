import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html'
})
export class CartItemListComponent implements OnInit {
  @Input() cart: [];
  @Output() addNote = new EventEmitter<number>();
  @Output() addQuantity = new EventEmitter<number>();
  @Output() deleteItem = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  _addNote(value: number) {
    this.addNote.emit(value);
  }
  _addQuantity(value: number) {
    this.addQuantity.emit(value);
  }
  _deleteItem(value: number) {
    this.deleteItem.emit(value);
  }
}
