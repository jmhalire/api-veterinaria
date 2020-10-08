import { Request, Response } from "express"
import { getRepository, createQueryBuilder, getConnection } from "typeorm";
import { Venta } from "../models/venta";
import { User } from "../models/usuario";
import { Producto } from "../models/producto";
import { Proveedor } from "../models/proveedor";
import { Categoria } from "../models/categoria";
import { DetalleVenta } from "../models/detalleVenta";


export class VentaController {

    constructor() {
    }

    //guardar una nueva venta
    public async saveVenta(req: Request, res: Response){

        try {
            const datos = <Venta>req.body;
            let user: User;
            user = <User>req.user;
            datos.usuario = user;
            const detalleVentas = <DetalleVenta[]>datos.detalleVentas;
            detalleVentas.forEach( async (detalle) => {
                const Produc= await <Producto | any>getRepository(Producto).findOne({
                    select: ['Stock'],
                    where: { id : detalle.producto }
                });
                await getRepository(Producto).update(detalle.producto, { Stock : Produc.Stock - detalle.Cantidad});
            })

            //guardadamos la venta con sus detalles
            const newFac = getRepository(Venta).create(datos);
            await getRepository(Venta).save(newFac);

            return res.status(200).json({ message: `Ventan registrada correctamente.` });

        } catch (error) {
            console.log(error);

            return res.status(404).json(error)
        }
    }

    //LISTA DE VENTAS 
    public async getVentas(req: Request, res: Response): Promise<Response> {
        try {
            const ventas = await createQueryBuilder("Venta")
                .leftJoinAndSelect("Venta.cliente", "cliente")
                .leftJoinAndSelect("Venta.detalleVentas", "detalleVentas")
                .getMany();
            return res.json(ventas);

        } catch (error) {
            return res.status(400).json(error);
        }
    }

    // obtener una sola venta 
    public async getVenta(req: Request, res: Response): Promise<Response> {
        try {
            const venta = await createQueryBuilder("Venta")
                .leftJoinAndSelect("Venta.cliente", "cliente")
                .leftJoinAndSelect("Venta.detalleVentas", "detalleVentas")
                .where("Venta.id = :id", { id: req.params.id })
                .getOne();
            return res.json(venta);

        } catch (error) {
            return res.status(400).json(error);
        }
    }

}
