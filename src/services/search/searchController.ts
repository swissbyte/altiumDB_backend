import {getCategoryByUID, getComponent, getComponentByUID, getPlaces} from "./providers/octopart";
import {searchResultModel} from "../Models/searchResultModel";
import {octopartQueryResponseModel} from "./octopartQueryResponseModel";
import {Component} from "../../entities/Component";
import {getConnection} from "../../utils/databaseInterface";

export const getPlacesByName = async (q: string) => {
    if (q.length < 3) {
        return {
            type: "FeatureCollection",
            features: []
        };
    }
    return await getPlaces(q);
};


// export const getComponentByMPN = async (q: string) => {
//     return await getComponent(q);
// };

function getSpecProperty(item: any, property: string): string {
    if (item.specs.hasOwnProperty(property)) {

        return item.specs[property].display_value;

    } else return "";
}

function getImage(item: any): string {

    if (Object.keys(item.imagesets).length > 0) {
        item = item.imagesets[0];
        if (item.hasOwnProperty("small_image")) {
            return item.small_image.url;
        }
    }
    return "";
}

async function getCategory(item: any): Promise<string> {
    let res: string = "";
    if (item.category_uids[0] !== undefined) {
        for (let category of item.category_uids) {
            res += (await getCategoryByUID(category)).name + ",";
        }
    }
    return res;
}

function getDatasheets(item: any): string[] {
    let res: string[] = [];

    if (item.datasheets[0] != undefined) {
        for (let datasheet of item.datasheets) {
            res.push(datasheet.url);
        }
    }
    return res;
}

function getTolerance(item: any): string {

    return getSpecProperty(item, "resistance_tolerance") +
        getSpecProperty(item, "capacitance_tolerance")
}


export async function getComponentByID(id: number): Promise<Component> {
    const data = await getConnection()
        .getRepository(Component)
        .createQueryBuilder()
        .where("id = :id", {id: id})
        .getMany();
    if (data.length == 0) return new Component();
    return data[0];
}

export async function getComponentByMPN(q: any): Promise<searchResultModel[]> {

    const queryRes = await getComponent(q);
    let res: searchResultModel[] = [];
    let part: searchResultModel[] = [];

    console.log("Found: " + Object.keys(queryRes.results).length + " Items")
    //const res : searchResultModel = {};
    for (let item of queryRes.results) {
        const description: string = item.snippet;
        item = item.item;

        if (item.__class__ == "Part") {
            //console.log(item);
            const tmpRes: searchResultModel = {
                Color: "" + getSpecProperty(item, "color"),
                DatasheetURLs: getDatasheets(item),
                MPN: item.mpn,
                PackageDescription: getSpecProperty(item, "case_package"),
                PinCount: "" + getSpecProperty(item, "pin_count"),
                Power: getSpecProperty(item, "power_rating"),
                Resistance: getSpecProperty(item, "resistance"),
                SMD: "",
                Value: "",
                Voltage: getSpecProperty(item, "voltage_rating_dc"),
                OctopartURL: item.octopart_url,
                UID: item.uid,
                Manufacturer: item.manufacturer.name,
                PartDescription: description,
                Category: "", //await getCategory(item),
                TC: getSpecProperty(item, "temperature_coefficient"),
                Tolerance: getTolerance(item),
                ImageURL: getImage(item),
                ROHS: getSpecProperty(item, "rohs_status")
            }
            res.push(tmpRes);
        }
    }

    //console.log(queryRes.results[0].items);
    return (res);
}

