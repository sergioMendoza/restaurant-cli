import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelContainerComponent } from './containers/panel-container/panel-container.component';

const routes: Routes = [
    {
        path: 'panel',
        component: PanelContainerComponent,
        data: {
            title: 'Panel'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PosRoutingModule { }
