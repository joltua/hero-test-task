import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionsListComponent } from './missions/missions-list/missions-list.component';
import { MissionsComponent } from './missions/missions.component';

const childrenRoutes: Routes = [
  {
    path: '', redirectTo: 'pending', pathMatch: 'full'
  },
  {
    path: 'pending',
    component: MissionsListComponent,
    data: { missionStatus: 'pending' }
  },
  {
    path: 'completed',
    component: MissionsListComponent,
    data: { missionStatus: 'completed' }
  },
];

const routes: Routes = [
  { path: '', component: MissionsComponent, children: childrenRoutes },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MissionRoutingModule {}
