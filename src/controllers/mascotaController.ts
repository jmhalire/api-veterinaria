import { Request, Response } from "express"
import { getRepository, FindManyOptions, FindOneOptions, FindConditions, createQueryBuilder } from "typeorm";
import { Mascota } from "../models/mascota";
import { Visita } from "../models/visita";
import { Vacuna } from "../models/vacuna";
export class MacotaController {

    constructor() {
    }

    //CREAR UN NUEVO USUARIO
    public async createMascota(req: Request, res: Response) {
        try {
            const datos = <Mascota>req.body;
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
            return res.json({ value: true, message: `${datos.Nombres.toUpperCase()}...  Nueva mascota agregada.` });
        } catch (error) {
            res.status(400).json(error)
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
                .leftJoinAndSelect("Mascota.reservas", "reservas")
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
            const id = req.params.id;
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

}