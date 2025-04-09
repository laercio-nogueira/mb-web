<template>
  <StepComponent :current="1" :total="4" />
  <TypographyComponent label="Seja bem vindo(a)" />
  <InputComponent label="Endereço de e-mail" />
  <div class="radio-group">
    <RadioComponent label="Pessoa Física" />
    <RadioComponent label="Pessoa Juridica" />
  </div>
</template>

<script setup>
import InputComponent from '@/components/InputComponent.vue';
import RadioComponent from '@/components/RadioComponent.vue';
import StepComponent from '@/components/StepComponent.vue';
import TypographyComponent from '@/components/TypographyComponent.vue';
</script>

<style scoped>
.radio-group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}
</style>
