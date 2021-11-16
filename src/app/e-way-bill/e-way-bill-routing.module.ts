import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEwayBillComponent } from './create-eway-bill/create-eway-bill.component';
import { ViewEwayBillComponent } from './view-eway-bill/view-eway-bill.component';

const routes: Routes = [
  {
    path: '',
    component: CreateEwayBillComponent
  },
  {
    path: 'view-bill',
    component: ViewEwayBillComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EWayBillRoutingModule { }
