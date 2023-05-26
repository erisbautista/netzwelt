import { defineStore } from "pinia";
import { useApi } from "../api/adapter";

const api = useApi();

interface Territories {
    id: string;
    name: string;
    parent?: string;
    child: Territories[];
}

interface TerritoriesData {
    data: Territories[];
}

export const useTerritories = defineStore("territories", {
    state: (): TerritoriesData => ({
        data: [],
    }),
    actions: {
        getTerritories() {
            return new Promise((resolve, reject) => {
                api.get("/territories")
                    .then((result) => {
                        this.data = result.data.data;
                        resolve(result.data);
                    })
                    .catch((error) => {
                        reject(error.response);
                    });
            });
        },
    },
    getters: {
        filterTerritories: (state) => {
            const territories: Territories[] = [];
            state.data.map((oData, iIndex) => {
                territories.push({ ...oData });
                territories[iIndex].child = [];
                state.data.map((place) => {
                    if (place.parent === oData.parent) {
                        territories[iIndex]["child"].push(place);
                    }
                });
            });
            return territories;
        },
    },
});
