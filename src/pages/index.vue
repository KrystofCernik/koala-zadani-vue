<template>
  <div class="homepage h-screen w-full">
    <div class="h-full flex flex-col justify-center items-start p-8">
      <h1 class="text-white">Kryštof Černík - Vue</h1>
      <Button
        :to="{ name: 'people' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Button from '../components/Button.vue'

</script>