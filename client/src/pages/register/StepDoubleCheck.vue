<template>
    <StepComponent :current="4" :total="4" />
    <TypographyComponent label="Revise suas informacoes" />
    <InputComponent label="Nome" />
    <InputComponent label="CPF" />
    <InputComponent label="Data de Nascimento" />
    <InputComponent label="Telefone" />
    <InputComponent label="Senha" />
</template>

<script setup>
import InputComponent from '@/components/InputComponent.vue';
import StepComponent from '@/components/StepComponent.vue';
import TypographyComponent from '@/components/TypographyComponent.vue';
</script>

<style scoped>
</style>

