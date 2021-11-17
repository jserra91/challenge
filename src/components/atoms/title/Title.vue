<template>
  <span class="title">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "AtomTitle"
};
</script>

<style lang="scss">
  .title {
    color: var(--color-carbon-200);
  }
</style>