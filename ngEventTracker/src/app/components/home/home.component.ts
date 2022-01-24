import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title= 'EventTracker';
  property: Property[] = [
    new Property()


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
