import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, OneToMany} from "typeorm";
import { Venta } from "./venta";
import { Producto } from "./producto";

@Entity()
export class DetalleVenta {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "float"})
    Punitario: number;

    @Column({type: "int"})
    Cantidad: number;

    @Column({type: "float"})
    Total: number;

    @ManyToOne(type => Venta, venta => venta.detalleVentas,{nullable: false})
    venta: Venta

    @ManyToOne(type => Producto, producto => producto.detalleVentas,{nullable: false})
    producto: Producto

    @Column()
    @CreateDateColumn()
    CreatedAt: Date;
}
