<template>
  <div class="flex w-full p-4 upcoming">
    <!-- LEFT -->
    <div class="w-6/12">
      <div class="pb-4">
        <TitleComponent>{{match.name}} · {{match.displayed_format}}</TitleComponent>
      </div>
      <div>
        <div>
          <Team
            v-bind:icon="match.away_image_url"
          >
            {{match.away_team}}
          </Team>
        </div>
        <div>
          <Team
            v-bind:icon="match.home_image_url"
          >
            {{match.home_team}}
          </Team>
        </div>
      </div>
    </div>
    <!-- RIGHT -->
    <div class="w-6/12">
      <div class="flex justify-center pb-4">
        <TitleComponent>{{match.market.name}}</TitleComponent>
      </div>
      <div class="flex w-full">
        <div class="flex flex-col justify-center items-center p-2">
          <TitleComponent>{{getTimeStart(match.start_time)}}</TitleComponent>
          <TitleComponent>{{getDateStart(match.start_time)}}</TitleComponent>
        </div>
        <div class="w-6/12 p-1">
          <Bet 
            v-bind:team="match.away_team"
            v-bind:price="getPrice(0, match)"
          />
        </div>
        <div class="w-6/12 p-1">
          <Bet 
              v-bind:team="match.home_team"
              v-bind:price="getPrice(1, match)"
            />
        </div>
        <div class="flex justify-center items-center p-5">
          <Counter v-bind:counter="`+${match.num_markets}`" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleComponent from '../../atoms/title/Title.vue'
import Bet from '../../atoms/bet/Bet.vue'
import Counter from '../../atoms/counter/Counter.vue'
import Team from '../../atoms/team/Team.vue'
import moment from 'moment'

export default {
  name: "mid-upcoming",
  components: {
    TitleComponent,
    Bet,
    Counter,
    Team
  },
  props: {
    match: Object,
    ejemplo: String
  },
  methods: {
    getDateStart(date) {
      return moment(date).format('ddd');
    },
    getTimeStart(date) {
      return moment(date).format('hh:mm');
    },
    getPrice(position, obj) {
      return `${obj.market.contracts[position].price}`;
    }
  }
};
</script>

<style lang="scss">
  .upcoming {
    background-color: var(--color-carbon-500)
  }
</style>