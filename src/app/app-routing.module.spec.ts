import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app-routing.module';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { NgModuleFactoryLoader } from '@angular/core';
import { PagesModule } from '@pages/pages.module';

describe('#Router: App', () => {

    let location: Location;
    let router: Router;
    let fixture: any;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(routes)],
            declarations: [
                AppComponent
            ]
        });
        router = TestBed.get(Router);
        location = TestBed.get(Location);
        fixture = TestBed.createComponent(AppComponent);
        router.initialNavigation();
    });
    it('#FakeAsync works', fakeAsync(() => {
        const promise = new Promise(resolve => {
            setTimeout(resolve, 10);
        });
        let done = false;
        promise.then(() => (done = true));
        tick(50);
        expect(done).toBeTruthy();
    }));
    it('#Automatically redirects to Dashobard when the app starts',
        async(inject([Router], (object) => {
            object.navigate(['']).then(() => {
                expect(location.path()).toBe('/dashboard');
            });
        })));
    it('#Automatically redirects to error page when wrong URL passed',
        async(inject([Router], (object: { navigate: (arg0: string[]) => Promise<any>; }) => {
            object.navigate(['/test']).then(() => {
                expect(location.path()).toBe('/404');
            });
        })));
});
