<script setup lang="ts">
import { onMounted } from "vue";
import { useTerritories } from "../store/territories";

const territoriesStore = useTerritories();

onMounted(() => {
    territoriesStore.getTerritories();
});
</script>

<template>
    <div class="territories">
        <h1>Territories</h1>
        <h3>Here are the list of territories</h3>
        <div
            class="territories__data"
            v-for="territories in territoriesStore.data"
        >
            <p>{{ territories.name }}</p>
        </div>
    </div>
</template>
