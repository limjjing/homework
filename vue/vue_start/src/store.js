import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        left_toggle : true,
		view_page_flag : false,
        select_data: {},
        search_text : []
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})
