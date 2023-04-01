<script setup lang="ts">
import { NavItemType } from '@/types/types'
import FavoriteIcon from '@/components/icons/FavoriteIcon.vue'
import StockIcon from '@/components/icons/StockIcon.vue'
import BagIcon from '@/components/icons/BagIcon.vue'
import NavList from './NavList.vue'

const navListData: NavItemType[] = [
  {
    id: 0,
    title: 'Избранное',
    url: 'Favorites',
    icon: FavoriteIcon,
  },
  {
    id: 1,
    title: 'Склад',
    url: 'Warehouses',
    icon: StockIcon,
  },
  {
    id: 2,
    title: 'Сделки',
    url: 'Deals',
    icon: BagIcon,
  },
]
</script>

<template>
  <div class="navbar">
    <NavList :nav-list="navListData" />
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 480px) {
  .navbar {
    justify-content: center;
  }
}
</style>
