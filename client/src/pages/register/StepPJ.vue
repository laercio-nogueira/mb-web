<template>
  <StepComponent :current="2" :total="4" />
  <TypographyComponent label="Pessoa Jurídica" />

  <InputComponent label="Razão social" :value="modelValue.name" @update:value="(value) => updateField('name', value)" />
  <InputComponent label="CNPJ" :value="modelValue.document" @update:value="(value) => updateField('document', value)" />
  <InputComponent label="Data de Abertura" :value="modelValue.date" @update:value="(value) => updateField('date', value)" type="date" />
  <InputComponent label="Telefone" :value="modelValue.phone" @update:value="(value) => updateField('phone', value)" type="phone" />
</template>

<script setup>
import InputComponent from '@/components/InputComponent.vue';
import StepComponent from '@/components/StepComponent.vue';
import TypographyComponent from '@/components/TypographyComponent.vue';

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  }
})

const updateField = (key, value) => {
  emit('update:modelValue', {
    ...props.modelValue,
    [key]: value
  })
}
</script>

<style scoped>
</style>
