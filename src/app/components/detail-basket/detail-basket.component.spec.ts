import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBasketComponent } from './detail-basket.component';

describe('DetailBasketComponent', () => {
  let component: DetailBasketComponent;
  let fixture: ComponentFixture<DetailBasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
