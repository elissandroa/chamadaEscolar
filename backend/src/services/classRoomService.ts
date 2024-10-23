import { ClassRoomRepository as repository } from "../repositories/classRoomRepository";
import { classRoomType } from "../types/classRoom";

export class ClassRoomService {

    static async getClassRoomService(){
        const classRoom = await repository.getClassRoomRepository();
        return classRoom;
    }

    static async getClassRoomByIdService(id:number){
        const classRoom = await repository.getClassRoomByIdRepository(id);
        return classRoom;
    } 

    static async postClassRoomService(classRoom: classRoomType) {
         const newClassRoom = await repository.postClassRoomRepository(classRoom);
        return newClassRoom;
    }

    static async patchClassRoomService(id:number, classRoom:classRoomType){
        const classRoomUpdated = await repository.patchClassRoomRepository(id, classRoom);
        return classRoomUpdated;
    }

    static async deleteClassRoomService(id:number){
        const classRoomDeleted = await repository.deleteClassRoomRepository(id);
        return classRoomDeleted;
    }


}