import { Injectable } from '@angular/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from '../contacts/contact.entity';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
) { }

async  findAll(): Promise<Contact[]> {
  return await this.contactRepository.find();
}

async  create(contact: Contact): Promise<Contact> {
  return await this.contactRepository.save(contact);
}

async update(contact: Contact): Promise<UpdateResult> {
  return await this.contactRepository.update(contact.id, contact);
}

async delete(id): Promise<DeleteResult> {
  return await this.contactRepository.delete(id);
}
}
