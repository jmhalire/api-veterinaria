import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Mascota } from "./mascota";
import { Venta } from "./venta";
import { Visita } from "./visita";
import { Cita } from './cita';

@Entity()
export class Cliente {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar",length: 40})
    Nombres: string;

    @Column({type: "varchar",length: 40})
    Apellidos: string;

    @Column({type: "varchar",length: 20})
    Email: string;

    @Column({type: "varchar",length: 9})
    Celular: string;

    @Column({type: "varchar",length: 40})
    Direccion: string;

    @Column()
    @CreateDateColumn()
    CreatedAt: Date;

    @Column()
    @UpdateDateColumn()
    UpdatedAt: Date;

    @Column({type: "int"})
    Estado: number

    @OneToMany(() => Mascota, mascota => mascota.cliente)
    mascotas: Mascota[]

    @OneToMany(() => Venta, venta => venta.cliente)
    ventas: Venta[]

    @OneToMany(() => Visita, visita => visita.cliente)
    visitas: Visita[]

    @OneToMany(type => Cita, cita => cita.mascota)
    citas: Visita[]
}