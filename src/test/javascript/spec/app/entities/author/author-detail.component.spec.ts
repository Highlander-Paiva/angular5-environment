/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { EnvAng5TestModule } from '../../../test.module';
import { AuthorDetailComponent } from '../../../../../../main/webapp/app/entities/author/author-detail.component';
import { AuthorService } from '../../../../../../main/webapp/app/entities/author/author.service';
import { Author } from '../../../../../../main/webapp/app/entities/author/author.model';

describe('Component Tests', () => {

    describe('Author Management Detail Component', () => {
        let comp: AuthorDetailComponent;
        let fixture: ComponentFixture<AuthorDetailComponent>;
        let service: AuthorService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [EnvAng5TestModule],
                declarations: [AuthorDetailComponent],
                providers: [
                    AuthorService
                ]
            })
            .overrideTemplate(AuthorDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(AuthorDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(AuthorService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new Author(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.author).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
