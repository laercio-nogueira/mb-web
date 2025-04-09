<template>
    <label>
      <input type="radio" value="física" v-model="tipoPessoa" />
      {{ label }}
    </label>
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
