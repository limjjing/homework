import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        left_toggle : true,
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})
