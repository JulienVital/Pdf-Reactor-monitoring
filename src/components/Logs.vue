<template>

    <div class="large-card">
        <h2>Logs records</h2>
        <input type="checkbox" id="info" v-model="filter.info">
        <label for="info">Info</label>

        <input type="checkbox" id="finer" v-model="filter.finer">
        <label for="finer">Finer</label>

        <input type="checkbox" id="finest" v-model="filter.finest">
        <label for="finest">Finest</label>
        <h3>Order </h3>
        <input type="radio" id="Asc" value="Asc" v-model="picked" />
        <label for="Asc">Asc</label>

        <input type="radio" id="Desc" value="Desc" v-model="picked" />
        <label for="Desc">Desc</label>
        <!-- <input type="checkbox" id="checkbox" v-model="filter"> -->

        <div class="log" v-for="log in logs.records" :key="log.timestamp">
            <h3>level {{log.level}}</h3>
            <p>level name {{log.levelName}}</p>
            <p>message : {{log.message}}</p>
            <p>timestamp {{log.timestamp}}</p>
        </div>
    </div>

</template>

<script setup>
import { onBeforeMount, computed, ref } from 'vue';
import { useHistoryStore } from '@/store/historyStore';
import { useConfigStore } from '@/store/configStore.js';

const filter = ref({
    info:true,
    finer:true,
    finest:true,
    });
const picked = ref('Asc');
const props = defineProps({
    logs: Object,
});
</script>

<style scoped>

.log{
    max-width:800px;
    white-space: pre-wrap;

}
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
    border-radius: 0.375rem;
}
</style>