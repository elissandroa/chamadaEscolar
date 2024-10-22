import { UserService as service } from "../services/userService";
import { userType } from "../types/user";
import { Request, Response } from "express";


export class UserController {

    static async getUserController(req: Request, res: Response) {
        const users = await service.getUserService();
        if (users !== null) {
            res.status(200).json(users);
        } else {
            res.status(404).json({ message: "Usuário não econtrado!" });
        }

    }

    static async getUserByIdController(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const user = await service.getUserByIdService(id);
        if (user !== null) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "Usuário não econtrado!" });
        }
    }

    static async postUserController(req: Request, res: Response) {
        const user: userType = {
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            RoleId: parseInt(req.body.RoleId)
        }

        const newUser = await service.postUserService(user);

        res.status(200).json(newUser);

    }

    static async patchUserController(req: Request, res: Response) {

        const id = parseInt(req.params.id);

        const user: userType = {
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            RoleId: parseInt(req.body.RoleId)
        }

        const userUpdated = await service.patchUserService(id, user)

        if (userUpdated !== null) {
            res.status(200).json(userUpdated);
        } else {
            res.status(404).json({ message: "Usuário não econtrado!" });
        }

    }

    static async deleteUserController(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const userDeleted = await service.deleteUserService(id);

        if (userDeleted !== null) {
            res.status(200).json({ message: "Deletado com sucesso!" });
        } else {
            res.status(404).json({ message: "Usuário não econtrado!" });
        }
    }

}