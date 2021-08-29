import { Component, OnInit } from '@angular/core';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {
  activeTab: 'pending' | 'completed' = 'pending';

  constructor(
    public missionService: MissionService
    ) {
  }

  ngOnInit(): void {
  }
}
