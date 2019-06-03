import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/models/Log/log';


@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

    logs: Log[]= [{
      id: 1,
      title: 'Bruinisse',
      date: 2,
      from: 'Bruinisse',
      to: 'Port Zeelande',
      distance: 14,
    },
    {
    id: 2,
    title: 'Test',
    date: 2,
    from: 'a',
    to: 'a',
    distance: 4
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}