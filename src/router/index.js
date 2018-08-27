import Vue from 'vue'
import Router from 'vue-router'
import BlizzardCarousel from '@/pages/BlizzardCarousel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlizzardCarousel',
      component: BlizzardCarousel
    },
  ]
})
