<template>
  <div class="">
    <div v-for="match in matches" :key="match.id" class="my-1">
      <upcoming
        v-bind:match="match"
      />
    </div>
  </div>
</template>

<script>

import moment from 'moment'
import upcoming from '../../molecules/upcoming/Upcoming.vue'

export default {
  name: "mid-list-matches",
  components: {
    upcoming
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