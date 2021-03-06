import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductRoutingModule } from './product-routing.module';

// Reducers
import {reducers, effects} from './store';

/** Import any ng-zorro components as the module required except icon module */
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzRadioModule } from 'ng-zorro-antd/radio';

// containers
import { PanelContainerComponent } from './containers/panel-container/panel-container.component';
import { CategoryTabContainerComponent } from './containers/category-tab-container/category-tab-container.component';
import { DishDrinkTabContainerComponent } from './containers/dish-drink-tab-container/dish-drink-tab-container.component';
import { ComboTabContainerComponent } from './containers/combo-tab-container/combo-tab-container.component';
import { MenuTabContainerComponent } from './containers/menu-tab-container/menu-tab-container.component';
import { SuppliesTabContainerComponent } from './containers/supplies-tab-container/supplies-tab-container.component';

// components
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { CategoryListComponent } from './components/category-list/category-list.component';

//services
import { CategoryService } from '../shared/services/category.service';


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
  NzTagModule,
  NzMenuModule,
  NzFormModule,
  NzCheckboxModule,
  NzTableModule,
  NzCardModule,
  NzRadioModule
];

@NgModule({
  declarations: [
    PanelContainerComponent,
    CategoryTabContainerComponent,
    DishDrinkTabContainerComponent,
    ComboTabContainerComponent,
    MenuTabContainerComponent,
    SuppliesTabContainerComponent,
    CategoryFormComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature(effects),
    ...antdModule
  ],
  providers: [CategoryService],

})
export class ProductModule {}
