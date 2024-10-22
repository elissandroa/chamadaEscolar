import { UserRepository as repository } from "../repositories/userRepository";
import { userType } from "../types/user";

export class UserService {

    static async getUserService(){
        const users = await repository.getUserRepository();
        return users;
    }

    static async getUserByIdService(id:number){
        const user = await repository.getUserByIdRepository(id);
        return user;
    } 

    static async postUserService(user: userType) {
         const newUser = await repository.postUserRepository(user);
        return newUser;
    }

    static async patchUserService(id:number, user:userType){
        const userUpdated = await repository.patchUserRepository(id, user);
        return userUpdated;
    }

    static async deleteUserService(id:number){
        const userDeleted = await repository.deleteUserRepository(id);
        return userDeleted;
    }


}