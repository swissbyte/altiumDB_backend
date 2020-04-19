import {supplierModel} from "../services/Models/supplierModel";
import {Connection, createConnection} from "typeorm";
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
    console.log("Check connection");
    if (connection !== undefined) {
        if (connection.isConnected == false) {
            connection = await createConnection();
        }
    } else {
        connection = await createConnection();
    }
}


export async function doTest() {
    console.log("connected");
    await getSuppliers();
    return getSupplierByName("RS-Online");

}

/*
export async function addComponent(comp: componentModel) {
    let tmpAttribute: Attribute = {
        color: comp.Color,
        comment: comp.Comment,
        footprint: comp.PackageDescription,
        footprintRef: comp.footprintRef,
        libraryRef: comp.symbolRef,
        componentLink1Url: comp.ComponentLink1URL,
        componentLink2Url: comp.ComponentLink2URL,
        componentLink1Description: comp.ComponentLink1Description,
        componentLink2Description: comp.ComponentLink1Description,
        manufacturer1ComponentHeight: comp.Manufacturer1ComponentHeight,
        manufacturer1Mpn: comp.Manufacturer1MPN,
        manufacturer2ComponentHeight: comp.Manufacturer2ComponentHeight,
        manufacturer2Mpn: comp.Manufacturer2MPN,
        mpn1Supplier1OrderingCode: comp.MPN1Supplier1OrderingCode,
        mpn1Supplier2OrderingCode: comp.MPN1Supplier2OrderingCode,
        mpn2Supplier1OrderingCode: comp.MPN2Supplier1OrderingCode,
        mpn2Supplier2OrderingCode: comp.MPN2Supplier2OrderingCode,
        partDescription: comp.PartDescription,
        helpUrl: comp.HelpURL,
        pinCount: comp.PinCount,
        packageDescription: comp.PackageDescription,
        power: comp.Power,
        resistance: comp.Resistance,
        smd: comp.SMD,
        tc: comp.TC,
        tolerance: comp.Tolerance,
        value: comp.Value,
        voltage: comp.Voltage
    }

    /!*    let tmpComp: Component = {
            creationDate: Date().toString(),
            attributeId
        }*!/


    /!*    await connection.createQueryBuilder()
            .insert()
            .into(Component)
            .values([
                {creationDate: Date().toString, lastName: "Saw"}
            ])
            .execute();*!/
}*/


export async function getSupplierByName(name: string): Promise<Supplier> {
    const suppliers = await getSuppliers();
    //console.log((suppliers));
    //console.log("Here they are:");
    const matchedSuppliers = suppliers.filter((value, index) => value.name == name);

    console.log("Found suppliers: " + matchedSuppliers.length);
    //console.log(matchedSuppliers[0]);
    if (matchedSuppliers.length >= 1) {
        console.log("Return matched");
        return matchedSuppliers[0];
    }
    console.log("No one matched");
    return new Supplier();
}

export async function getSuppliers(): Promise<Supplier[]> {
    const supplier = await connection
        .getRepository(Supplier)
        .createQueryBuilder("supplier")
        .getMany();
    //console.log(supplier);
    const thisOne: Supplier[] = supplier.filter((value, index) => value.name == "RS-Online");
    //console.log(thisOne);

    return supplier;
}


