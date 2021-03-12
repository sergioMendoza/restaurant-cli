import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html'
})
export class CartItemListComponent implements OnInit {
  @Input() cart: [];
  @Output() addNote = new EventEmitter<number>();
  @Output() addQuantity = new EventEmitter<number>();
  @Output() deleteItem = new EventEmitter<number>();
  @Output() deleteNote = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}


  sliceTagName(tag: string): string {
    const isLongTag = tag.length > 20;
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

  _addNote(value: number) {
    this.addNote.emit(value);
  }

  _addQuantity(value: number) {
    this.addQuantity.emit(value);
  }

  _deleteItem(value: number) {
    this.deleteItem.emit(value);
  }

  _deleteNote(indexItem, indexTag): void {
    this.deleteNote.emit({ indexItem, indexTag });
  }

}
