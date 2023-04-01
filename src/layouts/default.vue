<script setup lang="ts">
import Navbar from '@/components/TheNavbar.vue'
import { useProductStore } from '@/stores/products.store'
import { onMounted } from 'vue'

const store = useProductStore()

onMounted(() => {
  store.getLocalData()
})
</script>

<template>
  <div class="layout">
    <Navbar />
    <div class="main">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.main {
  padding: 77px 0;
}
</style>
