<template>
    <label>
      <input
        type="radio"
        :value="value"
        :checked="checked"
        @change="$emit('update:value', $event.target.value)"
      />
      {{ label }}
    </label>
</template>

<script setup>
defineEmits(['update:value'])
defineProps({
  label: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  checked: {
    type: Boolean,
    default: false
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
