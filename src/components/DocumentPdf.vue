<template>
    <!-- <li>{{ documentPdf.conversionName }}</li> -->
    <li>aa</li>
</template>

<script setup>
import { useConfigStore } from "@/store/configStore";
import axios from "axios";

const config = useConfigStore();

const { onMounted, ref }=require("@vue/runtime-core");

const props = defineProps({
    documentPdf: Object
});




</script>

<style>

</style>