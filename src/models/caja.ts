import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Mascota } from "./mascota";
import { Venta } from "./venta";
import { Visita } from "./visita";
import { Cita } from './cita';

@Entity()
export class Caja {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar",length: 40})
    Total: string;

    @Column()
    @CreateDateColumn()
    CreatedAt: Date;

    @Column()
    @UpdateDateColumn()
    UpdatedAt: Date;
}