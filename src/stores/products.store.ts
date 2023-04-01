import { defineStore } from "pinia";
import { apiInstance } from '@/api/api'
import { ProductItemType } from "@/types/types";

export const useProductStore = defineStore('products', {
  state: () => ({
    data: [] as ProductItemType[],
    favorites: [] as ProductItemType[],
    deals: [] as ProductItemType[],
    searchQuery: '',
    activeFilter: '',
    isLodaing: false
  }),
  actions: {
    async fetchProducts() {
      try {
        this.isLodaing = true
        const response = await apiInstance.get('products.json')
        this.data = response.data
        this.isLodaing = false
        return response
      } catch (err) {
        console.error(err)
        throw new Error('Failed to fetch products')
      }
    },
    async addToFavorites(data: ProductItemType) {
      const index = this.favorites.findIndex((item) => item.id === data.id);

      if (index > -1) {
        this.favorites.splice(index, 1);
      } else {
        this.favorites.push(data);
      }

      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    },
    async addToDeals(data: ProductItemType) {
      this.deals.unshift(data);
      localStorage.setItem('deals', JSON.stringify(this.deals))
    },
    async payTheProduct(data: ProductItemType) {
      this.deals.forEach((item) => {
        if (item.id === data.id) {
          item.isPaid = true
        }
      })
      localStorage.setItem('deals', JSON.stringify(this.deals))
    },
    getLocalData() {
      this.favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
      this.deals = JSON.parse(localStorage.getItem('deals') || '[]')
    },
    changeLoading() {
      this.isLodaing = true
      setTimeout(() => {
        this.isLodaing = false
      }, 500)
    }
  },
})