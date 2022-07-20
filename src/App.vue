<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
  <viewport />
</template>

<style>
body {
  background-color: #f8f9fe;
  margin:0;
  padding:0;
  font-family: 'Nunito Sans', sans-serif;
}
</style>

<script>
import viewport from './pages/Viewport.vue'
export default {
  name: 'app',
  components: {
    viewport
  }
}

</script>