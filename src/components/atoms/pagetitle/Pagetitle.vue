<template>
  <div class="flex">
    <img v-bind:src="icon" class="pr-2" />
    <span class="text-white text-lg">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "pagetitle",
  props: {
    icon: String
  }
};
</script>