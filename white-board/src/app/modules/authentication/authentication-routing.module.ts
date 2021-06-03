import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './../../modules/authentication/authentication.component';

const routes: Routes = [
    {
        path: '',
        component: AuthenticationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: []
})
export class AuthenticationRoutingModule { }
