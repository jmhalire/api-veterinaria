import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Venta } from "./venta";
import { Producto } from "./producto";

@Entity()
export class DetalleVenta {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "float"})
    PercioUnitario: number;

    @Column({type: "int"})
    Cantidad: number;

    @ManyToOne(type => Venta, venta => venta.detalleVentas,{nullable: false})
    ventas: Venta

    @ManyToOne(type => Producto, producto => producto.detalleVentas,{nullable: false})
    productos: Producto
}
