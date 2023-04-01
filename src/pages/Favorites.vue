<script setup lang="ts">
import { onMounted } from 'vue'
import { useProductStore } from '@/stores/products.store'
import { useFilter } from '@/composables/useFilteredProducts'
import ProductFilters from '@/components/ProductFilters.vue'
import ProductList from '@/components/ProductList.vue'
import IsLoader from '@/components/IsLoader.vue'

const store = useProductStore()

const { data, filteredData, handleFilter, handleSearch } = useFilter()

onMounted(() => {
  store.changeLoading()
  data.value = store.favorites
})
</script>

<template>
  <div class="favorites">
    <ProductFilters @activeFilter="handleFilter" @searchText="handleSearch" />
    <IsLoader :is-loading="store.isLodaing">
      <ProductList :product-data="filteredData"
    /></IsLoader>
  </div>
</template>
