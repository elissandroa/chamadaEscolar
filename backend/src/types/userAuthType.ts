import { Secret } from "jsonwebtoken";

export type UserAuthType = {
    name?: string;
    id?: string | number;
    RoleId?: string | number;
    password?: string;
    email?:string,
}