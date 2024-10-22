import { RoleRepository as repository } from "../repositories/roleRepository";
import { roleType } from "../types/role";

export class RoleService {

    static async getRoleService(){
        const roles = await repository.getRoleRepository();
        return roles;
    }

    static async getRoleByIdService(id:number){
        const role = await repository.getRoleByIdRepository(id);
        return role;
    } 

    static async postRoleService(role: roleType) {
        const newRole = await repository.postRoleRepository(role);
        return newRole;
    }

    static async patchRoleService(id:number, role:roleType){
        const roleUpdated = await repository.patchRoleRepository(id, role);
        return roleUpdated;
    }

    static async deleteRoleService(id:number){
        const roleDeleted = await repository.deleteRoleRepository(id);
        return roleDeleted;
    }


}