import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryTabContainerComponent } from './containers/category-tab-container/category-tab-container.component';
import { PanelContainerComponent } from './containers/panel-container/panel-container.component';

const routes: Routes = [
  {
    path: 'panel',
    component: PanelContainerComponent,
    data: {
      title: 'Panel'
    }
  },
  {
    path: 'category',
    component: CategoryTabContainerComponent,
    data: {
      title: 'Category'
    }
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
