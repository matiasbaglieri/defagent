import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Counter1_l2Component } from './counter1_l2.component';

describe('Counter1_l2Component', () => {
  let component: Counter1_l2Component;
  let fixture: ComponentFixture<Counter1_l2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Counter1_l2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Counter1_l2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
