import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Articulo } from "./articulo";

@Entity()
export class Proveedor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar",length: 40})
    Nombre: string;

    @Column({type: "varchar",length: 40})
    Direccion: string;

    @Column({type: "varchar",length: 20})
    Telefono: string;

    @Column({type: "varchar",length: 40})
    Email: string;

    @Column()
    @CreateDateColumn()
    CreatedAt: Date;

    @Column()
    @UpdateDateColumn()
    UpdatedAt: Date;

    @OneToMany(type => Articulo, articulo => articulo.proveedor)
    articulos: Articulo[]
}