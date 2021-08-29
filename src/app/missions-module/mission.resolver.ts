import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MissionInterface, MissionService } from './mission.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MissionResolver implements Resolve<MissionInterface[]> {
  constructor(private missionService: MissionService) {}

  // It needs in order to start fetching missions before component will completely loaded

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<MissionInterface[]> {
    return this.missionService.getMissions();
  }

}
