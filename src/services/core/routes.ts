import {Request, Response} from "express";
import {
    connectToDB,
    getManufacturerByName
} from "../../utils/databaseInterface";
import {Manufacturer} from "../../entities/Manufacturer";
import {addManufacturer, getManufacturers, removeManufacturer, updateManufacturer} from "./coreController";

export default [
    {
        path: "/api/v1/core/manufacturer",
        method: "get",
        handler: [
            async ({query}: Request, res: Response) => {
                if (query.name) res.status(200).json(await getManufacturerByName(<string>query.name));
                else res.status(200).json(await getManufacturers());
            }
        ],
    },

    {
        path: "/api/v1/core/manufacturer",
        method: "post",
        handler: [
            async (req: Request, res: Response) => {
                //await addManufacturer(query);
                console.log(req.body);
                await addManufacturer(req.body);
                res.status(200).send();
            }
        ],
    },
    {
        path: "/api/v1/core/manufacturer",
        method: "delete",
        handler: [
            async (req: Request, res: Response) => {
                //await addManufacturer(query);
                console.log(req.body);
                await removeManufacturer(req.body);
                res.status(200).send();
            }
        ],
    },
    {
        path: "/api/v1/core/manufacturer",
        method: "put",
        handler: [
            async (req: Request, res: Response) => {
                //await addManufacturer(query);
                console.log(req.body);
                await updateManufacturer(req.body);
                res.status(200).send();
            }
        ],
    },
];

