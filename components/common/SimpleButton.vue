<script lang="ts" setup>
const props = defineProps<{primary?: boolean}>()
const primary = !!props?.primary
</script>

<template>
  <button
    class="font-bold py-2 px-4 rounded border"
    :class="{'text-white': primary, 'bg-blue-500': primary, 'hover:bg-blue-700': primary}"
  >
    <slot />
  </button>
</template>
