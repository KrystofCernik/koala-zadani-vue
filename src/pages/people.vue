<template>
  <div class="poeple">
    <Table
      v-if="!isLoading"
      :people="people"
      isTopLevel
      class="w-full"
    />
  </div>
</template>

<script lang="ts" setup>
  import { storeToRefs } from 'pinia'
  import { usePeopleStore } from '@/stores/DataStore'
  import Table from '@/components/Table.vue'

  const peopleStore = usePeopleStore()

  const { people, isLoading } = storeToRefs(peopleStore)

  peopleStore.getData()

</script>
