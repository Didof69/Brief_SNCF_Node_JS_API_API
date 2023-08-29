import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Plant {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    soleil: string;

    @Column()
    arrosage: string;

    @Column()
    categorie: string;

    @Column()
    image: string;
    
}