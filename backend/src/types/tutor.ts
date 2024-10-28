export type tutorType = {
    id?:number,
    name:string,
    Addresses: {
        [x: string]: any; TutorId: number; AddressId?: number 
}[];
}