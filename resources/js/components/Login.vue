<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useUsers } from "../store/user";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
const $toast = useToast();

const userStore = useUsers();
const username = ref("");
const password = ref("");

function handleLogin() {
    userStore
        .loginUser({ username: username.value, password: password.value })
        .then((result) => {
            if (result.status === 404) {
                $toast.open({
                    message: result.data.message,
                    type: "error",
                    position: "top-right",
                });
            }
        })
        .catch((error) => {
            console.log(error);
        });
}
</script>

<template>
    <div class="login">
        <form @submit.prevent="handleLogin" class="form">
            <div class="form__username">
                <label class="form__label" for="username">Username</label>
                <input
                    type="text"
                    class="form__input"
                    id="username"
                    placeholder="Username"
                    v-model="username"
                />
            </div>
            <div class="form__password">
                <label class="form__label" for="password">Password</label>
                <input
                    type="password"
                    class="form__input"
                    id="password"
                    placeholder="Password"
                    v-model="password"
                />
            </div>
            <button type="submit" class="form__button">button</button>
        </form>
    </div>
</template>
