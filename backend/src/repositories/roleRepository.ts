import Role from '../models/role';
import { roleType } from '../types/role';


export class RoleRepository {

    static async getRoleRepository() {
        const roles = await Role.findAll();
        return roles;
    }

    static async getRoleByIdRepository(id: number) {
        const role = await Role.findOne({ where: { id: id } });
        return role;
    }

    static async postRoleRepository(role: roleType) {
        const newRole = await Role.create(role);
        return newRole;
    }


    static async patchRoleRepository(id: number, role: roleType) {
        const roleFinded = await Role.findOne({ where: { id: id } });
        if (roleFinded != null) {
            await Role.update(role, { where: { id: id } })
            const roleUpdated = await Role.findOne({ where: { id: id } });
            return roleUpdated;
        } else {
            return roleFinded;
        }

    }

    static async deleteRoleRepository(id: number) {
        const role = await Role.findOne({ where: { id: id } });
        if (role != null) {
            await Role.destroy({ where: { id: id } });
        } else {
            null;
        }
        return role;
    }
}





