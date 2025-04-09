<template>
    <label for="email">{{ label }}</label>
    <input id="email"
      type="email"
      class="input"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
    />
</template>

<script setup>
defineEmits(['update:value'])
defineProps({
  value: String,
  label: String
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
