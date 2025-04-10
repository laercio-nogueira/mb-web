<template>
    <label for="item" class="input-label">{{ label }}</label>
    <input id="item"
      :type="type ?? 'text'"
      class="input mt-1"
      :value="formatValue(value, type)"
      @input="$emit('update:value', $event.target.value)"
      :placeholder="placeholder[type] || null"
      :maxlength="formatMaxLength[type] || null"
    />
</template>

<script setup>
defineEmits(['update:value'])
defineProps({
  value: String,
  label: String,
  type: String,
})

const formatValue = (data, type) => {
  let value = data.replace(/\D/g, '');
  switch (type) {
    case 'cpf':
      if (value.length > 11) value = value.slice(0, 11);
      return value
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    case 'phone':
      if (value.length > 11) value = value.slice(0, 11);
      if (value.length <= 10) {
        value = value
          .replace(/^(\d{2})(\d)/, '($1) $2')
          .replace(/(\d{4})(\d)/, '$1-$2');
      } else {
        value = value
          .replace(/^(\d{2})(\d)/, '($1) $2')
          .replace(/(\d{5})(\d)/, '$1-$2');
      }
      return value;

    case 'cnpj':
      if (value.length > 14) value = value.slice(0, 14);
      return value
        .replace(/^(\d{2})(\d)/, '$1.$2')
        .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
        .replace(/\.(\d{3})(\d)/, '.$1/$2')
        .replace(/(\d{4})(\d)/, '$1-$2');

    default:
      return data;
  }
}

const formatMaxLength = {
  cpf: 14,
  cnpj: 18,
  phone: 15,
  date: 5,
  password: 6
}

const placeholder = {
  cpf: '000.000.000-00',
  cnpj: '00.000.000/0000-00',
  phone: '(00) 00000-0000'
}
</script>

<style scoped lang="scss">
.input {
  width: 100%;
  padding: 8px;
  border: 1px solid #333;
  border-radius: 6px;
  margin-bottom: 16px;

  &-label {
    font-size: 14px;
  }
}
</style>
