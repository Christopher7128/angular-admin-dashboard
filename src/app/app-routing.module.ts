import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { ReportsComponent } from './pages/reports/reports.component';

const routes: Routes = [
  // default route
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  // actual pages
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { animation: 'DashboardPage' }
  },
  {
    path: 'users',
    component: UsersComponent,
    data: { animation: 'ProjectsPage' }
  },
  {
    path: 'reports',
    component: ReportsComponent,
    data: { animation: 'ExperiencePage' }
  },

  // catch-all (optional)
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }