import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidBasketComponent } from './valid-basket.component';

describe('ValidBasketComponent', () => {
  let component: ValidBasketComponent;
  let fixture: ComponentFixture<ValidBasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidBasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
