import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from "typeorm";
import { Mascota } from "./mascota";
import { Cliente } from './cliente';

@Entity()
export class Cita {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar",length: 40})
    Tipo: string;

    @ManyToOne(type => Mascota, mascota => mascota.visitas,{nullable: false})
    mascota: Mascota;

    @ManyToOne(type => Cliente, cliente => cliente.visitas,{nullable: false})
    cliente: Cliente;

    @Column({type: "varchar",length: 40})
    Motivo: string;

    @Column({type: "date"})
    Dia: Date;

    @Column({type: "time"})
    Hora: Date;

    @Column({type: "int"})
    Estado: number

    @Column()
    @CreateDateColumn()
    CreatedAt: Date;
}