import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2Component } from './feature2.component';

describe('Feature2Component', () => {
  let component: Feature2Component;
  let fixture: ComponentFixture<Feature2Component>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [Feature2Component]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Feature2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
