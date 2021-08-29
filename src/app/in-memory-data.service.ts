import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const missions = [
      {
        id: 1,
        title: 'Gotham City criminals rise again',
        description: 'Batman went away for a few days and the crime and corruption rates increased, another super hero has to step in',
        completed: false
      },
      {
        id: 2,
        title: 'Saving Private Rayan',
        description: 'Miller soon receives orders to lead a unit to find Ryan. Arriving in the contested town of Neuville between the German defenders and the 101st Airborne, it is learned that Ryan is defending a key bridge in the fictional town of Ramelle.',
        completed: false
      },
      {
        id: 3,
        title: 'Miracle on the Hudson',
        description: 'On the afternoon of January 15, 2009, Captain Chesley Sullenberger and First Officer Jeff Skiles board US Airways Flight 1549 from LaGuardia Airport to Charlotte Douglas International Airport. Three minutes into the flight, at an approximate altitude of 2,800 ft (850 m), the Airbus A320 strikes a flock of birds, damaging both engines.',
        completed: false
      },
      {
        id: 4,
        title: 'Boat rescue!!!',
        timeOfCompletion: '1572537600000',
        completed: true
      },
      {
        id: 5,
        title: 'Wildfires out of control',
        timeOfCompletion: '1625068799999',
        completed: true
      },
      {
        id: 6,
        title: 'Atlantic Hurricane',
        timeOfCompletion: '1625176800000',
        completed: true
      }
    ];

    return {heroes, missions};
  }


  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
