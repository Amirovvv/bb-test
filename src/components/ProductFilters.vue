<script setup lang="ts">
import { filterItemType } from '@/types/types'
import AppInput from './ui/AppInput.vue'
import SearchIcon from './icons/SearchIcon.vue'

const filterTypes: filterItemType[] = [
  {
    id: 0,
    name: 'Все типы',
    param: '',
  },
  {
    id: 1,
    name: 'Прямые продажи',
    param: 'Прямые продажи',
  },
  {
    id: 2,
    name: 'Аукцион',
    param: 'Аукцион',
  },
]
</script>

<template>
  <div class="product-filters">
    <div class="filters">
      <div
        v-for="filterType in filterTypes"
        :key="filterType.id"
        class="filters-item"
      >
        {{ filterType.name }}
      </div>
    </div>

    <AppInput :btn-icon="true" btn-placeholder="Поиск">
      <template v-slot:icon>
        <SearchIcon />
      </template>
    </AppInput>
  </div>
</template>

<style scoped lang="scss">
.product-filters {
  display: flex;
  justify-content: space-between;
}
.filters {
  width: fit-content;
  display: flex;
  padding: 12px 12px 13px 12px;
  background: $gray;
  gap: 12px;
  border-radius: 10px;
  border: 1px solid $gray-dark;
  align-items: flex-end;
}
</style>
