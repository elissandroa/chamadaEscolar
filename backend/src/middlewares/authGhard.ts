import { Response, Request, NextFunction } from "express";
import User from "../models/user";
import jwt from 'jsonwebtoken';
import getToken from "../helpers/get-token";
import { Token } from "typescript";
import { userType } from "../types/user";
const jwtSecret = process.env.JWT_SECRET;


const authGuard = async (req: Request, res: Response, next: NextFunction):Promise<undefined> => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.status(401).json({ errors: ["Acesso negado!"] });

    try {
        if(jwtSecret){
            const verified = jwt.verify(token, jwtSecret);
            req.user = await User.findByPk(verified.id);
            next();
        }
       


    } catch (error) {
        res.status(401).json({ errors: ["Token inválido!"] });
    }

}

export default authGuard;