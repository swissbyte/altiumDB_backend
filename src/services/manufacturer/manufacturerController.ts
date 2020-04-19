import {Manufacturer} from "../../entities/Manufacturer";
import {getConnection} from "../../utils/databaseInterface";


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
