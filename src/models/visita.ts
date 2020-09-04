import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { Mascota } from "./mascota";
import { Cliente } from "./cliente";

@Entity()

export class Visita{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 80})
    Motivo: string;

    @Column({type: "varchar", length: 80})
    Sintomas: string;

    @Column({type: "varchar", length: 80})
    Diagnostico: string;

    @Column({type: "varchar", length: 80})
    Tratamiento: string;

    @Column({type: "float"})
    Costo: number;

    @Column({type: "varchar", length: 10})
    EstaPagado: string;

    @Column({type: "int"})
    Estado: number

    @Column()
    @CreateDateColumn()
    CreatedAt: Date;

    @ManyToOne(type => Mascota, mascota => mascota.visitas,{nullable: false})
    mascota: Mascota;

    @ManyToOne(type => Cliente, cliente => cliente.visitas,{nullable: false})
    cliente: Cliente;
}