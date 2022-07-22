<template>
    <div class="large-card">
        <refresh :lastUpdate="historyStore.lastUpdate" :refresh="saveTest" />
        <h1>History</h1>
        <h2>{{ documents.length}} documents</h2>
        <form id="search">
            Search <input name="query" v-model="searchQuery">
        </form>
        <Grid :data="documents" :columns="gridColumns" :filter-key="searchQuery" />
    </div>
</template>

<script setup>
import { useHistoryStore } from '@/store/historyStore';
import refresh from '@/components/Refresh.vue';
import Pdf from '@/components/Icons/Pdf.vue';
import Cell from '@/components/Cell.vue';

import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import { useConfigStore } from '@/store/configStore.js';
import Grid from '@/components/Grid.vue'

const searchQuery = ref('')
const gridColumns = [
    {
        'value': (object) => {
            return object.conversionName;
        },
        'nameToDisplay': 'Conversion Name'
    },
    {
        'value': (object) => (object.numberOfPages),
        'nameToDisplay': 'Number of Pages' 
    },
    {
        'value': (object) => {
            const date = new Date(object.endDate);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()+ ' ' + date.getHours() + ':' + date.getMinutes();
        },
        'nameToDisplay': 'Date'
    },
    // {
    //     'value': (object) => {
    //         if (object.error === undefined) {
    //             return `<i class="fa-solid fa-check"></i>`
    //         }
    //         return `<i class="fa-solid fa-triangle-exclamation"></i>`
    //     },
    //     'nameToDisplay': 'Success'
    // },
    // {
    //     'value': (object) => {
    //         return <Pdf/>;
    //         //  `
    //         // <i class='fa-solid fa-download'></i> 
    //         // <i class="fa-solid fa-circle-info"></i>
    //         // <i class="fa-solid fa-file-pdf"></i> `
    //     },
    //     'nameToDisplay': 'Action'
    // }

]

const config = useConfigStore();
const historyStore = useHistoryStore();

let { documents } = storeToRefs(historyStore);

// const store = useStore();
onMounted(() => {
    historyStore.getInfos();
});

const saveTest = () => {

    // console.log(localStorage.test);
    // historyStore.documents = JSON.parse(localStorage.test);
};

// historyStore.$subscribe((mutation, state) => {
//     // import { MutationType } from 'pinia'
//      // patch object passed to cartStore.$patch()
//     console.log('*******************************mutation');
//     console.log(mutation);
//     console.log('*******************************state');
//     console.log(state);
//     // persist the whole state to the local storage whenever it changes
//     // localStorage.setItem('cart', JSON.stringify(state))
// })
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');

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
    width:auto;
    margin:20px;
    padding:1rem;
}
</style>