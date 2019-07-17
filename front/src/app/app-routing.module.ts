import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminPricesComponent } from './admin/admin-prices/admin-prices.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminPricesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
