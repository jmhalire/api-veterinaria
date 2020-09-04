import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, TableForeignKey, OneToMany} from "typeorm";
import bcrypt from "bcrypt";
import { Venta } from "./venta";

export enum UserRole {
    ADMIN = "admin",
    CLIENTE = "cliente"
}
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar",length: 40, nullable: false})
    Names: string;

    @Column({type: "varchar",length: 40, nullable: false})
    FirstName: string;

    @Column({type: "varchar",length: 40, nullable: false})
    LastName: string;

    @Column({type: "numeric", nullable: false})
    Celular: string;

    @Column({type: "varchar",length: 40})
    Address: string;

    @Column({type: "varchar",length: 20, nullable: false})
    Email: string;

    @Column({type: "varchar", length:80, nullable: false})
    Password: string;

    @Column({type: "enum", enum: UserRole, default: UserRole.CLIENTE})
    Role: UserRole;

    @Column({type: "int"})
    Estado: number

    @CreateDateColumn()
    CreatedAt: Date;
    
    @UpdateDateColumn()
    UpdatedAt: Date;

    @OneToMany(type => Venta, venta => venta.usuario)
    ventas: Venta[]
    //se ejecuta antes de guardar el usuario
    @BeforeInsert()
    public encryptPasword(): void{
        const salt = bcrypt.genSaltSync(10);
        this.Password = bcrypt.hashSync(this.Password, salt);
    }

    //metodo validar
    public validPassword(password: string): boolean{
        return bcrypt.compareSync(password, this.Password);
    }
}
