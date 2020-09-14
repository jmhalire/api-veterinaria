import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany} from "typeorm";
import { Cliente } from "./cliente";
import { User } from "./usuario";
import { DetalleVenta } from "./detalleVenta";

@Entity()
export class Venta {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Cliente, client => client.ventas,{nullable: false})
    cliente: Cliente;

    @ManyToOne(type => User, user => user.ventas,{nullable: false})
    usuario: User;

    @OneToMany(type => DetalleVenta, detalleVenta => detalleVenta.ventas,{nullable: false , cascade: true})
    detalleVentas: DetalleVenta[];

    @Column({type: "float"})
    Total: number; 
    
    @Column()
    @CreateDateColumn()
    CreatedAt: Date;

}
