<template>
  <div class="flex flex-col p-2 bet--container rounded-md">
    <div class="text-center text-white">
      {{team}}
    </div>
    <div class="bet--price text-center font-bold">
      {{price}}
    </div>
  </div>
</template>

<script>
export default {
  name: "AtomBet",
  props: {
    team: { type: String },
    price: { type: Number }
  }
};
</script>

<style lang="scss">
  .bet--container {
    background: var(--color-carbon-400);
    border: 1px solid var(--color-carbon-400);
  }

  .bet--price {
    color: var(--color-purple-500);
  }
</style>