<template>
    <div class="wrapper-history">
        <a href="#" @click="$router.back()"><i class="fa-solid fa-angles-left" /> Return</a>
        <div class="large-card" v-if="document">
            <h2>{{document.conversionName}}</h2>
            <p>Id : {{document.documentId}}</p>
            <p v-if="document.error" class="error">Error : {{document.error}}</p>
            <p>Type : {{document.contentType}}</p>
            <p>Time to render : {{timeElapse}}seconds</p>
            <p>Pages :{{document.numberOfPagesLiteral}}</p>
            <p>At {{ fullDate }}</p>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount, computed } from 'vue';
import { useHistoryStore } from '@/store/historyStore';
import { useConfigStore } from '@/store/configStore.js';
const historyStore = useHistoryStore();
const config = useConfigStore();
onBeforeMount(() => {
    config.getConfig();
    historyStore.getInfos();

});
const timeElapse = computed(() => {
    return (document.value.endDate - document.value.startDate) / 1000 
}
);
const document = computed(() => {
    return historyStore.getDocumentByid(props.id)
});

const fullDate = computed(() => {
    const date = new Date(document.value.startDate);
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
});
const props = defineProps({
    id: String,

});
</script>

<style scoped>
.wrapper-history{
    margin: 30px auto;
    display: flex;
    flex-direction: column;
}
.large-card{
    font-family: 'Nunito Sans', sans-serif;
    background: #FFF;
    overflow: unset;
    word-wrap: break-word;
    color:#999;
    flex-direction: column;
    position: relative;
    font-size: .875rem;
    box-shadow: 0 0 2rem 0 rgb(136 152 170 / 15%);
    border-radius: 6px;
    background: #fff;
    /* width:590px; */
    padding:1rem;
    margin-top:10px;
    position: relative;
}
.error{
    color: #fff;
    border-color: #f75676;
    background-color: #f75676;
    position: relative;
    padding: 1rem 1.5rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.375rem;}
</style>