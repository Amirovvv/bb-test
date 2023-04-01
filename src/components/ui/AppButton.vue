<script setup lang="ts">
import { computed, PropType } from 'vue'

type ButtonType = 'primary' | 'success' | 'favorite'
type ButtonSizeType = 'small' | 'medium'

const props = defineProps({
  type: {
    type: String as PropType<ButtonType>,
    default: 'primary',
  },
  size: {
    type: String as PropType<ButtonSizeType>,
    default: 'medium',
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
})

const emits = defineEmits(['onClick'])

const onClick = (): void => {
  emits('onClick')
}

const classes = computed((): string[] => {
  const typeBtn = `btn-${props.type}`
  const sizeBtn = `btn-${props.size}`
  return [typeBtn, sizeBtn]
})
</script>

<template>
  <button
    class="app-button"
    :class="classes"
    @click="onClick"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
button:disabled {
  border: 1px solid $platinum;
  color: $manatee;
  background: white;

  &:hover {
    transform: none;
    box-shadow: none;
  }
}
.app-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-weight: 500;
  font-size: 15px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(2px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
}

.btn-primary {
  background: $white-gray;
  color: $primary;
}

.btn-favorite {
  background: $primary;
  color: white;
}
.btn-success {
  background: $success;
  color: white;
}
.btn-small {
  width: 50px;
  height: 50px;
}

.btn-medium {
  padding: 17.5px 0;
  flex: 1;
}
</style>
