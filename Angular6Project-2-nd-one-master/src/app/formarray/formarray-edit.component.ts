import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-formarray-edit',
  templateUrl: './formarray-edit.component.html',
  styleUrls: ['./formarray-edit.component.css']
})
export class FormarrayEditComponent implements OnInit {
  id:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    alert('For array edit ngOnInit');
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log("this.id"+this.id)
    });
  }

}
