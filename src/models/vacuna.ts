import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Mascota } from "./mascota";

@Entity()

export class Vacuna {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 20})
    Tipo: string;

    @Column({type: "varchar", length: 80})
    Observacion: string;

    @Column()
    @CreateDateColumn()
    CreatedAt: Date;

    @Column()
    @UpdateDateColumn()
    UpdatedAt: Date;

    @ManyToOne(type => Mascota, mascota => mascota.vacunas,{nullable: false})
    mascota: Mascota
}