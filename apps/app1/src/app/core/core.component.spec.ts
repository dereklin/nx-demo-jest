import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpServiceModule } from '@nx-demo-jest/http-service';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';

describe('CoreComponent', () => {
  let component: CoreComponent;
  let fixture: ComponentFixture<CoreComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [CoreComponent],
        imports: [
          RouterModule,
          CoreRoutingModule,
          RouterTestingModule,
          HttpServiceModule.register({httpServiceSettings: {}})
        ],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
