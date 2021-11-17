import Vue from 'vue'
import Router from 'vue-router'

//import Home from './views/Home.vue'
import Matches from './views/Matches.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    //{ path: '/', component: Home },
    { path: '/', name: 'matches', component: Matches, props: true },
  ],
})

export default router
