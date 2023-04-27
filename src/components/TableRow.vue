<template>
  <tbody>
    <tr class="w-full">
      <td class="text-center w-[100px] h-[75px]"> 
        <ExpandButton
          v-if="children.has_nemesis?.records.length || children.has_secrete?.records.length"
          @expanded="(value) => isExpanded = value"
        />
      </td>
      <td
        v-for="item in person"
        :key="item['ID']"
        class="text-white text-center h-[75px]"
      >
        {{ item }}
      </td>
      <td class="text-center h-[75px]">
        <DeleteButton
          @delete="() => peopleStore.deletePerson(person['ID'])"
        />
      </td>
    </tr>
    <tr
      v-if="isExpanded && (children.has_nemesis?.records.length || children.has_secrete?.records.length)"
    >
      <td
        colspan="12"
        class="pl-8"
      >
        <Table
          :people="children.has_nemesis?.records || children.has_secrete?.records"
        />
      </td>
    </tr>
  </tbody>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { usePeopleStore } from "@/stores/DataStore"
  import Table from './Table.vue'
  import DeleteButton from './DeleteButton.vue'
  import ExpandButton from './ExpandButton.vue'

  const props = defineProps({
    person: {
      type: Object,
      required: true
    },
    children: {
      type: Object,
      default: null
    }
  })

  const peopleStore = usePeopleStore()

  const isExpanded = ref<boolean>(false)

</script>