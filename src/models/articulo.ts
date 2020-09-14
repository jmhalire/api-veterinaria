import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from "typeorm";
import { Proveedor } from "./proveedor";
import { Categoria } from "./categoria";

@Entity()
export class Articulo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar",length: 8})
    Codigo: string;

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

    @ManyToOne(type => Proveedor, proveedor => proveedor.articulos,{nullable: false})
    proveedor: Proveedor;

    @ManyToOne(type => Categoria, categoria => categoria.articulos,{nullable: false})
    categoria: Proveedor;

}