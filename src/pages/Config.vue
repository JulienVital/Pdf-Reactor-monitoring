<template>
    <form class="review-form" @submit.prevent="submit">
        <h3>Configuration</h3>
        <label for="apikey">
            Api key:
            <input v-model="apikey" id="apikey">
        </label>


        <label for="pdfreactorWebservice">
            pdfreactorWebservice:
            <input v-model="pdfreactorWebservice" id="pdfreactorWebservice">
        </label>

        <label for="pdfReactorLogService">
            pdfReactorLogService:
            <input v-model="pdfReactorLogService" id="pdfReactorLogService">
        </label>


        <input class="button" type="submit" value="Save">
    </form>
</template>

<script setup>

import { storeToRefs } from 'pinia';

import { onMounted } from 'vue'
import { useConfigStore } from '@/store/configStore.js';
const config = useConfigStore();
const { pdfReactorLogService, pdfreactorWebservice, apikey } = storeToRefs(config);

const submit = () => {
    config.saveConfigInlocalStorage({
        pdfReactorLogService: pdfReactorLogService.value,
        pdfreactorWebservice: pdfreactorWebservice.value,
        apikey: apikey.value
    });
}
onMounted(() => {
    config.getConfig();
});
</script>

<style scoped>
form{
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    padding: 0;
}

.button {
    width : 250px;
}

.review-form{
    font-family: 'Nunito Sans', sans-serif;
    background: #FFF;
    overflow: unset;
    word-wrap: break-word;
    color: #999;
    flex-direction: column;
    position: relative;
    font-size: .875rem;
    box-shadow: 0 0 2rem 0 rgb(136 152 170 / 15%);
    border-radius: 6px;
    background: #fff;
    width: 400px;
    margin: 20px;
    padding: 1rem;
}

label {
    margin-bottom: 1rem;;
}
</style>