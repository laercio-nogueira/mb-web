<template>
    <StepComponent :current="2" :total="4" />
    <TypographyComponent label="Pessoa Física" />
    <InputComponent label="Nome" />
    <InputComponent label="CPF" />
    <InputComponent label="Data de Nascimento" />
    <InputComponent label="Telefone" />
</template>

<script setup>
import InputComponent from '@/components/InputComponent.vue';
import StepComponent from '@/components/StepComponent.vue';
import TypographyComponent from '@/components/TypographyComponent.vue';
</script>

<style scoped>
</style>
