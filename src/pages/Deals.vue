<script setup lang="ts">
import { useProductStore } from '@/stores/products.store'
import ProductFilters from '@/components/ProductFilters.vue'
import ProductList from '@/components/ProductList.vue'
import IsLoader from '@/components/IsLoader.vue'
import { useFilter } from '@/composables/useFilteredProducts'
import { onMounted } from 'vue'

const store = useProductStore()

const { data, filteredData, handleFilter, handleSearch } = useFilter()

onMounted(() => {
  store.changeLoading()
  data.value = store.deals
})
</script>

<template>
  <div class="deals">
    <ProductFilters @activeFilter="handleFilter" @searchText="handleSearch" />
    <IsLoader :is-loading="store.isLodaing">
      <ProductList :product-data="filteredData"
    /></IsLoader>
  </div>
</template>
