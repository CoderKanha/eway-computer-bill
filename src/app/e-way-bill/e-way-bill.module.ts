import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EWayBillRoutingModule } from './e-way-bill-routing.module';
import { CreateEwayBillComponent } from './create-eway-bill/create-eway-bill.component';


@NgModule({
  declarations: [
    CreateEwayBillComponent
  ],
  imports: [
    CommonModule,
    EWayBillRoutingModule
  ]
})
export class EWayBillModule { }
