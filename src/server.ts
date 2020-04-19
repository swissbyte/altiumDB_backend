import http from "http";
import express from "express";
import {applyMiddleware, applyRoutes} from "./utils";
import routes from "./services";
import middleware from "./middleware";
import "reflect-metadata";

import {connectToDB} from "./utils/database"
import {execute} from "./utils/launcher";
import dotenv from "dotenv";

dotenv.config({path: '.env.production'});

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);

const path = <string>process.env.MYSQLD_PATH;

//Starting mysqld service.
execute('mysqld.exe', [], path);

connectToDB();

console.log("Launched");

const {PORT = 3000} = process.env;
const server = http.createServer(router);


server.listen(PORT, () =>
    console.log(`Server is running http://localhost:${PORT}...`)
);
