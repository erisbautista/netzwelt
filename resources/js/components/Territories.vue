<script lang="ts">
export default {
    name: "TerritoriesVue",
};
</script>
<script lang="ts" setup>
import { ref } from "vue";
import { Territories } from "../store/territories";

const isExpanded = ref(false);
const props = defineProps<{
    filterTerritories: Territories[];
    name: string;
    hasChild: boolean;
}>();

function expandChildren() {
    console.log("triggered");
    isExpanded.value = !isExpanded.value;
}
</script>

<template>
    <div class="territories__parent" @click="expandChildren">
        <i v-if="hasChild" class="fas fa-play territories__parent-icon"></i>
        <h4 class="territories__parent-name">
            {{ name }}
        </h4>
    </div>
    <div class="territories__child">
        <TerritoriesVue
            v-if="isExpanded"
            v-for="territories in filterTerritories"
            :name="territories.name"
            :key="territories.id"
            :has-child="territories.child.length !== 0"
            :filter-territories="territories.child"
        ></TerritoriesVue>
    </div>
</template>
