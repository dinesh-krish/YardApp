import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginContainterComponent } from './container/login-containter/login-containter.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginContainterComponent
    },
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
