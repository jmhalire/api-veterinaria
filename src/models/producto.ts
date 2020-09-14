import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { DetalleVenta } from "./detalleVenta";

@Entity()
export class Producto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar",length: 50})
    Nombre: string;

    @Column({type: "float"})
    Costo: number;

    @Column({type: "int"})
    stock: number;

    @Column({type: "int"})
    Estado: number


    @OneToMany(type => DetalleVenta, detalleVenta => detalleVenta.producto)
    detalleVentas: DetalleVenta[]

}