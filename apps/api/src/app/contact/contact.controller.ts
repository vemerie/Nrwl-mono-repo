import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from '../contacts/contact.entity';



@Controller('contact')
export class ContactController {
  constructor(private contactsService: ContactService){}

  @Get()
  index(): Promise<Contact[]> {
    return this.contactsService.findAll();
  }

  @Post('create')
    async create(@Body() contactData: Contact): Promise<any> {
      return this.contactsService.create(contactData);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() contactData: Contact): Promise<any> {
        contactData.id = Number(id);
        console.log('Update #' + contactData.id)
        return this.contactsService.update(contactData);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.contactsService.delete(id);
    }
}
