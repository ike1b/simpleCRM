import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansComponent } from './loans/loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { AddLoansComponent } from './add-loans/add-loans.component';

const routes: Routes = [
  {
    path: 'loans',
    component: LoansComponent
  },
  {
    path: 'loan-types',
    component: LoanTypesComponent,
    outlet : 'sidebar'
  },
  {
    path: 'loans/add-loans',
    component: AddLoansComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
