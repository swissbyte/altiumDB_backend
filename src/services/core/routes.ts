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
import {Attribute} from "../../entities/Attribute";
import {Author} from "../../entities/Author";
import {Class} from "../../entities/Class";
import {Case} from "../../entities/Case";
import {Rohs} from "../../entities/Rohs";
import {Component} from "../../entities/Component";
import {Subclass} from "../../entities/Subclass";
import {Schemalibpath} from "../../entities/Schemalibpath";
import {Footprintpath} from "../../entities/Footprintpath";
import {State} from "../../entities/State";
import dotenv from "dotenv";
import {getZipContent} from "../../utils/ziputil";


export default [

    {
        path: "/api/v1/core/supplier",
        method: "get",
        handler: [
            async ({query}: Request, res: Response) => {
                res.status(200).json(await getData(Supplier));
            }
        ],
    },
    {
        path: "/api/v1/core/supplier",
        method: "post",
        handler: [
            async (req: Request, res: Response) => {
                //await addManufacturer(query);
                await addData(Supplier, req.body);
                res.status(200).send();
            }
        ],
    },
    {
        path: "/api/v1/core/supplier",
        method: "delete",
        handler: [
            async (req: Request, res: Response) => {
                await removeData(Supplier, req.body);
                res.status(200).send();
            }
        ],
    },
    {
        path: "/api/v1/core/supplier",
        method: "put",
        handler: [
            async (req: Request, res: Response) => {
                await updateData(Supplier, req.body);
                res.status(200).send();
            }
        ],
    },


    {
        path: "/api/v1/core/attribute",
        method: "get",
        handler: [
            async ({query}: Request, res: Response) => {
                res.status(200).json(await getData(Attribute));
            }
        ],
    },
    {
        path: "/api/v1/core/attribute",
        method: "post",
        handler: [
            async (req: Request, res: Response) => {
                //await addManufacturer(query);
                await addData(Attribute, req.body);
                res.status(200).send();
            }
        ],
    },
    {
        path: "/api/v1/core/attribute",
        method: "delete",
        handler: [
            async (req: Request, res: Response) => {
                await removeData(Attribute, req.body);
                res.status(200).send();
            }
        ],
    },
    {
        path: "/api/v1/core/attribute",
        method: "put",
        handler: [
            async (req: Request, res: Response) => {
                await updateData(Attribute, req.body);
                res.status(200).send();
            }
        ],
    },

    {
        path: "/api/v1/core/author",
        method: "get",
        handler: [
            async ({query}: Request, res: Response) => {
                res.status(200).json(await getData(Author));
            }
        ],
    },
    {
        path: "/api/v1/core/author",
        method: "post",
        handler: [
            async (req: Request, res: Response) => {
                //await addManufacturer(query);
                await addData(Author, req.body);
                res.status(200).send();
            }
        ],
    },
    {
        path: "/api/v1/core/author",
        method: "delete",
        handler: [
            async (req: Request, res: Response) => {
                await removeData(Author, req.body);
                res.status(200).send();
            }
        ],
    },
    {
        path: "/api/v1/core/author",
        method: "put",
        handler: [
            async (req: Request, res: Response) => {
                await updateData(Author, req.body);
                res.status(200).send();
            }
        ],
    },

    {
        path: "/api/v1/core/component",
        method: "get",
        handler: [
            async ({query}: Request, res: Response) => {
                res.status(200).json(await getData(Component));
            }
        ],
    },
    {
        path: "/api/v1/core/component",
        method: "post",
        handler: [
            async (req: Request, res: Response) => {
                //await addManufacturer(query);
                await addData(Component, req.body);
                res.status(200).send();
            }
        ],
    },
    {
        path: "/api/v1/core/component",
        method: "delete",
        handler: [
            async (req: Request, res: Response) => {
                await removeData(Component, req.body);
                res.status(200).send();
            }
        ],
    },
    {
        path: "/api/v1/core/component",
        method: "put",
        handler: [
            async (req: Request, res: Response) => {
                await updateData(Component, req.body);
                res.status(200).send();
            }
        ],
    },

    {
        path: "/api/v1/core/subclass",
        method: "get",
        handler: [
            async ({query}: Request, res: Response) => {
                res.status(200).json(await getData(Subclass));
            }
        ],
    },
    {
        path: "/api/v1/core/subclass",
        method: "post",
        handler: [
            async (req: Request, res: Response) => {
                //await addManufacturer(query);
                await addData(Subclass, req.body);
                res.status(200).send();
            }
        ],
    },
    {
        path: "/api/v1/core/subclass",
        method: "delete",
        handler: [
            async (req: Request, res: Response) => {
                await removeData(Subclass, req.body);
                res.status(200).send();
            }
        ],
    },
    {
        path: "/api/v1/core/subclass",
        method: "put",
        handler: [
            async (req: Request, res: Response) => {
                await updateData(Subclass, req.body);
                res.status(200).send();
            }
        ],
    },

    {
        path: "/api/v1/core/schemalibpath",
        method: "get",
        handler: [
            async ({query}: Request, res: Response) => {
                res.status(200).json(await getData(Schemalibpath));
            }
        ],
    },
    {
        path: "/api/v1/core/schemalibpath",
        method: "post",
        handler: [
            async (req: Request, res: Response) => {
                //await addManufacturer(query);
                await addData(Schemalibpath, req.body);
                res.status(200).send();
            }
        ],
    },
    {
        path: "/api/v1/core/schemalibpath",
        method: "delete",
        handler: [
            async (req: Request, res: Response) => {
                await removeData(Schemalibpath, req.body);
                res.status(200).send();
            }
        ],
    },
    {
        path: "/api/v1/core/schemalibpath",
        method: "put",
        handler: [
            async (req: Request, res: Response) => {
                await updateData(Schemalibpath, req.body);
                res.status(200).send();
            }
        ],
    },

    {
        path: "/api/v1/core/footprintpath",
        method: "get",
        handler: [
            async ({query}: Request, res: Response) => {
                res.status(200).json(await getData(Footprintpath));
            }
        ],
    },
    {
        path: "/api/v1/core/footprintpath",
        method: "post",
        handler: [
            async (req: Request, res: Response) => {
                //await addManufacturer(query);
                await addData(Footprintpath, req.body);
                res.status(200).send();
            }
        ],
    },
    {
        path: "/api/v1/core/footprintpath",
        method: "delete",
        handler: [
            async (req: Request, res: Response) => {
                await removeData(Footprintpath, req.body);
                res.status(200).send();
            }
        ],
    },
    {
        path: "/api/v1/core/footprintpath",
        method: "put",
        handler: [
            async (req: Request, res: Response) => {
                await updateData(Footprintpath, req.body);
                res.status(200).send();
            }
        ],
    },

    {
        path: "/api/v1/core/state",
        method: "get",
        handler: [
            async ({query}: Request, res: Response) => {
                res.status(200).json(await getData(State));
            }
        ],
    },
    {
        path: "/api/v1/core/state",
        method: "post",
        handler: [
            async (req: Request, res: Response) => {
                //await addManufacturer(query);
                await addData(State, req.body);
                res.status(200).send();
            }
        ],
    },
    {
        path: "/api/v1/core/state",
        method: "delete",
        handler: [
            async (req: Request, res: Response) => {
                await removeData(State, req.body);
                res.status(200).send();
            }
        ],
    },
    {
        path: "/api/v1/core/state",
        method: "put",
        handler: [
            async (req: Request, res: Response) => {
                await updateData(State, req.body);
                res.status(200).send();
            }
        ],
    },

    {
        path: "/api/v1/core/rohs",
        method: "get",
        handler: [
            async ({query}: Request, res: Response) => {
                res.status(200).json(await getData(Rohs));
            }
        ],
    },
    {
        path: "/api/v1/core/rohs",
        method: "post",
        handler: [
            async (req: Request, res: Response) => {
                //await addManufacturer(query);
                await addData(Rohs, req.body);
                res.status(200).send();
            }
        ],
    },
    {
        path: "/api/v1/core/rohs",
        method: "delete",
        handler: [
            async (req: Request, res: Response) => {
                await removeData(Rohs, req.body);
                res.status(200).send();
            }
        ],
    },
    {
        path: "/api/v1/core/rohs",
        method: "put",
        handler: [
            async (req: Request, res: Response) => {
                await updateData(Rohs, req.body);
                res.status(200).send();
            }
        ],
    },

    {
        path: "/api/v1/core/case",
        method: "get",
        handler: [
            async ({query}: Request, res: Response) => {
                res.status(200).json(await getData(Case));
            }
        ],
    },
    {
        path: "/api/v1/core/case",
        method: "post",
        handler: [
            async (req: Request, res: Response) => {
                //await addManufacturer(query);
                await addData(Case, req.body);
                res.status(200).send();
            }
        ],
    },
    {
        path: "/api/v1/core/case",
        method: "delete",
        handler: [
            async (req: Request, res: Response) => {
                await removeData(Case, req.body);
                res.status(200).send();
            }
        ],
    },
    {
        path: "/api/v1/core/case",
        method: "put",
        handler: [
            async (req: Request, res: Response) => {
                await updateData(Case, req.body);
                res.status(200).send();
            }
        ],
    },

    {
        path: "/api/v1/core/class",
        method: "get",
        handler: [
            async ({query}: Request, res: Response) => {
                res.status(200).json(await getData(Class));
            }
        ],
    },
    {
        path: "/api/v1/core/class",
        method: "post",
        handler: [
            async (req: Request, res: Response) => {
                //await addManufacturer(query);
                await addData(Class, req.body);
                res.status(200).send();
            }
        ],
    },
    {
        path: "/api/v1/core/class",
        method: "delete",
        handler: [
            async (req: Request, res: Response) => {
                await removeData(Class, req.body);
                res.status(200).send();
            }
        ],
    },
    {
        path: "/api/v1/core/class",
        method: "put",
        handler: [
            async (req: Request, res: Response) => {
                await updateData(Class, req.body);
                res.status(200).send();
            }
        ],
    },


    {
        path: "/api/v1/core/footprintlib",
        method: "get",
        handler: [
            async ({query}: Request, res: Response) => {
                dotenv.config({path: '.env.production'});
                const path = <string>process.env.FOOTPRINTLIB_PATH;
                getZipContent(path + "\\" + query.filename);

                res.status(200).send();
            }
        ],
    },


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

