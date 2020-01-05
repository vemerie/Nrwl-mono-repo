import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { nullable: true})
    firstName: string;

    @Column("varchar", { nullable: true})
    lastName: string;

    @Column("varchar", { nullable: true})
    email: string;

    @Column("varchar", { nullable: true})
    phone: string;

    @Column("varchar", { nullable: true})
    city: string;

    @Column("varchar", { nullable: true})
    country: string;
}
