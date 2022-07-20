<template>
    <article class="card">
        <!-- <i class="fa-regular fa-ban-bug" /> -->
        <i :class="icon" />
        <div class="content">
            <h4>{{ title }}</h4>
            <span class="counter">{{counter}}</span>
        </div>
        <span class="refresh">
            <refresh :lastUpdate="'2 min'" :refresh="()=>{}" />
        </span>
    </article>
</template>

<script setup>
import refresh from '@/components/Refresh.vue';
import { computed } from '@vue/runtime-core';
const props = defineProps({
    icon: String,
    title: String,
    counter: Number,
    color: String,
});


</script>

<style scoped>

i{
    margin-top: -2rem;
    padding: 0.5rem;
    font-size: 2rem;
    background: linear-gradient(60deg, v-bind(color), #CCC);
    color: #FFF;
    border-radius: 3px;
    background-color: #999;
    padding: 15px;
    float: left;
    box-shadow: 0 12px 20px -10px v-bind(color), 0 4px 20px 0 rgb(161 0 0 / 12%), 0 7px 8px -5px rgb(117 8 8 / 20%);
}

h4{
    font-weight:lighter;
    margin:0;
}
.counter{
    font-weight:bold;
    margin:0;
}

article{
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
    width: 200px;
    margin: 20px;
    padding: 10px 10px 5px 10px;
}
.content {
    text-align: right;
}
.refresh {
    border-top: solid 1px;
    display: block;
    padding-top: 5px;
    margin-top: 12px;
}
h1{
    margin: 0;
}
</style>
