import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Producto } from "./producto";

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

    @OneToMany(type => Producto, producto => producto.proveedor)
    productos: Producto[]
}