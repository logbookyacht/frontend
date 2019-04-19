import { Component, OnInit } from '@angular/core';
import Log from 'src/app/models/Log';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

    logs: Log[]= [{
      title: 'Bruinisse',
      date: '12-4-2013 11:23',
      from: 'Bruinisse',
      to: 'Port Zeelande',
      distance: '14'
    },
    {
    title: 'Test',
    date: '124',
    from: 'a',
    to: 'a',
    distance: '1'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
