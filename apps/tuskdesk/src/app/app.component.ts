import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
interface Ticket {
  id: number;
  title: string;
}
@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tickets;

  constructor(http:HttpClient) {
    this.tickets = http.get('/api/tickets');
  }
}

