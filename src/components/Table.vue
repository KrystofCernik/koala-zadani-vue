<template>
  <table class="table">
    <TableHead  
      :keys="keys"
      :isTopLevel="isTopLevel"
    />
    <TableRow
      v-for="person in people"
      :key="person.data['ID']"
      :person="person.data"
      :children="person.children"
      :class="{ 'odd:bg-black-80 even:bg-black-40': isTopLevel }"
    />
  </table>
</template>

<script setup lang="ts">
  import { ref } from "vue"
  import type Person from "@/types/Person"
  import TableHead from "./TableHead.vue"
  import TableRow from "./TableRow.vue"

  const props = defineProps({
    people: {
      type: Array<Person>,
      required: true
    },
    isTopLevel: {
      type: Boolean,
      default: false
    }
  })

  const keys = ref<Array<string>>(Object.keys(props.people[0].data))
  keys.value.push('Delete')
  keys.value.unshift('')


</script>