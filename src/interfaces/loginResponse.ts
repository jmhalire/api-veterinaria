import { Usuario } from "./usuario";

export interface LoginResponse {
    value: boolean;
    message: string;
    token: string;
}
