import {sqlQuery} from "./database";
import {componentModel} from "../services/Models/componentModel";
import {supplierModel} from "../services/Models/supplierModel";
import {Connection, createConnection} from "typeorm";
import {Component} from "../entities/Component";
import {Supplier} from "../entities/Supplier";

let connection: Connection;

function handleResult(err: any, res: any) {
    console.log("Callback :)");
    if (err) throw(err);

    console.log((<supplierModel[]>res)[0].Name);
}

export async function connectToDB() {
    // createConnection method will automatically read connection options
    // from your ormconfig file or environment variables
    if (connection !== undefined) {
        if (connection.isConnected == false) {
            connection = await createConnection();
        }
    } else {
        connection = await createConnection();
    }
    console.log("connected");
    await getSupplier();
}


export async function getSupplier(): Promise<Supplier[]> {
    const supplier = await connection
        .getRepository(Supplier)
        .createQueryBuilder("supplier")
        .getMany();
    console.log(supplier);
    return supplier;
}

export function addComponent(component: componentModel) {
    let sql: String = "INSERT INTO";
}
