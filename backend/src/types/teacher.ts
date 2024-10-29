export type teacherType = {
    id?: number,
    name: string,
    Addresses: {
        [x: string]: any; TeacherId: number; AddressId?: number
    }[];
    Disciplines: {
        TeacherId: number; DisciplineId?: number
    }[];
    phone?: string
}