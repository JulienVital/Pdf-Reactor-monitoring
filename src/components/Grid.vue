<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  data: Array,
  columns: Object,
  filterKey: String
})

const sortKey = ref('')
const sortOrders = ref(
  props.columns.reduce((o, key) => ((o[key.value] = 1), o), {})
)

const filteredData = computed(() => {
  let { data, filterKey } = props
  if (filterKey) {
    filterKey = filterKey.toLowerCase()
    data = data.filter((row) => {
      return Object.keys(row).some((key) => {
        return String(row[key]).toLowerCase().indexOf(filterKey) > -1
      })
    })
  }
  const key = sortKey.value
  if (key) {
    const order = sortOrders.value[key.value]
    data = data.slice().sort((a, b) => {
      a = key.value(a)
      b = key.value(b)
      return (a === b ? 0 : a > b ? 1 : -1) * order
    })
  }
  return data
})

function sortBy(key) {
  sortKey.value = key
  sortOrders.value[key.value] *= -1
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
</script>

<template>
  <table v-if="filteredData.length">
    <thead>
      <tr>
        <th v-for="key in columns" @click="sortBy(key)" :class="{ active: sortKey == key }">
          {{ capitalize(key.nameToDisplay) }}
          <span class="arrow" :class="sortOrders[key.nameToDisplay] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
        <th>Success</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in filteredData">
        <td v-for="key in columns">
          {{key.value(entry)}}
        </td>
        <td>
          <i v-if="entry.error== undefined" class="fa-solid fa-check"></i>
          <i v-else class="fa-solid fa-triangle-exclamation"></i>
        </td>
        <td>
          <router-link class="event-link" :to="{ name: 'HystoryDetails', params: { id: entry.documentId } }">
            <i class="fa-solid fa-info-circle"></i>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
  <p v-else>No matches found.</p>
</template>

<style>
table {
    border: 2px solid rgb(172, 72, 15);
    border-radius: 3px;
    background-color: #fff;
}

th {
    background-color: rgb(172, 72, 15);
    color: rgba(255, 255, 255, 0.66);
    cursor: pointer;
    user-select: none;
}

td {
    background-color: #f9f9f9;
}

th,
td {
    min-width: 120px;
    padding: 10px 20px;
}

th.active {
    color: #fff;
}

th.active .arrow {
    opacity: 1;
}

.arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
}

.arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #fff;
}

.arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
}
</style>