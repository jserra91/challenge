<template>
  <span class="font-bold counter">
    {{counter}}
  </span>
</template>

<script>
export default {
  name: "AtomCounter",
  props: {
    counter: { type: String }
  }
};
</script>

<style lang="scss">
  .counter {
    color: var(--color-purple-500);
  }
</style>