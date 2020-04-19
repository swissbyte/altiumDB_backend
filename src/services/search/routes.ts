import {Request, Response} from "express";
import {getComponentByID, getComponentByMPN, getPlacesByName} from "./searchController";
import {
    connectToDB,
    getManufacturerByName,
    getSupplierByName,
    getSuppliers
} from "../../utils/databaseInterface";
import {Manufacturer} from "../../entities/Manufacturer";

export default [
    {
        path: "/api/v1/search/manufacturer",
        method: "get",
        handler: [
            async ({query}: Request, res: Response) => {
                res.status(200).json(await getManufacturerByName(<string>query.q));
            }
        ]
    },
    {
        path: "/api/v1/match/component",
        method: "get",
        handler: [
            async ({query}: Request, res: Response) => {
                res.status(200).json(await getComponentByID(<number><unknown>query.id));
            }
        ]
    },
    {
        path: "/api/v1/search/octopart",
        method: "get",
        handler: [
            async ({query}: Request, res: Response) => {
                const result = await getComponentByMPN(<string>query.q);
                res.status(200).send(result);
            }
        ]
    },
    {
        path: "/api/v1/search/supplier",
        method: "get",
        handler: [
            async ({query}: Request, res: Response) => {
                res.status(200).json(await getSupplierByName(<string>query.q));
            }
        ],
    }

];

