<script setup lang="ts">
import NavItem from './NavItem.vue'
import { PropType } from 'vue'
import { NavItemType } from '@/types/types'

const props = defineProps({
  navList: {
    type: Object as PropType<NavItemType[]>,
    required: true,
  },
})
</script>

<template>
  <div class="nav-list">
    <NavItem v-for="navItem in navList" :key="navItem.id" :nav-item="navItem" />
  </div>
</template>

<style scoped>
.nav-list {
  display: flex;
}
</style>
