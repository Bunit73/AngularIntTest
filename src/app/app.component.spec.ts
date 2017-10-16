/* tslint:disable:no-unused-variable */
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([]) ],
      declarations: [
        AppComponent
      ],
      // Ignores unknown components
      schemas: [ NO_ERRORS_SCHEMA ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));

  it('should have a router outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(de).not.toBeNull();

  })
});
