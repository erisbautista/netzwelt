import { defineStore } from "pinia";
import { useApi } from "../api/adapter";

const api = useApi();

interface UsersState {
    username: String;
    password: String;
}

export const useUsers = defineStore("users", {
    state: (): UsersState => ({
        username: "",
        password: "",
    }),
    actions: {
        loginUser(User: UsersState) {
            return new Promise((resolve, reject) => {
                api.post("/login", User)
                    .then((result) => {
                        resolve(result.data);
                    })
                    .catch((error) => {
                        reject(error.response);
                    });
            });
        },
        getTerritories() {
            return new Promise((resolve, reject) => {
                api.get("/territories")
                    .then((result) => {
                        resolve(result.data);
                    })
                    .catch((error) => {
                        reject(error.response);
                    });
            });
        },
    },
});
