import { ref } from "vue";

export function useDebounce(callback: Function, delay: number) {
  const debounceTimeout = ref<number | null>(null)

  return (value: string) => {
    if (debounceTimeout.value) clearTimeout(debounceTimeout.value)
    debounceTimeout.value = setTimeout(() => {
      callback(value)
    }, delay) as unknown as number
  }
}