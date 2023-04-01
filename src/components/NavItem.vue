<script setup lang="ts">
import { PropType } from 'vue'
import { NavItemType } from '@/types/types'

const props = defineProps({
  navItem: {
    type: Object as PropType<NavItemType>,
    required: true,
  },
})
</script>

<template>
  <RouterLink :to="{ name: navItem.url }" v-slot="{ isActive }">
    <div class="nav-item" :class="isActive ? 'active-link' : ''">
      <div class="nav-item__icon">
        <Component :is="navItem.icon" />
      </div>
      <div>{{ navItem.title }}</div>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.nav-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 86px;
  height: 50px;
  font-weight: 500;
  font-size: 13px;
  border-radius: 10px;
}

.active-link {
  background: $white-gray;
}
</style>
