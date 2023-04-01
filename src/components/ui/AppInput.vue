<script setup lang="ts">
import { inputPropsType } from '@/types/types'

const props: inputPropsType = defineProps({
  btnIcon: {
    type: Boolean,
    default: false,
  },
  btnPlaceholder: {
    type: String,
    default: '',
  },
  btnType: {
    type: String,
    default: 'text',
  },
  modelValue: [String, Number],
})

const emits = defineEmits(['update:modelValue'])

const updateInput = (event: Event) => {
  emits('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="app-input">
    <input
      :type="props.btnType"
      :placeholder="props.btnPlaceholder"
      :value="modelValue"
      @input="updateInput"
    />
    <div v-if="props.btnIcon" class="app-input__icon">
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-input {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 4px 4px 4px 20px;
  border-radius: 10px;
  border: 1px solid $platinum;
  justify-content: space-between;

  & input {
    border: none;
    font-size: 15px;
    color: $primary;
  }

  &__icon {
    width: 40px;
    height: 40px;
    background: $primary;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
