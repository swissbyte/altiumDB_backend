import {sqlQuery} from "./database";
import {componentModel} from "../services/Models/componentModel";
import {supplierModel} from "../services/Models/supplierModel";
import {createConnection} from "typeorm";


function handleResult(err: any, res: any) {
    console.log("Callback :)");
    if (err) throw(err);

    console.log((<supplierModel[]>res)[0].Name);
}

export async function connectToDB() {
    // createConnection method will automatically read connection options
    // from your ormconfig file or environment variables
    const connection = await createConnection();
    console.log("connected");
    /*    const firstUser = await connection
            .getRepository(User)
            .createQueryBuilder("user")
            .where("user.id = :id", { id: 1 })
            .getOne();*/
}

export function getSupplier(): supplierModel[] {
    let suppliers: supplierModel[] = [];

    sqlQuery("SELECT * FROM supplier", handleResult);

    return suppliers;
}

export function addComponent(component: componentModel) {
    let sql: String = "INSERT INTO";
}
