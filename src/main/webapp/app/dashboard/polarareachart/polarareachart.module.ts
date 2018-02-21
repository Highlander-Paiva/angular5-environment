import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EnvAng5SharedModule } from '../../shared';
import { ChartModule } from 'primeng/primeng';

import {
    PolarareachartComponent,
    polarareachartRoute
} from './';

const DASHBOARD_STATES = [
    polarareachartRoute
];

@NgModule({
    imports: [
        EnvAng5SharedModule,
        ChartModule,
        RouterModule.forRoot(DASHBOARD_STATES, { useHash: true })
    ],
    declarations: [
        PolarareachartComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EnvAng5PolarareachartModule {}
