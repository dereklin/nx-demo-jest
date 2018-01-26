import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNavComponent } from './tab-nav.component';
import { Dummy1Service } from '@nx-demo-jest/dummy1-service';

describe('TabNavComponent', () => {
  let component: TabNavComponent;
  let fixture: ComponentFixture<TabNavComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [TabNavComponent],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [
          Dummy1Service
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TabNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
