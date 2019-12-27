import { Component, OnInit } from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  public data;
  constructor(dataService: DataService) {
    //debugger;
    this.data = dataService.getOption();
  }

  ngOnInit() {

  }

}
