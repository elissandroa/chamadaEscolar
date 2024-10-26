export type schoolType = {
    id?:number,
    name:string,
    Addresses: { SchoolId: number; AddressId?: number }[];
}