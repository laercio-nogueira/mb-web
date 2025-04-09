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
.step-container {
  max-width: 300px;
  margin: auto;
  font-family: sans-serif;
}

.step-text {
  font-size: 14px;
  margin-bottom: 8px;
}

.step-number {
  color: orange;
  font-weight: bold;
}
</style>
