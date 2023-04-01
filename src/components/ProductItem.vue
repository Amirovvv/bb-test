<script setup lang="ts">
import { computed, PropType } from 'vue'
import { ProductItemType } from '@/types/types'
import { useProductStore } from '@/stores/products.store'
import { useRoute } from 'vue-router'
import LocationIcon from '@/components/icons/LocationIcon.vue'
import AppButton from './ui/AppButton.vue'
import FavoriteIcon from './icons/FavoriteIcon.vue'

const store = useProductStore()
const route = useRoute()

const props = defineProps({
  productItem: {
    type: Object as PropType<ProductItemType>,
    required: true,
  },
})

const addToFavorites = (): void => {
  store.addToFavorites(props.productItem)
}

const addToDeals = (): void => {
  store.addToDeals(props.productItem)
}

const payTheProduct = (): void => {
  store.payTheProduct(props.productItem)
}

const checkFavorite = computed(() => {
  return (
    store.favorites.length &&
    store.favorites.some((item) => item.id == props.productItem.id)
  )
})

const checkDeals = computed(() => {
  return (
    store.deals.length &&
    store.deals.some((item) => item.id == props.productItem.id) &&
    route.name === 'Deals'
  )
})
</script>

<template>
  <div class="product-item">
    <div class="product-item__info">
      <div class="product-item__info-image">
        <img :src="productItem.image" alt="Продукт" />
      </div>
      <div class="product-item__content">
        <div class="product-item__content-selling">
          <span>{{ productItem.selling }}</span>
        </div>
        <div class="product-item__content-name">{{ productItem.name }}</div>
        <div class="product-item__content-location">
          <LocationIcon />
          {{ productItem.location }}
        </div>
        <div class="product-item__content-salesman">
          <span>Продавец</span> {{ productItem.salesman }}
        </div>
        <div class="product-item__content-type">
          <span>Вид товара</span>{{ productItem.type }}
        </div>
        <div class="product-item__content-desc">
          {{ productItem.description }}
        </div>
      </div>
    </div>
    <div class="product-item__sell">
      <div class="product-item__prices">
        <div class="product-item__prices-price">
          {{ productItem.price.toLocaleString() }} ₽
        </div>
        <div class="product-item__prices-quantity">
          <span>Количество</span>{{ productItem.quantity.toLocaleString() }} шт.
        </div>
        <div class="product-item__prices-one">
          <span>Стоимость за штуку</span
          >{{ productItem.priceOne.toLocaleString() }} ₽
        </div>
      </div>
      <div class="product-item__btns">
        <AppButton v-if="!checkDeals" type="primary" @onClick="addToDeals()">
          Добавить в сделки
        </AppButton>
        <AppButton
          v-else
          type="success"
          :disabled="productItem.isPaid"
          @onClick="payTheProduct()"
        >
          {{ productItem.isPaid ? 'Оплачено' : 'Оплатить' }}
        </AppButton>
        <AppButton
          :type="checkFavorite ? 'favorite' : 'primary'"
          size="small"
          @onClick="addToFavorites()"
        >
          <FavoriteIcon />
        </AppButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-item {
  border: 1px solid $platinum;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  max-width: 1166px;
  width: 100%;

  span {
    font-size: 13px;
    color: $manatee;
  }

  &__info {
    display: flex;
    padding: 20px;
    gap: 20px;
    padding-bottom: 86px;
    width: 100%;
    max-width: 852px;

    &-image img {
      width: 256px;
      height: 256px;
      border-radius: 10px;
    }
  }

  &__content {
    &-selling {
      margin-bottom: 16px;
    }
    &-name {
      font-weight: 500;
      font-size: 15px;
      margin-bottom: 28px;
    }
    &-location {
      background: $white-gray;
      border-radius: 5px;
      padding: 4px 8px;
      font-size: 13px;
      display: flex;
      align-items: center;
      gap: 6px;
      width: fit-content;
      margin-bottom: 12px;
    }
    &-salesman {
      font-size: 13px;
      display: flex;
      gap: 4px;
      margin-bottom: 12px;
    }
    &-type {
      display: flex;
      flex-direction: column;
      font-size: 13px;
      background: $white-gray;
      border-radius: 10px;
      padding: 8px;
      width: fit-content;
      margin-bottom: 12px;
    }
    &-desc {
      line-height: 150%;
      font-size: 13px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  &__sell {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    width: 100%;
    max-width: 314px;
    border-left: 1px solid $platinum;
    border-radius: 20px;
  }

  &__prices {
    &-price {
      font-weight: 500;
      font-size: 20px;
    }
    &-quantity {
      margin-top: 13.5px;
      margin-bottom: 11px;
    }
    &-quantity,
    &-one {
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__btns {
    display: flex;
    gap: 12px;
  }
}

@media (max-width: 920px) {
  .product-item {
    flex-direction: column;
    &__info {
      flex-direction: column;
      padding-bottom: 0;
      &-image {
        text-align: center;
      }
    }
    &__sell {
      gap: 10px;
      border-left: none;
      border-top: 1px solid $platinum;
      max-width: 100%;
      margin-top: 20px;
    }
  }
}
</style>
