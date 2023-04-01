<script setup lang="ts">
import { PropType } from 'vue'
import { ProductItemType } from '@/types/types'
import ProductItem from './ProductItem.vue'

const props = defineProps({
  productData: {
    type: Object as PropType<ProductItemType[]>,
    required: true,
  },
})
</script>

<template>
  <div class="product-list">
    <ProductItem
      v-for="product in productData"
      :key="product.id"
      :product-item="product"
    />
    <div class="product-list__empty" v-if="!productData.length">
      Ничего не найдено
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  &__empty {
    text-align: center;
    margin-top: 24px;
  }
}
</style>
