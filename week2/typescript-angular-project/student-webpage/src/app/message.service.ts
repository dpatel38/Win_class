import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: String[] = [];

  //add message to our array
  add(message: string) {
    this.messages.push(message);
  }

  //clear message after added in our array
  clear(){
    this.messages = [];
  }
  constructor() { }
}
