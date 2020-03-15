import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent }
  // { path: 'pages', loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
