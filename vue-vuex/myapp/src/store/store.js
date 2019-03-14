import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        para: {},
        testAry: [
            {
                name: 'wangshuo',
                age: 28
            },
            {
                name: 'wulei',
                age: 28
            },
            {
                name: 'zhengzhi',
                age: 38
            }
        ],
        co: 0
    },
    plugins: [createPersistedState({
        storage: window.sessionStorage
    })]
    ,
    mutations: {
        increase (state,params) {
            state.para = params;
        },
        increment: state => state.co++,
        decrement: state => state.co--
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