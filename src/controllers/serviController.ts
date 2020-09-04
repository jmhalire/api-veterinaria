import { getRepository, createQueryBuilder } from "typeorm";
import { Request, Response } from "express"

//interface
import { Visita } from "../models/visita";
import { Vacuna } from "../models/vacuna";

export class ServiController {

    constructor() {

    }

    //
    public async listaVisitas(req: Request, res: Response): Promise<Response> {
        try {
            const listVisitas = await createQueryBuilder("Visita")
                                .leftJoinAndSelect("Visita.mascota", "mascota")
                                .leftJoinAndSelect("Visita.cliente","cliente")
                                .where("Visita.Estado = :Estado", { Estado: 1 })
                                .getMany();
                                
            return res.json(listVisitas);

        } catch (error) {
            return res.status(404).json(error);
        }

    }


    //guardar una nueva visita
    public async addVisita(req: Request, res: Response) {
        try {
            const datos = req.body
            console.log(datos);

            //guardar datos de la mascota
            const newVisita = getRepository(Visita).create(datos);
            await getRepository(Visita).save(newVisita);
            return res.json({ message: 'visita registrada correctamente' });
        } catch (error) {
            res.status(400).json(error)
        }
    }


    //guardar una nueva visita
    public async addVacuna(req: Request, res: Response) {
        try {
            const datos = req.body
            console.log(datos);

            //guardar datos de la mascota
            const newVacuna = getRepository(Vacuna).create(datos);
            await getRepository(Vacuna).save(newVacuna);
            return res.json({ message: 'visita registrada correctamente' });
        } catch (error) {
            res.status(400).json(error)
        }
    }
}