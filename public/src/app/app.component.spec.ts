import {TestBed, async, inject, tick, fakeAsync} from '@angular/core/testing';
import {Location} from '@angular/common';
import { AppComponent } from './app.component';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpModule} from '@angular/http';

describe('AppComponent', () => {
  let location: Location;
  let router
  let fixture;
  console.log(config.route)
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: config.declarations,
      imports: [ HttpModule, RouterTestingModule.withRoutes(config.route)],
      providers: config.provider
  });
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
  }));
  it('should go home', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/');
  }));
  it('should go Info', fakeAsync(() => {
    router.navigate(['/info']);
    tick();
    expect(location.path()).toBe('/info');
  }));
  it('should go Git', fakeAsync(() => {
    router.navigate(['/git']);
    tick();
    expect(location.path()).toBe('/git');
  }));


});
