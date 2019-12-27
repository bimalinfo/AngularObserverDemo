import { Component, OnInit } from '@angular/core';
import {MessagecommunicationserviceService} from '../../messagecommnication/messagecommunicationservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private messagecommunicationserviceService:MessagecommunicationserviceService) { }

  ngOnInit() {
  }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messagecommunicationserviceService.sendMessage('Message from Home Component to App Component!');
}

clearMessages(): void {
   // clear messages
    this.messagecommunicationserviceService.clearMessages();
}

}
