import request from "request-promise";
import dotenv from "dotenv";

dotenv.config({path: '.env.production'});

export const getPlaces = async (query: string) => {
    const key = process.env.OPEN_CAGE_DATA_KEY;
    const url = `https://api.opencagedata.com/geocode/v1/geojson?q=${query}&key=${key}&limit=20&no_annotations=1`;
    const response = await request(url);
    return JSON.parse(response);
};

export const getComponent = async (query: string) => {
    const key = process.env.OCTOPART_API_KEY;
    const url = `https://octopart.com/api/v3/parts/match?queries=[{"mpn":"${query}"}]&apikey=${key}`;
    const response = await request(url);
    return JSON.parse(response);
}
