<template>
    <p class="step-text">Etapa <span class="step-number">{{ current }}</span> de {{ total }}</p>
</template>

<script setup>
defineProps({
  current: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
})

</script>

<style scoped>
.step-text {
  font-size: 14px;
  margin-bottom: 8px;
}

.step-number {
  color: orange;
  font-weight: bold;
}
</style>
