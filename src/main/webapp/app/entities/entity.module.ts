import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { EnvAng5AuthorModule } from './author/author.module';
import { EnvAng5BookModule } from './book/book.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        EnvAng5AuthorModule,
        EnvAng5BookModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EnvAng5EntityModule {}
