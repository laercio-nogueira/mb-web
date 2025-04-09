<template>
    <StepComponent :current="3" :total="4" />
    <TypographyComponent label="Senha de Acesso" />
    <InputComponent
      label="Sua Senha"
      type="password"
      :value="modelValue.password"
      @update:value="(value) => updateField('password', value)"
    />
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

