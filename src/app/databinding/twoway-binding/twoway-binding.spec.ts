import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowayBinding } from './twoway-binding';

describe('TwowayBinding', () => {
  let component: TwowayBinding;
  let fixture: ComponentFixture<TwowayBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwowayBinding],
    }).compileComponents();

    fixture = TestBed.createComponent(TwowayBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
