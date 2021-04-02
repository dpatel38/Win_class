import { Component, OnInit } from '@angular/core';
import {Trip} from '../trip';
import { TRIPS } from '../mock-trips';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  trips = TRIPS;

  selectedTrip?: Trip;
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(trip: Trip): void {
    this.selectedTrip = trip;
  }
}
