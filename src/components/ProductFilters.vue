<script setup lang="ts">
import { onMounted, Ref, ref, watch } from 'vue'
import { filterItemType } from '@/types/types'
import { useProductStore } from '@/stores/products.store'
import { useDebounce } from '@/composables/useDebounce'
import { RouteRecordName, useRoute } from 'vue-router'
import AppInput from './ui/AppInput.vue'
import SearchIcon from './icons/SearchIcon.vue'

const store = useProductStore()
const route = useRoute()

const emits = defineEmits(['activeFilter', 'searchText'])

const filterTypes: filterItemType[] = [
  {
    id: 0,
    name: 'Все типы',
    param: '',
  },
  {
    id: 1,
    name: 'Прямые продажи',
    param: 'Разовая продажа',
  },
  {
    id: 2,
    name: 'Аукцион',
    param: 'Аукцион',
  },
]

const activeFilter: Ref<string> = ref('')
const searchQuery: Ref<string> = ref('')
const routeName: RouteRecordName = (route.name as string) || ''

// const storage = new LocalStorageService('activeFilter')

const activatedFilter = (param: string): void => {
  store.changeLoading()
  emits('activeFilter', param)
  activeFilter.value = param
  localStorage.setItem(routeName, activeFilter.value)
}

watch(
  searchQuery,
  useDebounce((value: string) => {
    store.changeLoading()
    emits('searchText', value)
  }, 500),
)

onMounted(() => {
  // if (storage.getData()) {
  //   activeFilter.value = storage.getData<{ [key: string]: any }>()[
  //     route.name as string
  //   ]
  //   console.log(storage.getData())
  // }
  activeFilter.value = localStorage.getItem(routeName) || ''
})
</script>

<template>
  <div class="product-filters">
    <div class="filters">
      <div
        v-for="filterType in filterTypes"
        :key="filterType.id"
        class="filters-item"
        :class="{ 'active-filter': activeFilter === filterType.param }"
        @click="activatedFilter(filterType.param)"
      >
        {{ filterType.name }}
      </div>
    </div>

    <AppInput :btn-icon="true" btn-placeholder="Поиск" v-model="searchQuery">
      <template v-slot:icon>
        <SearchIcon v-model="searchQuery" />
      </template>
    </AppInput>
  </div>
</template>

<style scoped lang="scss">
.product-filters {
  display: flex;
  justify-content: space-between;
  margin-bottom: 44px;
}
.filters {
  width: fit-content;
  display: flex;
  padding: 12px 12px 13px 12px;
  background: $white-gray;
  gap: 12px;
  color: $manatee;
  border-radius: 10px;
  border: 1px solid $platinum;
  align-items: center;

  &-item {
    cursor: pointer;
  }
}

.active-filter {
  color: $primary;
}

@media (max-width: 768px) {
  .product-filters {
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }
}
</style>
