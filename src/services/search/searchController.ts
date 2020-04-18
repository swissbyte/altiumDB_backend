import { getComponent, getPlaces } from "./providers/octopart";

export const getPlacesByName = async (q: string) => {
    if (q.length < 3) {
        return {
            type: "FeatureCollection",
            features: []
        };
    }
    return await getPlaces(q);
};


export const getComponentByMPN = async (q: string) => {
    if (q.length < 3) {
        return {
            type: "FeatureCollection",
            features: []
        };
    }
    return await getComponent(q);
};
