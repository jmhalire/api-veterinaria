import { Request, Response } from "express"
import { getRepository, FindManyOptions, FindOneOptions, FindConditions, getConnection } from "typeorm";
import { User } from "../models/usuario";
export class UserController {

    constructor() {
    }

    //CREAR UN NUEVO USUARIO
    public async createUser(req: Request, res: Response): Promise<Response> {
        try {
            const datos = <User>req.body
            const user = await getRepository(User).findOne({ Email: datos.Email });
            if (user) {
                return res.status(404).json({ message: "Ya existe usuario con ese correo!!!" });
            }
            //gurdadamos al usuario obteniendo sus datos
            const newUser = getRepository(User).create(datos)
            let userSave = await getRepository(User).save(newUser)

            /* //creamos su toke del usuario registrado
            const token = new Jsonwebtoken(UserDate).createToken(); */
            return res.status(200).json({ message: `El usuario ${userSave.Names} ha sido creado` });

        } catch (error) {
            return res.status(404).json(error)
        }
    }
    //datos de un usuario
    public async getUser(req: Request, res: Response) {
        try {
            const datos = <User>req.user
            let user = await getRepository<User | any>(User).findOne(datos.id);
            user.Password = '';
            return res.json(user);
        } catch (error) {
            return res.status(404).json({ error });
        }
    }

    //OBTENEMOS TODOS LOS USUARIOS
    public async getUsers(req: Request, res: Response): Promise<Response> {
        try {
            const users = await getRepository(User).find({
                select: ["id", "Names", "FirstName", "LastName", "Celular", "Address", "Email", "Role", "CreatedAt", "UpdatedAt"],
                where: { Estado: 1 }
        
            });
            if (users.length > 0) {
                return res.json(users);
            } else {
                return res.status(400).json({ message: 'no hay resultados' });
            }
        } catch (error) {
            return res.status(404).json({ error });
        }
    }

    //EDITAR USUARIO
    public async updateUser(req: Request, res: Response): Promise<Response> {
        try {
            const user = await getRepository(User).findOne(req.body.id);
            if (user) {
                getRepository(User).merge(user, req.body);
                await getRepository(User).save(user);
                return res.json({ message: `Los datos del usuario ${user.Names.toUpperCase()} han sido actualizados` })
            } else {
                return res.status(404).json({ message: "No existe usuario" })
            }
        } catch (error) {
            return res.json(error);
        }
    }

    //ELIMINAR UN USUARIO
    public async deleteUser(req: Request, res: Response): Promise<Response> {
        try {
            await getConnection()
                    .createQueryBuilder()
                    .update(User)
                    .set({ Estado: 0 })
                    .where("id = :id", { id: req.params.id })
                    .execute();
            return res.json({ message: "Un usuario ha sido elimninado del sistema." })
        } catch (error) {
            return res.json(error);
        }
    }
}