import Vue from 'vue'
import Router from 'vue-router'
import Game from './components/Stairs.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Game
    },
  ]
})
