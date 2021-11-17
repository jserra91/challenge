<template>
  <div v-bind:class="getCssBase(type)">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "mid-typography",
  props: {
    type: String
  },
  methods: {
    getCssBase(type) {
      let output = "";
      switch (type) {
        case "title-medium":
          output = "text-white text-md";
          break;
        case "menu":
          output = "text-white text-sm text-left pl-2";
          break;
        default:
          break;
      }
      return output;
    }
  }
};
</script>

<style lang="scss">
  .title {
    color: var(--color-carbon-200);
  }
</style>