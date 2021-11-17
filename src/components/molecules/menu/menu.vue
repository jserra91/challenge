<template>
  <div class="flex flex-col w-full h-full ">
    <div v-for="menu in menus.menus" :key="menu.name" class="m-0.5">
      <button class="w-full menu--button rounded-lg h-8 flex items-center">
        <typography type="menu">{{menu.name}}</typography>
      </button>
    </div>
  </div>
</template>

<script>

import typography from '../../atoms/typography/Typography.vue'

export default {
  name: "mid-menu",
  components: {
    typography
  },
  props: {
    menus: Object
  }
};
</script>

<style lang="scss">
  .menu--button {
    background: var(--color-carbon-400);
    border: 1px solid var(--color-carbon-400);
  }

  .menu {
    background-color: var(--color-carbon-800);
  }
</style>