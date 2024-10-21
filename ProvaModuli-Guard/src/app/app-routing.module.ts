import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'chi-siamo',
    loadChildren: () =>
      import('./pages/chi-siamo/chi-siamo.module').then(
        (m) => m.ChiSiamoModule
      ),
    canActivate: [LoginGuard],
    canActivateChild: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
