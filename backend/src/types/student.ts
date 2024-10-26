export type studentType = {
    id?: number,
    name: string,
    InstrumentId: number,
    ClassRoomId?: number,
    Addresses: { StudentId: number; AddressId?: number }[];
    
}