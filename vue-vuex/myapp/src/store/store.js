import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        para: {}
    },
    mutations: {
        increase (state,params) {
            state.para = params;
        }
    },
    actions: {
        show (context) {
            let playload = {
                name: 'wang',
                age: 20
            };
            context.commit('increase',playload);
        }
    }
});

export default store;