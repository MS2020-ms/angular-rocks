
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [
    {
        path: 'list',
        component: PagesComponent,
        loadChildren: () => import('./child-routes.module').then(modulo => modulo.ChildRoutesModule)
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }