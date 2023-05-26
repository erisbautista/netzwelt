<script lang="ts">
export default {
    name: "Home",
};
</script>
<script setup lang="ts">
import { onMounted } from "vue";
import { useTerritories, Territories } from "../store/territories";
import TerritoriesVue from "./Territories.vue";
import { ref } from "vue";

const territoriesStore = useTerritories();
const places = ref<Territories[]>([]);

onMounted(async () => {
    await territoriesStore.getTerritories();
    places.value = territoriesStore.filterTerritories;
    places.value.map((oPlace) => {
        getChild(oPlace);
    });
});

function getChild(territories: Territories) {
    const child: Territories[] = [];
    territoriesStore.territoriesWithChild.map((oData, iIndex) => {
        if (territories.id === oData.parent) {
            child.push(oData);
            territories.child = child;
        }
    });
}
</script>

<template>
    <div class="territories">
        <h1>Territories</h1>
        <h3>Here are the list of territories</h3>
        <div class="territory">
            <TerritoriesVue
                v-for="territories in places"
                :name="territories.name"
                :key="territories.id"
                :has-child="territories.child.length !== 0"
                :filter-territories="territories.child"
            ></TerritoriesVue>
        </div>
    </div>
</template>
