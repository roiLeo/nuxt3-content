<script setup lang="ts">
// Utils from Nuxt Content
const { flatUnwrap } = useUnwrap()

defineProps({
  icon: {
    type: String,
    default: 'heroicons-outline:badge-check'
  }
})
</script>

<template>
  <ul>
    <li v-for="(item, index) of flatUnwrap($slots.default(), ['ul'])" :key="index" class="flex space-x-2 !pl-2">
      <Icon :name="icon" class="flex-shrink-0 w-6 h-6 text-emerald-500 !mt-1" />
      <span class="!mb-0"><Markdown :use="() => item" unwrap="li" /></span>
    </li>
  </ul>
</template>

<style lang="postcss" scoped>
.prose ul > li::before {
  background-color: inherit;
  border-radius: inherit;
  content: inherit;
  height: inherit;
  left: inherit;
  position: inherit;
  top: inherit;
  width: inherit;
}
</style>
