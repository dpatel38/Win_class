import { Component, Input, OnInit } from '@angular/core';
import {Trip} from '../trip';

@Component({
  selector: 'app-trips-detail',
  templateUrl: './trips-detail.component.html',
  styleUrls: ['./trips-detail.component.css']
})
export class TripsDetailComponent implements OnInit {
  @Input() trip?: Trip;
  
  constructor() { }

  ngOnInit(): void {
  }

}
