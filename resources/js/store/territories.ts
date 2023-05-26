import { defineStore } from "pinia";
import { useApi } from "../api/adapter";

const api = useApi();

export interface Territories {
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
        territoriesWithChild: (state) => {
            const territoriesWithChild: Territories[] = [];
            state.data.map((oData, iIndex) => {
                territoriesWithChild.push({ ...oData });
                territoriesWithChild[iIndex].child = [];
                state.data.map((place) => {
                    if (place.parent === oData.id) {
                        place.child = [];
                        territoriesWithChild[iIndex].child.push(place);
                    }
                });
            });
            return territoriesWithChild;
        },
        filterTerritories: (state) => {
            const territories: Territories[] = [];
            state.data.map((oData) => {
                if (oData.parent === null) {
                    oData.child = [];
                    territories.push({ ...oData });
                }
            });
            return territories;
        },
    },
});
