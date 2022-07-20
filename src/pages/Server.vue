<template>

        <div v-if="state" class="large-card">
            <refresh :lastUpdate="infoServer.lastUpdate" :refresh="infoServer.refreshInfos" />
            <h2>Parameters</h2>
            <ul>
                <li v-for="item in parameters" :key="item.name">
                    <b>{{ item.name }}</b> : <span style="color:red;">{{ item.value }}</span>
                </li>
            </ul>
        </div>

        <div v-if="state" class="large-card">
            <h2>Environnement Var</h2>
            <ul>
                <li v-for="item in serverInfo.environmentVariables" :key="item">
                    {{ item }}
                </li>
            </ul>
        </div>
</template>

<script setup>
import { useinfoServerStore } from '@/store/infoServerStore';
import refresh from '@/components/Refresh.vue';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue'
const infoServer = useinfoServerStore();

const { date, id, name, parameters, plugins, serverInfo, state, version } = storeToRefs(infoServer);

onMounted(() => {
    infoServer.getInfos();
});

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
    width:400px;
    margin:20px;
    padding:1rem;
}
</style>