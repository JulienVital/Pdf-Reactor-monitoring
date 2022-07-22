<template>
    <div>
        <p>{{document.documentId}}</p>
        <p>{{document.contentType}}</p>
        <p>{{document.conversionName}}</p>
        <p>{{document.endDate}}</p>
        <p>{{document.error}}</p>
        <p>{{document.keepDocument}}</p>
        <p>{{document.numberOfPages}}</p>
        <p>{{document.numberOfPagesLiteral}}</p>
        <p>{{document.startDate}}</p>
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useHistoryStore } from '@/store/historyStore';
const historyStore = useHistoryStore();

onMounted(() => {

});
const document = computed(() => {
    return historyStore.getDocumentByid(props.id)
});
const props = defineProps({
    id: String,

});
</script>
