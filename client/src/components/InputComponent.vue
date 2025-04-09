<template>
    <label for="item" class="input-label">{{ label }}</label>
    <input id="item"
      :type="type ?? 'text'"
      class="input mt-1"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
    />
</template>

<script setup>
defineEmits(['update:value'])
defineProps({
  value: String,
  label: String,
  type: String,
})
</script>

<style scoped lang="scss">
.input {
  width: 100%;
  padding: 8px;
  border: 1px solid #333;
  border-radius: 6px;
  margin-bottom: 16px;

  &-label {
    font-size: 14px;
  }
}
</style>
