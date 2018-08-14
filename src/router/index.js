import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import BlizzardCarousel from '@/pages/BlizzardCarousel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/BlizzardCarousel',
      name: 'BlizzardCarousel',
      component: BlizzardCarousel
    },
  ]
})
