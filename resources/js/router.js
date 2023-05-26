import { createRouter, createWebHistory } from "vue-router";
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
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
