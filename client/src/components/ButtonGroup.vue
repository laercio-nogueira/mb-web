<template>
  <div class="btn-group">
    <button
      @click="prev"
      v-if="modelValue > 0"
      class="btn-outline"
    >
      Voltar
    </button>
    <button
      @click="next"
      :disabled="!isDisabled()"
      class="btn-container"
      :class="{ full: props.modelValue === 0 }"
    >
      Continuar
    </button>
  </div>
</template>

<script setup>
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  register: {
    type: Object,
    required: true
  },
  modelValue: {
    type: Object,
    required: true
  }
})

const next = () => {
  switch (props.modelValue) {
    case 0:
      if (props.register.type === "pf") emit('update:modelValue', 1)
      if (props.register.type === "pj") emit('update:modelValue', 2)
      break
    case 1:
      if (props.register.value.type === "pf") emit('update:modelValue', 3)
      break
    default:
      emit('update:modelValue', props.modelValue + 1)
  }
}
const prev = () => {
  switch (props.modelValue) {
    case 3:
      if (props.register.type === "pf") emit('update:modelValue', 1)
      if (props.register.type === "pj") emit('update:modelValue', 2)
      break
    case 2:
      if (props.register.type === "pj") emit('update:modelValue', 0)
      break
    default:
      emit('update:modelValue', props.modelValue - 1)
  }
}

const isDisabled = () => {
  switch (props.modelValue) {
    case 0:
      return !!props.register.email
        && !!props.register.type
    case 1:
    case 2:
      return !!props.register.name
        && !!props.register.document
        && !!props.register.date
        && !!props.register.phone
    default:
      return true
  }
}
</script>

<style scoped lang="scss">
.btn {
  &-group {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    background: "red",
  }

  &-container, &-outline {
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
  }

  &-container {
    width: 51%;
    background-color: var(--primary-color);
    color: var(--white-color);
    border: none;

    &:disabled {
      background-color: var(--secondary-color);
    }
  }

  &-outline {
    width: 44%;
    background-color: var(--white-color);
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
  }
}
.full {
  width: 100%
}
</style>
