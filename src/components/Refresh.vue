<template>
    <i class="fa-regular fa-clock" />
    {{ lastUpdate }}
    <a href="#" @click="refresh"><i class="fa-solid fa-arrows-rotate" /> Refresh </a>
</template>

<script setup >
import { LastUpdate } from "@/services/LastUpdate";
import { ref } from "vue";
const props = defineProps({
    lastUpdate: String,
    refresh: Function
});
</script>

<style>

</style>