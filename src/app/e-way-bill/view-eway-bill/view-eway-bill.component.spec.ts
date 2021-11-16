import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEwayBillComponent } from './view-eway-bill.component';

describe('ViewEwayBillComponent', () => {
  let component: ViewEwayBillComponent;
  let fixture: ComponentFixture<ViewEwayBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEwayBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEwayBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
