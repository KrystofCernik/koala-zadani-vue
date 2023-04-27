<template>
  <router-link
    :to="to"
    class="px-6 py-3 bg-green border-none rounded-full font-medium"
  >
    Assignment
  </router-link>
</template>

<script setup lang="ts">

  const props = defineProps({
    to: {
      type: Object,
      required: true
    }
  })

</script>