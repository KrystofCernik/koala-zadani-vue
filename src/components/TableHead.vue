<template>
  <thead
    class="bg-green h-[50px]"
    :class="{ 'h-[75px]': isTopLevel }"
  >
    <tr>
      <th
          v-for="key, index in keys"
          :key="key + '-' + index"
          class="py-2 px-4 text-center leading-5"
      >
          {{ key }}
      </th>
    </tr>
  </thead>
</template>

<script setup lang="ts">

  const props = defineProps({
    keys: {
        type: Array<string>,
        required: true
    },
    isTopLevel: {
      type: Boolean,
      default: false
    }
  })

</script>