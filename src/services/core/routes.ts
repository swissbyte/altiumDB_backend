import {Request, Response} from "express";
import {
    getManufacturerByName
} from "../../utils/databaseInterface";
import {Manufacturer} from "../../entities/Manufacturer";
import {
    addData,
    getData,
    removeData,
    updateData
} from "./coreController";
import {Supplier} from "../../entities/Supplier";

export default [
    {
        path: "/api/v1/core/manufacturer",
        method: "get",
        handler: [
            async ({query}: Request, res: Response) => {
                if (query.name) res.status(200).json(await getManufacturerByName(<string>query.name));
                else res.status(200).json(await getData(Manufacturer));
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
                await addData(Manufacturer, req.body);
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
                await removeData(Manufacturer, req.body);
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
                await updateData(Manufacturer, req.body);
                res.status(200).send();
            }
        ],
    },
];

