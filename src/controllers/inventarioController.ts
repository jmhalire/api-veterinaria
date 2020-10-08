import { Request, Response } from "express"
import { getRepository, createQueryBuilder, getConnection } from "typeorm";
import { Producto } from "../models/producto";
import { Proveedor } from "../models/proveedor";
import { Categoria } from "../models/categoria";


export class InventarioController {

    constructor() {
    }

    // ================ ARTICULOS   ========================
    public async saveArticulo(req: Request, res: Response): Promise<Response> {
        try {
            const articulo = <Producto>req.body;
            const newArticulo = getRepository(Producto).create(articulo);
            await getRepository(Producto).save(newArticulo);
            return res.json({ message: 'Nuevo producto guardado' })

        } catch (error) {
            return res.status(400).json(error)
        }
    }
    public async getArticulos(req: Request, res: Response): Promise<Response> {
        try {
            const articulos = await createQueryBuilder("Producto")
                .orderBy("Producto.Nombre")
                .leftJoinAndSelect("Producto.proveedor", "proveedor")
                .leftJoinAndSelect("Producto.categoria", "categoria")
                .getMany()
            return res.json(articulos);

        } catch (error) {
            return res.status(400).json(error);
        }
    }

    //ontener detaller de un solo producto
    public async getProducto(req: Request, res: Response): Promise<Response> {
        try {
            const articulos = await createQueryBuilder("Producto")
                .leftJoinAndSelect("Producto.proveedor", "proveedor")
                .leftJoinAndSelect("Producto.categoria", "categoria")
                .where("Producto.id = :id", { id: req.params.id })
                .getOne()
            return res.json(articulos);

        } catch (error) {
            return res.status(400).json(error);
        }
    }
    //actualizar el stock de un producto
    public async updatedStock(req: Request, res: Response): Promise<Response> {
        let dato = req.body;
        try {
            await getConnection()
                .createQueryBuilder()
                .update(Producto)
                .set({ Stock: dato.stock })
                .where("id = :id", { id: dato.id })
                .execute();
            return res.json({message: 'Stock del producto actualizado'});

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
                .leftJoinAndSelect("Proveedor.productos", "productos")
                .leftJoinAndSelect("productos.categoria", "categoria")
                .getMany();
            return res.json(provedores);

        } catch (error) {
            return res.status(400).json(error);
        }
    }

    // =============    categorias   ================
    public async saveCategoria(req: Request, res: Response): Promise<Response> {
        try {
            const datos = <Categoria>req.body;
            const newCate = getRepository(Categoria).create(datos);
            await getRepository(Categoria).save(newCate);
            return res.json({ message: 'Nueva categoria guardada' })
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    public async getCategorProducts(req: Request, res: Response): Promise<Response> {
        try {
            const categoria = await createQueryBuilder("Categoria")
                .orderBy('Categoria.Nombre')
                .leftJoinAndSelect("Categoria.productos", "productos")
                .leftJoinAndSelect("productos.proveedor", "proveedor")
                .getMany();
            return res.json(categoria);

        } catch (error) {
            return res.status(404).json(error);
        }
    }

}
