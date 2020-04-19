import {
    handleCors,
    handleBodyRequestParsing,
    handleCompression
} from "./common";
import {connectToDB} from "../utils/databaseInterface";

export default [handleCors, handleBodyRequestParsing, handleCompression, connectToDB];
