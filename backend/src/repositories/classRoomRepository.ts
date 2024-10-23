import ClassRoom from '../models/classRoom';
import { classRoomType } from '../types/classRoom';


export class ClassRoomRepository {

    static async getClassRoomRepository() {
        const classRooms = await ClassRoom.findAll();
        return classRooms;
    }

    static async getClassRoomByIdRepository(id: number) {
        const classRoom = await ClassRoom.findOne({ where: { id: id } });
        return classRoom;
    }

    static async postClassRoomRepository(classRoom: classRoomType) {
        const newClassRoom = await ClassRoom.create(classRoom);
        return newClassRoom;
    }


    static async patchClassRoomRepository(id: number, classRoom: classRoomType) {
        const classRoomFinded = await ClassRoom.findOne({ where: { id: id } });
        if (classRoomFinded != null) {
            await ClassRoom.update(classRoom, { where: { id: id } })
            const classRoomUpdated = await ClassRoom.findOne({ where: { id: id } });
            return classRoomUpdated;
        } else {
            return classRoomFinded;
        }

    }

    static async deleteClassRoomRepository(id: number) {
        const classRoom = await ClassRoom.findOne({ where: { id: id } });
        if (classRoom != null) {
            await ClassRoom.destroy({ where: { id: id } });
        } else {
            null;
        }
        return classRoom;
    }
}





