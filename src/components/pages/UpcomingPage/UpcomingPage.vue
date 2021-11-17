<template>
  <div class="flex">
    <div class="w-full">
      <div>
        <topbar v-bind:logo="icon"></topbar>
      </div>
      <div class="flex flex-row">
        <div class="w-40 py-8 px-2">
          <menuC v-bind:menus="menus"></menuC>
        </div>
        <div class="w-full">
          <upcoming v-bind:matches="matches"></upcoming>
        </div>
        <div class="w-96 px-2">
          <betslip></betslip>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import betslip from '../../containers/betslip/betslip.vue'
import upcoming from '../../containers/upcoming/upcoming.vue'
import menuC from '../../molecules/menu/menu.vue'
import topbar from '../../molecules/topbar/topbar.vue'
// MOCK
import { MENU } from './menuMock'
import { UPCOMING_MOCK } from './upcomingMock'

export default {
  name: "mid-page-upcoming",
  components: {
    betslip,
    upcoming,
    menuC,
    topbar
  },
  data: function () {
    return {
      menus: {...MENU},
      matches: {...UPCOMING_MOCK.data},
      icon: "./logo.png"
    }
  },
};
</script>

<style lang="scss">
  .upcoming {
    background-color: var(--color-carbon-500)
  }
</style>