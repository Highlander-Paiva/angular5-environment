import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EnvAng5BarchartModule } from './barchart/barchart.module';
import { EnvAng5DoughnutchartModule } from './doughnutchart/doughnutchart.module';
import { EnvAng5LinechartModule } from './linechart/linechart.module';
import { EnvAng5PiechartModule } from './piechart/piechart.module';
import { EnvAng5PolarareachartModule } from './polarareachart/polarareachart.module';
import { EnvAng5RadarchartModule } from './radarchart/radarchart.module';

@NgModule({
    imports: [
        EnvAng5BarchartModule,
        EnvAng5DoughnutchartModule,
        EnvAng5LinechartModule,
        EnvAng5PiechartModule,
        EnvAng5PolarareachartModule,
        EnvAng5RadarchartModule,
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EnvAng5DashboardModule {}
