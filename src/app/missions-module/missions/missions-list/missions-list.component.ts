import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../../hero.service';
import { MissionService } from '../../mission.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from '../../../hero';

@Component({
  selector: 'app-missions-list',
  templateUrl: './missions-list.component.html',
  styleUrls: ['./missions-list.component.css']
})
export class MissionsListComponent implements OnInit {
  missionStatus!: string;
  heroes$: Observable<Hero[]>;

  constructor(
    public missionService: MissionService,
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute
    ) {
    this.heroes$ = this.heroService.getHeroes();
  }

  ngOnInit(): void {
    this.missionStatus = this.activatedRoute.snapshot.data.missionStatus;
  }
}
