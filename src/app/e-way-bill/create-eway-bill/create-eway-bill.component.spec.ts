import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEwayBillComponent } from './create-eway-bill.component';

describe('CreateEwayBillComponent', () => {
  let component: CreateEwayBillComponent;
  let fixture: ComponentFixture<CreateEwayBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEwayBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEwayBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
