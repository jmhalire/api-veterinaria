import { getRepository, createQueryBuilder, getConnection } from "typeorm";
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
    public async listCitasPendient(req: Request, res: Response): Promise<Response> {
        try {
            const listaCitas = await createQueryBuilder("Cita")
                                .leftJoinAndSelect("Cita.mascota", "mascota")
                                .leftJoinAndSelect("Cita.cliente","cliente")
                                .where("Cita.Estado = :Estado", { Estado: 0 })
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
            console.log(datos);
            //guardar datos de la mascota
            const newCita = getRepository(Cita).create(datos);
            await getRepository(Cita).save(newCita);
            return res.json({ message: 'Cita registrada correctamente' });
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    //acuatizando las visitas
    public async updateCitaState(req: Request, res: Response) {
        console.log(req.body);
        try {
            const idCita = req.params.id;
            await getConnection()
                    .createQueryBuilder()
                    .update(Cita)
                    .set({ Estado: 1 })
                    .where("id = :id", { id: idCita })
                    .execute();
            setTimeout(()=>{
                return res.json({ message: "Se atendio una cita" })
            },500)
        } catch (error) {
            return res.json(error);
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
    public async addVisita(req: Request, res: Response): Promise<Response> {
        try {
            const datos = req.body            
            //guardar datos de la mascota
            const newVisita = getRepository(Visita).create(datos);
            await getRepository(Visita).save(newVisita);
            return res.json({ message: 'visita registrada correctamente' });
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    //acuatizando las visitas
    public async updateVisita(req: Request, res: Response) {
        try {
            const idVisitas = <any[]>req.body;
            console.log(idVisitas);
            idVisitas.forEach(async idVisita => {
                //await getRepository(Visita).update(idVisita, {EstaPagado: "SI"});
                await getConnection()
                    .createQueryBuilder()
                    .update(Visita)
                    .set({ EstaPagado: "SI" })
                    .where("id = :id", { id: idVisita })
                    .execute();
            });
            setTimeout(()=>{
                return res.json({ message: "Estado de pagos del cliente actualizado" })
            },1000)
        } catch (error) {
            return res.json(error);
        }
    }

    //cantidad de visitas
    public async countVisita(req: Request, res: Response): Promise<Response> {
        try {
            const count = await getRepository(Visita)
                .createQueryBuilder("Visita").getCount();
            return res.json({count : count});
            
        } catch (error) {
            return res.status(404).json(error)
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