import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEwayBillComponent } from './create-eway-bill/create-eway-bill.component';

const routes: Routes = [
  {
    path: '',
    component: CreateEwayBillComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EWayBillRoutingModule { }
