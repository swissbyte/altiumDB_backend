import {Manufacturer} from "../../entities/Manufacturer";
import {getConnection} from "../../utils/databaseInterface";


export async function getData(forRepo: any): Promise<any[]> {
    const data = await getConnection()
        .getRepository(forRepo)
        .createQueryBuilder()
        .getMany();
    return data;
}

export async function getDataByID(forRepo: any, id: number): Promise<any[]> {
    const data = await getConnection()
        .getRepository(forRepo)
        .createQueryBuilder()
        .where("id = :id", {id: id})
        .getMany();
    return data;
}

export async function addData(forRepo: any, data: any) {
    await getConnection().createQueryBuilder()
        .insert()
        .into(forRepo)
        .values([data])
        .execute();
}

export async function removeData(forRepo: any, data: any) {
    await getConnection().createQueryBuilder()
        .delete()
        .from(forRepo)
        .where("id = :id", {id: data.id})
        .execute();
}

export async function updateData(forRepo: any, data: any) {
    await getConnection().createQueryBuilder()
        .update(forRepo)
        .set({name: data.name})
        .where("id = :id", {id: data.id})
        .execute();
}


////////// Manufacturere

export async function getManufacturers(): Promise<Manufacturer[]> {
    const manufacturer = await getConnection()
        .getRepository(Manufacturer)
        .createQueryBuilder("manufacturer")
        .getMany();
    return manufacturer;
}

export async function addManufacturer(data: Manufacturer) {
    await getConnection().createQueryBuilder()
        .insert()
        .into(Manufacturer)
        .values([data])
        .execute();
}

export async function removeManufacturer(data: Manufacturer) {
    await getConnection().createQueryBuilder()
        .delete()
        .from(Manufacturer)
        .where("id = :id", {id: data.id})
        .execute();
}

export async function updateManufacturer(data: Manufacturer) {
    await getConnection().createQueryBuilder()
        .update(Manufacturer)
        .set({name: data.name})
        .where("id = :id", {id: data.id})
        .execute();
}
