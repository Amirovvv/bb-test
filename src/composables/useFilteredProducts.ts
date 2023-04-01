import { ProductItemType } from '@/types/types';
import { computed, Ref, ref } from 'vue';

export const useFilter = () => {
  const data = ref<ProductItemType[]>([]);

  const activeFilter: Ref<string> = ref('');
  const searchQuery: Ref<string> = ref('');

  const handleFilter = (filter: string): void => {
    activeFilter.value = filter;
  };

  const handleSearch = (search: string): void => {
    searchQuery.value = search;
  }


  const filteredData = computed<ProductItemType[]>(() => {
    return data.value.filter((product: ProductItemType) =>
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    ).filter((product: ProductItemType) =>
      activeFilter.value ? product.selling === activeFilter.value : true
    );
  })

  return {
    data,
    handleFilter,
    handleSearch,
    filteredData,
  };
}