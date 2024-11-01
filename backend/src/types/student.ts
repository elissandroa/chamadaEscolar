export type studentType = {
    id?: number,
    name: string,
    InstrumentId: number,
    ClassRoomId?: number,
    phone?: string,
    Addresses: { StudentId: number; AddressId?: number }[];
    GraduationId?: number
    
}