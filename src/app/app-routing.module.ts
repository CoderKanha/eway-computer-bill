import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'eway-bill',
    pathMatch: 'full'
  },
  {
    path: 'eway-bill',
    loadChildren: () => import('./e-way-bill/e-way-bill.module').then(module => module.EWayBillModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
