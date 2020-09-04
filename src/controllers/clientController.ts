import { Request, Response } from "express"
import { getRepository, FindManyOptions, FindOneOptions, FindConditions, createQueryBuilder, getConnection } from "typeorm";
import { Cliente } from "../models/cliente";
import { Mascota } from "../models/mascota";
export class ClientController {

    constructor() {
     }

    //CREAR UN NUEVO USUARIO
    public async createClient(req: Request, res: Response) {
        try {
            const datos = <Cliente>req.body;

            const clienteEmail = await getRepository(Cliente).findOne({ Email: datos.Email});
            if (clienteEmail) {
                const clienteCelular = await getRepository(Cliente).findOne({ Celular: datos.Celular});
                if(clienteCelular){
                    return res.status(404).json({value: false, message: "Ya existe un cliente con ese correo y numero telefonico" });
                }
            }

            //gurdadamos al usuario obteniendo sus datos
            const newUser = getRepository(Cliente).create(datos)
            await getRepository(Cliente).save(newUser)

            /* //creamos su toke del usuario registrado
            const token = new Jsonwebtoken(UserDate).createToken(); */
            return res.status(200).json({value: true, message: `${datos.Nombres.toUpperCase()}...  Nuevo cliente agregado.`});

        } catch (error) {
            return res.status(404).json(error)
        }  
    }

    //OBTENEMOS TODOS LOS USUARIOS
    public async getClients(req: Request, res: Response): Promise<Response> {
        try {
            const listClient = await createQueryBuilder("Cliente")
                                .leftJoinAndSelect("Cliente.mascotas", "mascotas")
                                .leftJoinAndSelect("Cliente.ventas","ventas")
                                .where("Cliente.Estado = :Estado", { Estado: 1 })
                                .getMany();


            //const client = await getRepository(Cliente).find({Estado: 1}); 
            return res.json(listClient);

        } catch (error) {
            return res.status(404).json({ error });
        }
    }

    public async getClient(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const client = await getRepository(Cliente).findOne(id);
            
            if (client?.Estado!==0) {
                const clientOne = await createQueryBuilder("Cliente")
                                .leftJoinAndSelect("Cliente.mascotas", "mascota")
                                .leftJoinAndSelect("Cliente.ventas","venta")
                                .where("Cliente.id = :id", { id: id })
                                .getOne();
                return res.json(clientOne)
            } else{
                return res.status(404).json({ value: false, message: 'No existe cliente' })
            }
            
        } catch (error) {
            
        }
    }

    //EDITAR USUARIO
    public async updateClient(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.body.id;
            const client = await getRepository(Cliente).findOne(id);
            if (client) {
                getRepository(Cliente).merge(client, req.body);
                await getRepository(Cliente).save(client);
                return res.json({ message:'Los datos se actualizaron correctamente'})
            } else{
                return res.status(404).json({ message: "No existe cliente" })
            }
        } catch (error) {
            return res.json(error);
        }
    }

    //ACTUALIZANDO EL ESTADO DEL CLIENTE A ELIMINADO
    public async deleteClient(req: Request, res: Response): Promise<Response> {
        try {
            await getConnection()
                .createQueryBuilder()
                .update(Cliente)
                .set({ Estado: 0})
                .where("id = :id", { id: req.params.id })
                .execute();
            //await getRepository(Cliente).delete(req.params.id);
            return res.json({value: true})
        } catch (error) {
            return res.json(error);
        }
    }
}
