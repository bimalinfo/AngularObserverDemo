import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagecommunicationserviceService {

  constructor() { }

  private subject = new Subject<any>();

    sendMessage(message: string) {
        alert('sendMessage: '+message);
        this.subject.next({ text: message });
    }

    clearMessages() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
      return this.subject.asObservable();
    }

}
