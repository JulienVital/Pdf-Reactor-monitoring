<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
  <viewport />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');
body {
  background-color: #f8f9fe;
  margin:0;
  padding:0;
  font-family: 'Nunito Sans', sans-serif;
}
a {
  color :rgb(172, 72, 15);
}
 a:hover{
  color :rgb(92, 37, 5);
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