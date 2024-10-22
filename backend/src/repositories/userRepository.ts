import User from '../models/user';
import { userType } from '../types/user';


export class UserRepository {

    static async getUserRepository() {
        const users = await User.findAll();
        return users;
    }

    static async getUserByIdRepository(id: number) {
        const user = await User.findOne({ where: { id: id } });
        return user;
    }

    static async postUserRepository(user: userType) {
        const newUser = await User.create(user);
        return newUser;
    }


    static async patchUserRepository(id: number, user: userType) {
        const userFinded = await User.findOne({ where: { id: id } });
        if (userFinded != null) {
            await User.update(user, { where: { id: id } })
            const userUpdated = await User.findOne({ where: { id: id } });
            return userUpdated;
        } else {
            return userFinded;
        }

    }

    static async deleteUserRepository(id: number) {
        const user = await User.findOne({ where: { id: id } });
        if (user != null) {
            await User.destroy({ where: { id: id } });
        } else {
            null;
        }
        return user;
    }
}





