<template>
    <label for="email">{{ label }}</label>
    <input id="email" v-model="email" type="email" class="input" />
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true
  }
})

</script>

<style scoped>
.input {
  width: 100%;
  padding: 8px;
  border: 1px solid #333;
  border-radius: 6px;
  margin-bottom: 16px;
}
</style>
