import { Injectable } from '@nestjs/common';
import { Message } from '@myorg/api-interfaces';

export interface Ticket {
  id: number;
  title: string;
}

@Injectable()
export class AppService {
  getData():Ticket[] {
    return this.tickets;
  }


   tickets: Ticket[] = [
    {
      id: 1,
      title: 'Login page is broken'
    },
    {
      id: 2,
      title: 'Everything is broken'
    }
  ];
}
