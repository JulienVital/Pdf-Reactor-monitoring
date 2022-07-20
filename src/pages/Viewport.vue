<template>
    <Navbar />
    <div class="router-view">
        <div class="wrapper">
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue';


</script>

<style scoped>
.router-view{
float: right; 
position: relative;
width: calc(100% - 75px);
min-height: 100%;
}
.wrapper {
    display: flex;
    margin: 0 auto;
    justify-content: center
}

</style>