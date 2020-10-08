import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from "typeorm";
import { Producto } from "./producto";
@Entity()
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar",length: 50})
    Nombre: string;

    @Column({type: "varchar",length: 80})
    Descripcion: string;

    @Column()
    @CreateDateColumn()
    CreatedAt: Date;

    @Column()
    @UpdateDateColumn()
    UpdatedAt: Date;

    @OneToMany(type => Producto, producto => producto.categoria)
    productos: Producto[]
}