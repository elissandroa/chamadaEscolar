import jwt from 'jsonwebtoken';

import { Request, Response } from 'express';
import { UserAuthType } from '../types/userAuthType';
import { createSecretKey } from 'crypto';

const createUserToken = async (user:any, req: Request, res: Response): Promise<void> => {

    const token = jwt.sign({
        name: user.name,
        id: user.id,
        RoleId: user.RoleId
    },
        process.env.JWT_SECRET as string)

    user.password = undefined;

    res.status(201).json({
        message: 'Você está autenticado',
        user,
        token: token,
        userId: user.id,
    });

};


export default createUserToken;


