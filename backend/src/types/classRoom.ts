import { studentType } from "./student"

export type classRoomType = {
    id?:number,
    name?:string,
    SchoolId?: number,
    SchoolRollCallId?: number,
    Students: { StudentId: number; ClassRoomId?: number }[];
}