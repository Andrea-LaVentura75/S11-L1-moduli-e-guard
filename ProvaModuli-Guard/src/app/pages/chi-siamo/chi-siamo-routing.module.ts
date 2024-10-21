import { ChiSiamoModule } from './chi-siamo.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChiSiamoComponent } from './chi-siamo.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path: '',
    component: ChiSiamoComponent,
  },
  {
    path: 'team',
    component: TeamComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChiSiamoRoutingModule {}
