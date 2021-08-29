import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionRoutingModule } from './mission-routing.module';
import { MissionsComponent } from './missions/missions.component';
import { MissionsListComponent } from './missions/missions-list/missions-list.component';



@NgModule({
  declarations: [
    MissionsComponent,
    MissionsListComponent
  ],
  imports: [
    CommonModule,
    MissionRoutingModule
  ]
})
export class MissionModule { }
