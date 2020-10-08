import { Request, Response } from "express"
import { getRepository, FindManyOptions, FindOneOptions, FindConditions, createQueryBuilder } from "typeorm";
import { Mascota } from "../models/mascota";
export class MacotaController {

    constructor() {
    }

    //CREAR UN NUEVO USUARIO
    public async createMascota(req: Request, res: Response): Promise<Response> {
        try {
            const datos = <Mascota>req.body;
            console.log(datos);
            
            const mascotaNombre = await getRepository(Mascota).findOne({ Nombres: datos.Nombres });
            if (mascotaNombre) {
                const mascotaDuenio = await getRepository(Mascota).findOne({ cliente: datos.cliente });
                if (mascotaDuenio) {
                    return res.status(400).json({ value: false, message: `Ya existe una mascota de nombre ${datos.Nombres}` })
                }
            }

            //guardar datos de la mascota
            const newMascota = getRepository(Mascota).create(datos);
            await getRepository(Mascota).save(newMascota);
            return res.json({ message: `${datos.Nombres.toUpperCase()}...  Nueva mascota agregada.` });
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    //OBTENEMOS TODOS LOS USUARIOS
    public async getMascotas(req: Request, res: Response): Promise<Response> {
        try {
            const client = await getRepository(Mascota).find();
            return res.json(client);
        } catch (error) {
            return res.status(404).json({ error });
        }
    }

    public async getMascota(req: Request, res: Response) {
        try {
            const mascotaOne = await createQueryBuilder("Mascota")
                .leftJoinAndSelect("Mascota.cliente", "cliente")
                .leftJoinAndSelect("Mascota.vacunas", "vacunas")
                .leftJoinAndSelect("Mascota.citas", "citas")
                .leftJoinAndSelect("Mascota.visitas", "visitas")
                .where("Mascota.id = :id", { id: req.params.id })
                .getOne();
            return res.json(mascotaOne)

        } catch (error) {

        }
    }

    //EDITAR USUARIO
    public async updateMascota(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.body.id;
            const mascot = await getRepository(Mascota).findOne(id);

            if (mascot) {
                getRepository(Mascota).merge(mascot, req.body);
                await getRepository(Mascota).save(mascot);
                return res.json({ message: 'los datos se actualizaron correctamente' })
            } else {
                return res.status(404).json({ message: "No existe la mascota" })
            }
        } catch (error) {
            return res.json(error);
        }
    }

    //ELIMINAR UN USUARIO
    public async deleteMascota(req: Request, res: Response): Promise<Response> {

        try {
            await getRepository(Mascota).delete(req.params.id);
            return res.json({ value: true })
        } catch (error) {
            return res.json(error);
        }
    }

    //cantidad total de mascotas en el sistema
    public async countMascota(req: Request, res: Response): Promise<Response> {
        try {
            const count = await getRepository(Mascota)
                .createQueryBuilder("Mascota").getCount();
            return res.json({count : count});
            
        } catch (error) {
            return res.status(404).json(error)
        }
    }

}