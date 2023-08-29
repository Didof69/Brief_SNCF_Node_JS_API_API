import { Column, PrimaryGeneratedColumn } from "typeorm";

export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pseudo: string;

    @Column()
    email: string;

    @Column()
    password: string;

}