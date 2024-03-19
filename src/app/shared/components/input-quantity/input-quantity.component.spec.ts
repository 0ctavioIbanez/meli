import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputQuantityComponent } from './input-quantity.component';

describe('InputQuantityComponent', () => {
  let component: InputQuantityComponent;
  let fixture: ComponentFixture<InputQuantityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputQuantityComponent]
    });
    fixture = TestBed.createComponent(InputQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
