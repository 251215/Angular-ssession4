import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarralateralComponent } from './body/barralateral/barralateral.component';
const routes: Routes = [
  { path: 'barralateral',component: BarralateralComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'barralateral'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
