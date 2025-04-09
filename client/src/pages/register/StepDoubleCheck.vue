<template>
    <StepComponent :current="4" :total="4" />
    <TypographyComponent label="Revise suas informacoes" />
    <InputComponent label="Endereço de e-mail"
      :value="modelValue.email"
      @update:value="(value) => updateField('email', value)"
      type="email"
    />
    <InputComponent
      :label="props.modelValue.type === 'pf' ? 'Nome' : 'Razão social'"
      :value="modelValue.name"
      @update:value="(value) => updateField('name', value)"
    />
    <InputComponent
      :label="props.modelValue.type === 'pf' ? 'CPF' : 'CNPJ'"
      :value="modelValue.document"
      @update:value="(value) => updateField('document', value)"
    />
    <InputComponent
      :label="props.modelValue.type === 'pf' ? 'Data de Nascimento' : 'Data de Abertura'"
      :value="modelValue.date"
      @update:value="(value) => updateField('date', value)" type="date"
    />
    <InputComponent label="Telefone" :value="modelValue.phone" @update:value="(value) => updateField('phone', value)" type="phone" />
    <InputComponent
      label="Sua Senha"
      type="text"
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

<style scoped>
</style>

