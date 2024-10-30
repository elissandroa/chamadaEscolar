import { Request, Response } from "express";
import User from "../models/user";
import { UserRepository as repository } from "../repositories/userRepository";
import { userType } from "../types/user";
import bcrypt from 'bcrypt';
import createUserToken from "../helpers/create-user-token";
import { UserAuthType } from "../types/userAuthType";

export class UserService {

    static async getUserService() {
        const users = await repository.getUserRepository();
        return users;
    }

    static async getUserByIdService(id: number) {
        const user = await repository.getUserByIdRepository(id);
        return user;
    }


    static async postUserService(user: userType) {
        const userExists = await User.findAll({ where: { email: user.email } })
        if (userExists.length === 0) {
            const password = user.password;
            const salt = await bcrypt.genSalt(12);
            const passwordHash = await bcrypt.hash(password, salt);
            user.password = passwordHash;
            const newUser = await repository.postUserRepository(user);
            return newUser;
        }
        return null;
    }

    static async patchUserService(id: number, user: userType) {
        const userUpdated = await repository.patchUserRepository(id, user);
        return userUpdated;
    }

    static async deleteUserService(id: number) {
        const userDeleted = await repository.deleteUserRepository(id);
        return userDeleted;
    }

    static async loginService(req: Request, res: Response) {
        const { email, password } = req.body;

        const user = await repository.getUserRepositoryByEmail(email);

        if (!user) {
            throw new Error("User not found");
        }

        const checkPassword = await bcrypt.compare(password, user.dataValues.password);
        if (!checkPassword) {
            res.status(422).json({ message: 'Acesso negado!' })
            return;
        }

        const loggedUser = await createUserToken(user, req, res);

        return { loggedUser }

    }


}