<template>
    <StepComponent :current="2" :total="4" />
    <TypographyComponent label="Pessoa Jurídica" />
    <InputComponent label="Razão social" />
    <InputComponent label="CNPJ" />
    <InputComponent label="Data de Abertura" />
    <InputComponent label="Telefone" />
</template>

<script setup>
import InputComponent from '@/components/InputComponent.vue';
import StepComponent from '@/components/StepComponent.vue';
import TypographyComponent from '@/components/TypographyComponent.vue';
</script>

<style scoped>
</style>
