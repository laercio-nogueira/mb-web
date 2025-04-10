<template>
  <div class="container mt-8">
    <div class="col-9 offset-4">
      <component :is="steps[currentStep]" v-model="register" />
      <ButtonGroup v-model="currentStep" :register="register" :handleClick="handleClick" />
      <AlertPopUp
        v-if="showAlertPopUp"
        v-model="showAlertPopUp"
        duration="5000"
      />
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
import { registerUser } from './api/register'
import AlertPopUp from './components/AlertPopUp.vue'

const currentStep = ref(0)
const showAlertPopUp = ref(false)

const steps = {
  0: StepEmail,
  1: StepPF,
  2: StepPJ,
  3: StepPassword,
  4: StepDoubleCheck
}

const register = ref({
  email: "",
  type: "",
  name: "",
  document: "",
  date: "",
  phone: "",
  password: ""
})

const resetData = () => {
  register.value = {
    email: "",
    type: "",
    name: "",
    document: "",
    date: "",
    phone: "",
    password: ""
  }
  currentStep.value = 0
}

const handleClick = async () => {
  try {
    const data = await registerUser(register.value)
    if (data?.success) {
      resetData()
      showAlertPopUp.value = {
        message: data?.message,
        type: "success"
      }
    }
  } catch ({ message }) {
    showAlertPopUp.value = {
      message: message,
      type: "error"
    }
  }
}
</script>
