/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoproj';
}*/

import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentService } from './observer/student.service';
import {Student} from './observer/student';
import {MessagecommunicationserviceService} from './messagecommnication/messagecommunicationservice.service'
import { Observable } from 'rxjs/Observable';
import { map, switchMap, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  messages: any[] = [];
  subscription: Subscription;

  constructor(private studentservice: StudentService,private messagecommunicationService: MessagecommunicationserviceService) {
    alert('Constructor in app.component');
    /*this.subscription = this.messagecommunicationService.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });*/
  }

  students: Student[] = [];
  title = 'demoproj';
  data: any;
    

  ngOnInit() {
    this.data=this.getDummyData();
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }

    //Call service method or subscribe to get values
    this.search();

  }

  toggleAccordian(event, index) {
    var element = event.target;
    element.classList.toggle("active");
    if(this.data[index].isActive) {
      this.data[index].isActive = false;
    } else {
      this.data[index].isActive = true;
    }      
    var panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
    getDummyData():any{
      [
        {
          "parentName": "Parent One",
          "childProperties":
            [
              { "propertyName": "Property One" },
              { "propertyName": "Property Two" }
            ]
        },
        {
          "parentName": "Parent Two",
          "childProperties":
            [
              { "propertyName": "Property Three" },
              { "propertyName": "Property Four" },
              { "propertyName": "Property Five" },
            ]
        },
        {
          "parentName": "Parent Three",
          "childProperties":
            [
              { "propertyName": "Property Six" },
              { "propertyName": "Property Seven" },
              { "propertyName": "Property Eight" },
            ]
        },
        {
          "parentName": "Parent Four",
          "childProperties":
            [
              { "propertyName": "Property Nine" },
              { "propertyName": "Property Ten" }
            ]
        }
      ]
      return this.data;
    }
    search(){
      const studentsObservable = this.studentservice.getStudents();
        studentsObservable.subscribe((studentsData: Student[]) => {
            this.students = studentsData;
        });
    }

    ngOnDestroy() {
   // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }

}
