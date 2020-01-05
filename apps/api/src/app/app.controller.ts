import { Controller, Get } from '@nestjs/common';
import {Ticket} from './app.service'
import { Message } from '@myorg/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('tickets')
  getData(): Ticket [] {
    return this.appService.getData();
  }
}
