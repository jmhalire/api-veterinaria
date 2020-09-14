import { getRepository, createQueryBuilder } from "typeorm";
import { Request, Response } from "express"

//interface
import { Visita } from "../models/visita";
import { Vacuna } from "../models/vacuna";
import { Cita } from '../models/cita';

export class ServiController {

    constructor() {

    }

    // = ==================== citas de clientes y pacientes =  ===========================
    //listar todas las citas
    public async listaCitas(req: Request, res: Response): Promise<Response> {
        try {
            const listaCitas = await createQueryBuilder("Cita")
                                .leftJoinAndSelect("Cita.mascota", "mascota")
                                .leftJoinAndSelect("Cita.cliente","cliente")
                                .where("Cita.Estado = :Estado", { Estado: 1 })
                                .getMany();
            return res.json(listaCitas);

        } catch (error) {
            console.log(error);
            
            return res.status(404).json(error);
        }

    }

    //agrgar o guradar un acita
    public async addCita(req: Request, res: Response): Promise<Response> {
        try {
            const datos = req.body
            //guardar datos de la mascota
            const newCita = getRepository(Cita).create(datos);
            await getRepository(Cita).save(newCita);
            return res.json({ message: 'Cita registrada correctamente' });
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    // ===================== vicitas de clientes y pacientes   =============================
    public async listaVisitas(req: Request, res: Response): Promise<Response> {
        try {
            const listVisitas = await createQueryBuilder("Visita")
                                .leftJoinAndSelect("Visita.mascota", "mascota")
                                .leftJoinAndSelect("Visita.cliente","cliente")
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
            //guardar datos de la mascota
            const newVisita = getRepository(Visita).create(datos);
            await getRepository(Visita).save(newVisita);
            return res.json({ message: 'visita registrada correctamente' });
        } catch (error) {
            res.status(400).json(error)
        }
    }


    //guardar una nueva visita
    public async addVacuna(req: Request, res: Response): Promise<Response> {
        try {
            const datos = req.body
            console.log(datos);

            //guardar datos de la mascota
            const newVacuna = getRepository(Vacuna).create(datos);
            await getRepository(Vacuna).save(newVacuna);
            return res.json({ message: 'visita registrada correctamente' });
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}