import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiSiamoComponent } from './chi-siamo.component';
import { ChiSiamoRoutingModule } from './chi-siamo-routing.module';
import { TeamComponent } from './team/team.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ChiSiamoComponent, TeamComponent],
  imports: [CommonModule, ChiSiamoRoutingModule, SharedModule],
})
export class ChiSiamoModule {}
