import {Request, Response} from "express";
import {getComponentByMPN, getPlacesByName} from "./searchController";

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
    }
];

