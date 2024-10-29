export type schoolRollCallType = {
    id?: number,
    schoolRollCallDate: Date,
    StudentId?: number,
    DisciplineId?: number,
    presence?: boolean,
    ClassRoomId: number,
    TeacherId: number,
    Students?: []
}