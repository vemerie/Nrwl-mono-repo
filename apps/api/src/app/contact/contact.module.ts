import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from '../contacts/contact.entity';
import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';




@Module({
  providers: [ContactService],
  controllers: [ContactController],
    imports: [
    CommonModule,
    TypeOrmModule.forFeature([Contact]),

  ]
})
export class ContactModule { }
