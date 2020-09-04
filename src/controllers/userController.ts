import { Request, Response } from "express"
import { getRepository, FindManyOptions, FindOneOptions, FindConditions } from "typeorm";
import { User } from "../models/usuario";
export class UserController {

    constructor() {
     }

    //CREAR UN NUEVO USUARIO
    public async createUser(req: Request, res: Response): Promise<Response> {
        try {
            const datos = <User>req.body
            const user = await getRepository(User).findOne({ Email: datos.Email});
            if (user) {
                return res.status(404).json({ message: "Ya existe usuario con ese correo!!!" });
            }
            //gurdadamos al usuario obteniendo sus datos
            const newUser = getRepository(User).create(datos)
            await getRepository(User).save(newUser)

            /* //creamos su toke del usuario registrado
            const token = new Jsonwebtoken(UserDate).createToken(); */
            return res.status(200).json({message: `El usuario ${datos.Names} ha sido creado`});

        } catch (error) {
            return res.status(404).json(error)
        }  
    }

    //OBTENEMOS TODOS LOS USUARIOS
    public async getUsers(req: Request, res: Response): Promise<Response> {
        try {
            console.log('aqui');
            const users = await getRepository(User).find({
                select : ["id","Names","FirstName", "LastName","Celular", "Address","Email","Role","CreatedAt","UpdatedAt"]
            });  
            console.log('asdmvldsmdmmlmqui');      
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
            const id = req.params.id;
            const user = await getRepository(User).findOne(id);
            if (user) {
                getRepository(User).merge(user, req.body);
                await getRepository(User).save(user);
                const userUpdate = await getRepository(User).findOne(id,{
                    select : ["id","Names","FirstName", "LastName","Celular", "Address","Email","Role","CreatedAt","UpdatedAt"]
                });
                return res.json({ mesaage:'Los datos del usuario han sido modificados',userUpdate})
            } else{
                return res.status(404).json({ message: "No existe usuario" })
            }
        } catch (error) {
            return res.json(error);
        }
    }

    //ELIMINAR UN USUARIO
    public async deleteUser(req: Request, res: Response): Promise<Response> {
        try {
            await getRepository(User).delete(req.params.id);
            return res.json({message: "usuario elimninado!!"})
        } catch (error) {
            return res.json(error);
        }
    }
}