import Vue from 'vue'
import Vuex from 'vuex'
import DezBanner from './modules/dezBanner'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {},
    modules: {
      dezBanner: DezBanner
    }
  })

export default store
