<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: 'w-8 h-8'
  },
  spacing: {
    type: String,
    default: 'p-0'
  }
})

const colorMode = useColorMode()
const onClick = () => (colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light'))
</script>

<template>
  <button aria-label="Color Mode" class="inline-block" @click="onClick">
    <ColorScheme placeholder="...">
      <Icon v-show="colorMode.value === 'dark'" name="heroicons-outline:moon" />
      <Icon v-show="colorMode.value === 'light'" name="heroicons-outline:sun" />
    </ColorScheme>
  </button>
</template>
