import { Component, OnInit } from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  public size: number;
  public square: number;

  constructor(private dataService:DataService) {
    this.size = 16;
    this.square = Math.sqrt(this.size);
    dataService.setOption('size', this.size);
    dataService.setOption('square', this.square);
  }

  ngOnInit() {
  }

}
