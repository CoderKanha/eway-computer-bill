import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EWayBillRoutingModule } from './e-way-bill-routing.module';
import { CreateEwayBillComponent } from './create-eway-bill/create-eway-bill.component';
import { ViewEwayBillComponent } from './view-eway-bill/view-eway-bill.component';
import { HeaderComponent } from './header/header.component';
import { ParcelDetailComponent } from './parcel-detail/parcel-detail.component';
import { BillDetailComponent } from './bill-detail/bill-detail.component';
import { BankDetailComponent } from './bank-detail/bank-detail.component';


@NgModule({
  declarations: [
    CreateEwayBillComponent,
    ViewEwayBillComponent,
    HeaderComponent,
    ParcelDetailComponent,
    BillDetailComponent,
    BankDetailComponent
  ],
  imports: [
    CommonModule,
    EWayBillRoutingModule
  ]
})
export class EWayBillModule { }
