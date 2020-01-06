import { Entity, Column, PrimaryGeneratedColumn,BeforeInsert } from 'typeorm';
import * as crypto from 'crypto';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true})
  name: string;

  @Column({default: ''})
  avatar: string;

  @Column( { nullable: true})
  email: string;

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }
  @Column({ nullable: true})
  password: string;
}
