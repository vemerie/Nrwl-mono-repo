import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Contact } from './contacts/contact.entity';
import { User } from './auth/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ContactModule,
    AuthModule,

    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [
        Contact,
        User
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
