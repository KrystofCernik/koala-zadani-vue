<template>
  <button
    class="w-[12px] hover:opacity-80"
    @click="() => {
      $emit('expanded', !isExpanded)
      isExpanded = !isExpanded
    }"
  >
    <img
      class="w-full"
      :class="{ 'rotate-90': isExpanded }"
      src="@/assets/icons/chevron.svg"
      alt="expand"
    >
  </button>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const isExpanded = ref(false)
  
</script>