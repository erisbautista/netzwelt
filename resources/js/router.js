import { createRouter, createWebHistory } from "vue-router";
import { useUsers } from "./store/user";
import Login from "./components/Login.vue";
import Home from "./components/Home.vue";

export const routes = [
    {
        path: "/account/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/",
        name: "Home",
        component: Home,
        beforeEnter: async (to, from, next) => {
            const usersStore = useUsers();
            let authenticated = false;
            await usersStore.checkUser().then((result) => {
                authenticated = result;
            });
            if (authenticated === false) {
                next("/account/login");
            } else {
                next();
            }
        },
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
