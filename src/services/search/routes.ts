import {Request, Response} from "express";
import {getComponentByMPN, getPlacesByName} from "./searchController";
import {
    connectToDB,
    getManufacturerByName,
    getSupplierByName,
    getSuppliers
} from "../../utils/databaseInterface";
import {Manufacturer} from "../../entities/Manufacturer";

export default [
    {
        path: "/api/v1/search/place",
        method: "get",
        handler: [
            async ({query}: Request, res: Response) => {
                const result = await getPlacesByName(<string>query.q);
                res.status(200).send(result);
            }
        ]
    },

    {
        path: "/api/v1/search/component",
        method: "get",
        handler: [
            async ({query}: Request, res: Response) => {
                const result = await getComponentByMPN(<string>query.q);
                res.status(200).send(result);
            }
        ]
    },

    {
        path: "/api/v1/core/supplier",
        method: "get",
        handler: [
            async ({query}: Request, res: Response) => {
                if (query.name) res.status(200).json(await getSupplierByName(<string>query.name));
                else res.status(200).json(await getSuppliers());
            }
        ],
    },
    {
        path: "/test",
        method: "get",
        handler: [
            async ({query}: Request, res: Response) => {
                res.status(200).send(connectToDB());
            }
        ]
    }
];

