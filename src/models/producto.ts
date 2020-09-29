import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from "typeorm";
import { Proveedor } from "./proveedor";
import { Categoria } from "./categoria";
import { DetalleVenta } from "./detalleVenta";

@Entity()
export class Producto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar",length: 40})
    Nombre: string;

    @Column({type: "float"})
    Pcompra: number;

    @Column({type: "float"})
    Particulo: number;

    @Column({type: "int"})
    Stock: number;

    @Column()
    @CreateDateColumn()
    CreatedAt: Date;

    @Column()
    @UpdateDateColumn()
    UpdatedAt: Date;

    @ManyToOne(type => Proveedor, proveedor => proveedor.productos,{nullable: false})
    proveedor: Proveedor;

    @OneToMany(type => DetalleVenta, detalleVenta => detalleVenta.producto, {nullable: false , cascade: ['insert']})
    detalleVentas: DetalleVenta[];

    @ManyToOne(type => Categoria, categoria => categoria.productos,{nullable: false})
    categoria: Categoria;

}