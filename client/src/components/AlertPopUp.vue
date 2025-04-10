<template>
  <transition name="fade">
    <div
      v-if="props.modelValue"
      :class="[
        'alert-popup',
        props.modelValue?.type === 'success' ? 'bg-success' : 'bg-error'
      ]"
    >
      <span class="message">{{ props.modelValue?.message }}</span>
      <button class="close-btn" @click="$emit('update:modelValue', null)">×</button>
    </div>
  </transition>
</template>

<script setup>
import { onMounted } from 'vue'
const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: String,
  duration: {
    type: Number,
    default: 3000,
  },
})

onMounted(() => {
  if (props.duration > 0) {
    setTimeout(() => {
      emit('update:modelValue', null)
    }, props.duration)
  }
})
</script>

<style scoped>
.alert-popup {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  color: #fff;
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  max-width: 300px;
}

.bg-success {
  background-color: var(--success-color);
}

.bg-error {
  background-color: var(--error-color);;
}

.close-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
