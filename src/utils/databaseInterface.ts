import {sqlQuery} from "./database";
import {componentModel} from "../services/Models/componentModel";
import {supplierModel} from "../services/Models/supplierModel";


function handleResult(err: any, res: any) {
    console.log("Callback :)");
    if (err) throw(err);

    console.log((<supplierModel[]>res)[0].Name);
}

export function getSupplier(): supplierModel[] {
    let suppliers: supplierModel[] = [];

    sqlQuery("SELECT * FROM supplier", handleResult);

    return suppliers;
}

export function addComponent(component: componentModel) {
    let sql: String = "INSERT INTO";
}
