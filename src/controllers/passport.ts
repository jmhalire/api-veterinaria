import { Strategy, ExtractJwt } from "passport-jwt";
import passport from "passport";
import config from "../config/configs";
import { User } from "../models/usuario";
import { getRepository, Any } from "typeorm";

export class PassportClass {
    options: any;
    constructor() {
        this.options = {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.JWTSECRET
        }
    }

    public strategy(): Strategy{
        return new Strategy(
            this.options,
            async (payload: User, done)=>{
                try {
                    const user: User | any = await getRepository(User).findOne(payload.id)
                    if (user) {
                        return done(null, user);
                    }
                    return done(null, false);
                } catch (error) { 
                    return error;
                }
            }
        )
    }

    public Authenticate():any {
        return passport.authenticate('jwt',{session: false});
    }
}