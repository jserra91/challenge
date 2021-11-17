<template>
  <div class="flex w-full topbar h-10 py-3 pl-4">
    <img v-bind:src="logo" />
  </div>
</template>

<script>


export default {
  name: "mid-topbar",
  props: {
    logo: String
  }
};
</script>

<style lang="scss">
  .topbar {
    background-color: var(--color-carbon-700)
  }
</style>