<script lang="ts">
export default {
    name: "TerritoriesVue",
};
</script>
<script lang="ts" setup>
import { Territories } from "../store/territories";

const props = defineProps<{
    filterTerritories: Territories[];
}>();

function getChild(territories) {}
</script>

<template>
    <template v-for="territories in filterTerritories" :key="territories.id">
        <div class="territories__parent" @click="getChild(territories)">
            <i
                v-if="territories.child.length !== 0"
                class="fas fa-play territories__parent-icon"
            ></i>
            <h4 class="territories__parent-name">{{ territories.name }}</h4>
        </div>
        <div class="territories__child" v-if="territories.child.length !== 0">
            <TerritoriesVue
                :filter-territories="territories.child"
            ></TerritoriesVue>
        </div>
    </template>
</template>
