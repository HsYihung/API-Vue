import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    x: 100,
    y: true,
    z: new Date(),
  },
  mutations: {
    addStoreCount(state) {
      state.count += 1
    }
  },
  getter: {

  },
  actions: {

  }
})

export default store
