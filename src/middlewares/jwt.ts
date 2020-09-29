import jwt from 'jsonwebtoken';
import { User } from '../models/usuario';

export class Jsonwebtoken {

    private JWTSECRET: string;
    constructor(private user:User | any) {
        this.JWTSECRET = <string>process.env.JWTSECRET
     }

    public createToken(): string {
        return jwt.sign(
            {id: this.user.id, email: this.user.Email},
            this.JWTSECRET
        )
    }
} 