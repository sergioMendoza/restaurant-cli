import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosRoutingModule } from './pos-routing.module';
import { FormsModule } from '@angular/forms';

// Containers
import { PanelContainerComponent } from './containers/panel-container/panel-container.component';

/** Import any ng-zorro components as the module required except icon module */
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { PaymentContainerComponent } from './containers/payment-container/payment-container.component';
import { CartItemListComponent } from './components/cart-item-list/cart-item-list.component';
import { ProductTabListComponent } from './components/product-tab-list/product-tab-list.component';
import { CategoryTabListComponent } from './components/category-tab-list/category-tab-list.component';


/** Assign all ng-zorro modules to this array*/
const antdModule = [
  NzButtonModule,
  NzAvatarModule,
  NzInputModule,
  NzIconModule,
  NzTabsModule,
  NzGridModule,
  NzDividerModule,
  NzSelectModule,
  FormsModule
];

@NgModule({
  declarations: [PanelContainerComponent, PaymentContainerComponent, CartItemListComponent, ProductTabListComponent, CategoryTabListComponent],
  imports: [CommonModule, PosRoutingModule, ...antdModule],
  exports: []
})
export class PosModule {}
