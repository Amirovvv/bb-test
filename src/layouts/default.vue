<script setup lang="ts">
import Navbar from '@/components/TheNavbar.vue'
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
