import { Request, Response } from "express"
import { getRepository, createQueryBuilder, getConnection } from "typeorm";
import { Proveedor } from "../models/proveedor";
//import { User } from "../models/usuario";

export class ProveedController {

    constructor() {
    }

    //CREAR UN NUEVO PROVEEDOR
    public async createProveed(req: Request, res: Response): Promise<Response> {
        try {
            const datos = <Proveedor>req.body;
            

            //guardar datos del proveedor
            const newProveedor = getRepository(Proveedor).create(datos);
            await getRepository(Proveedor).save(newProveedor);
            return res.json({ message: `${datos.Nombre.toUpperCase()}...  Nuevo proveedor agregado.` });
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    //OBTENEMOS TODOS LOS proveedore
    public async getProveeds(req: Request, res: Response): Promise<Response> {
        try {
            const listProveed = await createQueryBuilder("Proveedor")
                .orderBy("Proveedor.Nombre")
                .leftJoinAndSelect("Proveedor.productos", "productos")
                .getMany();

            //const client = await getRepository(Cliente).find({Estado: 1}); 

            return res.json(listProveed);

        } catch (error) {
            return res.status(404).json({ error });
        }
    }

    public async getProveed(req: Request, res: Response) {
        try {
            const proveedorOne = await createQueryBuilder("Proveedor")
                .leftJoinAndSelect("Proveedor.productos", "producto")
                .where("Proveedor.id = :id", { id: req.params.id })
                .getOne();
            return res.json(proveedorOne)

        } catch (error) {
            return res.status(404).json({ error });
        }
    }


    public async getProveedProductos(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const proveed = await getRepository<Proveedor>(Proveedor).findOne(id);

            if (proveed?.Nombre !== null) {
                const proveeds = await createQueryBuilder("Proveedor")
                    .leftJoinAndSelect("Proveedor.productos", "producto")
                    .where("Producto.id = :id", { id: id })
                    .getOne();
                return res.json(proveeds)
            } else {
                return res.status(404).json({ value: false, message: 'No existe proveedor' })
            }
        } catch (error) {

        }
    }



    //EDITAR PROVEEDOR
    public async updateProveed(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.body.id;
            const proveed = await getRepository(Proveedor).findOne(id);
            if (proveed) {
                getRepository(Proveedor).merge(proveed, req.body);
                await getRepository(Proveedor).save(proveed);
                return res.json({ message: 'Los datos se actualizaron correctamente' })
            } else {
                return res.status(404).json({ message: "No existe proveedor" })
            }
        } catch (error) {
            return res.json(error);
        }
    }
    //ELIMINAR PROVEEDOR
    public async deleteProveed(req: Request, res: Response): Promise<Response> {

        try {
            await getRepository(Proveedor).delete(req.params.id);
            return res.json({ value: true })
        } catch (error) {
            return res.json(error);
        }
    }

    //cantidad de proveedores registrados en el sistema
    public async countProveed(req: Request, res: Response): Promise<Response> {
        try {
            const count = await getRepository(Proveedor)
                .createQueryBuilder("Proveedor").getCount();
            return res.json({count : count});
            
        } catch (error) {
            return res.status(404).json(error)
        }
    }
}
