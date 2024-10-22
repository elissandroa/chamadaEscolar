import { RoleService as service } from "../services/roleService";
import { roleType } from "../types/role";
import { Request, Response } from "express";


export class RoleController {

    static async getRoleController(req: Request, res: Response) {
        const roles = await service.getRoleService();
        if(roles !== null){
            res.status(200).json(roles);
        } else {
            res.status(404).json({message: "Registro não econtrado!"});
        }
        
    }

    static async getRoleByIdController(req: Request, res: Response) {
        const id = parseInt(req.params.id); 
        const role = await service.getRoleByIdService(id);
        if(role !== null){
            res.status(200).json(role);
        } else {
            res.status(404).json({message: "Registro não econtrado!"});
        }
    }

    static async postRoleController(req: Request, res: Response) {
        const role: roleType = {
            name: req.body.name,
        }

        const newRole = await service.postRoleService(role);

        res.status(200).json(newRole);

    }

    static async patchRoleController(req:Request, res: Response) {

        const id = parseInt(req.params.id);

        const role: roleType = {
            name: req.body.name,
        }

        const roleUpdated = await service.patchRoleService(id, role)

        if(roleUpdated !== null){
            res.status(200).json(roleUpdated);
        } else {
            res.status(404).json({message: "Registro não econtrado!"});
        }
        
    }

    static async deleteRoleController(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const roleDeleted = await service.deleteRoleService(id);

        if(roleDeleted !== null){
            res.status(200).json({message: "Deletado com sucesso!"});
        } else {
            res.status(404).json({message: "Registro não econtrado!"});
        }
    }
    
}