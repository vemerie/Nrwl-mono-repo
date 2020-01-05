import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Contact } from './contacts/contact.entity';

@Module({
  imports: [
    ContactModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [
        Contact
    ],
      synchronize: true,
      migrations: [__dirname + '/migration/**/*.ts'],
      subscribers: [__dirname + '/subscriber/**/*.ts'],
   })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
