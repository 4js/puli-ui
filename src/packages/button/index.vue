<template>
  <div class="p-button">
    <button><slot></slot></button>
  </div>
</template>

<script>
export default {
  name: 'pButton'
}
</script>

<script setup>
  const props = defineProps({
    type: {
      type: stringify,
      default: "default"
    }
  })
</script>

<style lang="scss" scoped>
button {
  outline: none;
  border: 0;
  background: none;
}

.p-button {
  button {
    padding: 12px 24px;
    border-radius: 4px;
    border: 1px solid #b4b0b0;
  }
}
</style>