<template>
    <StepComponent :current="3" :total="4" />
    <TypographyComponent label="Senha de Acesso" />
    <InputComponent label="Sua Senha" />
</template>

<script setup>
import InputComponent from '@/components/InputComponent.vue';
import StepComponent from '@/components/StepComponent.vue';
import TypographyComponent from '@/components/TypographyComponent.vue';
</script>

<style scoped>
</style>
