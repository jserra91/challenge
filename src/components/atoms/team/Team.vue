<template>
  <div class="text-white flex items-center">
    <img v-bind:src="icon" class="w-6 h-6 m-1">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AtomTeam",
  props: {
    icon: {type: String, required: true}
  }
};
</script>

<style lang="scss">
  .title {
    color: var(--color-carbon-200);
  }
</style>