<template>
  {{ register }}
  <div class="container mt-8">
    <div class="col-8 offset-6">
      <component :is="steps[currentStep]" v-model="register" />

      <ButtonGroup v-model="currentStep" :register="register" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import StepEmail from './pages/register/StepEmail.vue'
import StepPF from './pages/register/StepPF.vue'
import StepPJ from './pages/register/StepPJ.vue'
import StepPassword from './pages/register/StepPassword.vue'
import StepDoubleCheck from './pages/register/StepDoubleCheck.vue'
import ButtonGroup from './components/ButtonGroup.vue'

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
</script>
