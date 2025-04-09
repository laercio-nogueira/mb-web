<template>
   <h1 class="title">{{ label }}</h1>
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
.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
}
</style>
