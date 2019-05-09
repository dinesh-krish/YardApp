import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AuthRoutingModule } from './auth-routing-module';

import * as fromComponent from './components/index';
import * as fromContainerComponent from './container/index';



@NgModule({
    declarations: [
        ...fromComponent.components,
        ...fromContainerComponent.containerComponent

    ],
    exports: [],
    imports: [
        CommonModule,
        IonicModule,
        AuthRoutingModule,
    ]

})
export class AuthModule { }
