<template>
  <card :icon="'fa-solid fa-triangle-exclamation'" :title="'Error'" :counter="value.failedConversions"
    :color="'#da2647'" />
  <card :icon="'fa-solid fa-check'" :title="'Finished'" :counter="value.finishedConversions" :color="'#20a330'" />

</template>

<script setup>
import { ref , onMounted} from 'vue'
import axios from "axios";
import refresh from '@/components/Refresh.vue';
import card from '@/components/Card.vue';
import { useConfigStore } from '@/store/configStore.js';
const config = useConfigStore();
let value = ref({});
const getStatus = async function() {
  const data = await axios.get(
    config.pdfreactorWebservice+"/service/monitor/conversions?adminKey="+config.apikey
  );
  return  data.data;
};
onMounted(async () => {
  value.value =  await getStatus();
});
</script>
<style scoped>
.wrapper {
  display: flex;
  margin: 0 auto;
  justify-content: center;
}

.large-card {
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
</style>