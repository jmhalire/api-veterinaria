import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn } from "typeorm";
import { Mascota } from "./mascota";

@Entity()

export class Reserva {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Descripcion: string
    
    @ManyToOne(type => Mascota, mascota => mascota.reservas,{nullable: false})
    mascota: Mascota;

    @Column()
    @CreateDateColumn()
    CreatedAt: Date;

}