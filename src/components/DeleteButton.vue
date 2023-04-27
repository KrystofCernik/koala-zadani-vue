<template>
  <button
    class="w-[16px] hover:opacity-80"
    @click="() => $emit('delete')"
  >
    <img
      class="w-full"
      src="@/assets/icons/delete.svg"
      alt="delete"
    >
  </button>
</template>