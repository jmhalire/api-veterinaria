import jwt from 'jsonwebtoken';
import config from '../config/configs';
import { User } from '../models/usuario';

export class Jsonwebtoken {

    constructor(private user:User | any) { }

    public createToken() {
        return jwt.sign(
            {id: this.user.id, email: this.user.Email},
            config.JWTSECRET,
            {expiresIn: '4h'}
        )
    }
}