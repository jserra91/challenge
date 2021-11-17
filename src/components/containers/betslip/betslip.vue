<template>
  <div class="w-full h-full betslip p-4">
    <div>
      <typography type="title-medium">Bet Slip</typography>
    </div>
  </div>
</template>

<script>

import typography from '../../atoms/typography/Typography.vue'

export default {
  name: "mid-bet-slip",
  components: {
    typography
  },
  props: {
    matches: Object
  }
};
</script>

<style lang="scss">
  .betslip {
    background-color: var(--color-carbon-700)
  }
</style>