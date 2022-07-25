<template>

    <nav @mouseover="hover = true" @mouseleave="hover = false" :class="{ active: hover }">
        <router-link to="/">
            <i class="fa-solid fa-house-chimney" />
            <span :class="{ show: hover }"> Home page</span>
        </router-link>
        <router-link to="/tracking">
            <i class="fa-solid fa-chart-line" />
            <span :class="{ show: hover }">Tracking </span>
        </router-link>
        <router-link to="/history">
            <i class="fa-solid fa-clock-rotate-left"/>
            <span :class="{ show: hover }">History </span>
        </router-link>
        <router-link to="/server">
            <i class="fa-solid fa-server" />
            <span :class="{ show: hover }">Server </span>
        </router-link>
        <router-link to="/config">
            <i class="fa-solid fa-wrench" />
            <span :class="{ show: hover }">Config </span>
        </router-link>
    </nav>

</template>
<script setup>
import { ref } from 'vue'

let hover = ref(false);

</script>

<style scoped>

nav {
    overflow: hidden;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    transition: all 500ms;
    width: 4rem;
    height: 100vh;
    z-index: 2;
    box-shadow: 0 0 2rem 0 rgb(136 152 170 / 15%);
    align-items: baseline;
    padding-top: 10%;
    padding-left:1rem;
}

.active {
    width: 230px;
}
span {
    white-space: nowrap;
    margin-left:1rem;
    opacity: 0;
}
.show{   
    opacity: 1;
    transition: opacity 1s linear;
}

a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #999;
    padding: 0.5rem;
    font-size: 1.5rem;
    line-height: 1.5rem;
    transition: all 300ms;
}

a:hover, .router-link-active, .router-link-exact-active{
    color: rgb(172, 72, 15);
}
</style>