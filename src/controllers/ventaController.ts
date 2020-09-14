import { Request, Response } from "express"
import { getRepository, createQueryBuilder, getConnection } from "typeorm";
import { Venta } from "../models/venta";
import { DetalleVenta } from "../models/detalleVenta";
import { User } from "../models/usuario";
import { Articulo } from "../models/articulo";
import { Proveedor } from "../models/proveedor";


export class VentaController {

    constructor() {
    }

    //CREAR UN NUEVO USUARIO
    public async saveVenta(req: Request, res: Response): Promise<Response> {
        try {
            const datos = <Venta>req.body;
            let user: User | any;
            user = req.user;
            datos.usuario = user.id;
            //gurdadamos al usuario obteniendo sus datos
            const newFac = getRepository(Venta).create(datos)
            await getRepository(Venta).save(newFac)

            /* //creamos su toke del usuario registrado
            const token = new Jsonwebtoken(UserDate).createToken(); */
            return res.status(200).json({ message: `Ventan guardada correctamente.` });

        } catch (error) {
            return res.status(404).json(error)
        }
    }

    //LISTA DE VENTAS 
    public async getVentas(req: Request, res: Response): Promise<Response> {
        try {
            const ventas = await await createQueryBuilder("Venta")
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

    // ================ ARTICULOS   ========================
    public async saveArticulo(req: Request, res: Response): Promise<Response> {
        try {
            const articulo = <Articulo>req.body;
            const newArticulo = getRepository(Articulo).create(articulo);
            await getRepository(Articulo).save(newArticulo);
            return res.json({ message: 'Nuevo articulo guardado' })

        } catch (error) {
            return res.status(400).json(error)
        }
    }
    public async getArticulos(req: Request, res: Response): Promise<Response> {
        try {
            const articulos = await createQueryBuilder("Articulo")
                .orderBy("Articulo.Nombre")
                .leftJoinAndSelect("Articulo.proveedor", "proveedor")
                .leftJoinAndSelect("Articulo.categoria", "categoria")
                .getMany()
            return res.json(articulos);

        } catch (error) {
            return res.status(400).json(error);
        }
    }


    // =============    proveeedores   ================
    public async saveProveedor(req: Request, res: Response): Promise<Response> {
        try {
            const datos = <Proveedor>req.body;
            const newProvee = getRepository(Proveedor).create(datos);
            await getRepository(Proveedor).save(newProvee);
            return res.json({ message: 'Nuevo proveedor guardado' })
        } catch (error) {
            return res.status(400).json(error)
        }
    }
    public async getProveedores(req: Request, res: Response): Promise<Response> {
        try {
            const provedores = await createQueryBuilder("Proveedor")
                .orderBy("Proveedor.Nombre")
                .leftJoinAndSelect("Proveedor.articulos", "articulos")
                .leftJoinAndSelect("articulos.categoria", "categoria")
                .getMany();
            return res.json(provedores);

        } catch (error) {
            return res.status(400).json(error);
        }
    }

    // =============    categorias   ================

    public async getCategorProducts(req: Request, res: Response): Promise<Response> {
        try {
            const categoria = await createQueryBuilder("Categoria")
                .orderBy('Categoria.Nombre')
                .leftJoinAndSelect("Categoria.articulos", "articulos")
                .leftJoinAndSelect("articulos.proveedor", "proveedor")
                .getMany();
            return res.json(categoria);

        } catch (error) {
            return res.status(404).json(error);
        }
    }

}
