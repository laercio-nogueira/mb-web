<template>
  <StepComponent :current="1" :total="4" />
  <TypographyComponent label="Seja bem vindo(a)" />
  <InputComponent label="Endereço de e-mail"
    :value="modelValue.email"
    @update:value="(value) => updateField('email', value)"
    type="email"
  />
  <div class="radio-group">
    <RadioComponent label="Pessoa Física" value="pf" :checked="modelValue.type === 'pf'"
      @update:value="(value) => updateField('type', value)" />
    <RadioComponent label="Pessoa Juridica" value="pj" :checked="modelValue.type === 'pj'"
      @update:value="(value) => updateField('type', value)" />
  </div>
</template>

<script setup>
import InputComponent from '@/components/InputComponent.vue';
import RadioComponent from '@/components/RadioComponent.vue';
import StepComponent from '@/components/StepComponent.vue';
import TypographyComponent from '@/components/TypographyComponent.vue';

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const updateField = (key, value) => {

  emit('update:modelValue', {
    ...props.modelValue,
    [key]: value,
    ...(value === 'pf' || value === 'pj' && {
      name: "",
      document: "",
      date: "",
      phone: "",
      password: ""
    })
  })
}
</script>

<style scoped>
.radio-group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}
</style>
