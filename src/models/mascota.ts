import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinColumn, OneToMany} from "typeorm";
import { Cliente } from "./cliente";
import { Vacuna } from "./vacuna";
import { Visita } from "./visita";
import { Cita } from './cita';

@Entity()
export class Mascota {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar",length: 40})
    Nombres: string;

    @Column({type: "varchar",length: 30})
    Especie: string;

    @Column({type: "varchar",length: 10})
    Sexo: string;

    @Column()
    @CreateDateColumn()
    CreatedAt: Date;

    @Column()
    @UpdateDateColumn()
    UpdatedAt: Date;

    @ManyToOne(type => Cliente, client => client.mascotas,{nullable: false})
    cliente: Cliente

    //una mascota esta relacionado con muchas vacunas OneToMany
    @OneToMany(type => Vacuna, vacuna => vacuna.mascota)
    vacunas: Vacuna[]

    @OneToMany(type => Visita, visita => visita.mascota)
    visitas: Visita[]

    @OneToMany(type => Cita, cita => cita.mascota)
    citas: Visita[]
}
