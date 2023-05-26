import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "./router";
import ToastPlugin from "vue-toast-notification";
import App from "./App.vue";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(ToastPlugin);
app.mount("#app");
