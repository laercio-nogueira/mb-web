<script setup>
import { ref } from 'vue'
import StepEmail from './pages/register/StepEmail.vue'
import StepPF from './pages/register/StepPF.vue'
import StepPJ from './pages/register/StepPJ.vue'
import StepPassword from './pages/register/StepPassword.vue'
import StepDoubleCheck from './pages/register/StepDoubleCheck.vue'

const currentStep = ref(0)

const steps = {
  0: StepEmail,
  1: StepPF,
  2: StepPJ,
  3: StepPassword,
  4: StepDoubleCheck
}

const register = ref({
  email: "laerciopesa30@hotmail.com",
  type: "",
  name: "",
  document: "",
  date: "",
  phone: "",
  password: ""
})

const next = () => {
  currentStep.value++
}
const prev = () => {
  currentStep.value--
}
</script>

<template>
  <div class="step-container">
    <component :is="steps[currentStep]" v-model="register" />
    <div style="margin-top: 1rem;">
       <button @click="prev" :disabled="currentStep === 0" class="btn-outline">
        Voltar
      </button>
      <button @click="next" :disabled="currentStep === Object.keys(steps).length - 1" class="btn-container">
        Continuar
      </button>
    </div>
  </div>
</template>

<style scoped>
.step-container {
  max-width: 300px;
  margin: auto;
  font-family: sans-serif;
}
.step-text {
  font-size: 14px;
  margin-bottom: 8px;
}

.step-number {
  color: orange;
  font-weight: bold;
}

.welcome-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
}

.input {
  width: 100%;
  padding: 8px;
  border: 1px solid #333;
  border-radius: 6px;
  margin-bottom: 16px;
}

.radio-group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}

.btn-container {
  width: 50%;
  background-color: #ffa500;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.btn-outline {
  width: 50%;
  background-color: #fff;
  color: #ffa500;;
  padding: 10px;
  border: 1px solid #ffa500;
  border-radius: 6px;
  cursor: pointer;
}

.btn-continuar:hover {
  background-color: darkorange;
}
</style>
