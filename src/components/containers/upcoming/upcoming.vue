<template>
  <div class="flex flex-col w-full h-full">
    <div class="pb-4">
      <pagetitle icon="./calendar.png">Upcoming</pagetitle>
    </div>
    <div>
      <listMatches v-bind:matches="matches"></listMatches>
    </div>
  </div>
</template>

<script>

import listMatches from '../../organisms/listMatches/listMatches.vue'
import pagetitle from '../../atoms/pagetitle/Pagetitle.vue'

export default {
  name: "mid-upcoming",
  components: {
    listMatches,
    pagetitle
  },
  props: {
    matches: Object
  }
};
</script>

<style lang="scss">
  .upcoming {
    background-color: var(--color-carbon-500)
  }
</style>