import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, share, tap } from 'rxjs/operators';

export interface MissionInterface {
  id: number;
  title: string;
  description?: string;
  timeOfCompletion?: Date;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  private readonly missionsUrl = 'api/missions';
  private missions$?: Observable<MissionInterface[]>;
  completedQuantity$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  pendingQuantity$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) { }

  getMissions(): Observable<MissionInterface[]> {
    if (!this.missions$) {
      this.missions$ = this.http.get<MissionInterface[]>(this.missionsUrl).pipe(
        tap(missions => this.setQuantity(missions)),
        share()
      );
    }

    return this.missions$;
  }

  completeMission(id: number): void {
    this.missions$ = this.getMissions().pipe(
      map(missions => missions.map(mission =>
        id === mission.id ? ({...mission, completed: true, timeOfCompletion: new Date()}) : mission
      )),
      tap(missions => this.setQuantity(missions))
    );
  }

  private setQuantity(missions: MissionInterface[]): void {
    const quantity = missions.reduce((acc: {[status: string]: number}, mission: MissionInterface) => {
      mission.completed ? acc.completed++ : acc.pending++;
      return acc;
    }, { pending: 0, completed: 0 });

    this.pendingQuantity$.next(quantity.pending);
    this.completedQuantity$.next(quantity.completed);
  }
}
