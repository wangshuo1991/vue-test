// 项目入口文件

import Vue from 'vue'
import app from './APP.vue'





// 导入 vuex
import Vuex from 'vuex'
Vue.use(Vuex);
// 实例
var store = new Vuex.Store({
    state: { // -> 可以当作是 DATA
        count: 0
    },
    mutations: {
        // 如果要操作 state 的值，只能通过 mutations 提供的方法 才能操作对应的数据，不推荐直接操作 state 中的数据，有可能导致数据紊乱，因为每个组件都有可能改变
        increment(state){
            state.count ++;
        },

        // 如果想调用这个方法，通过 this.$store.commit('方法名')
        // 和 this.$emit('父组件的方法名');
        minsment(state){
            state.count --;
        }
    },
    getters: {
        // getters 负责提供数据，只是把原数据做了一个包装，和过滤器比较像。和computd比较像，只要state 中的数据发生变化了，那么如果 getters 正好也
        // 引用了这个数据，那么就会立即触发getter数值重新计算
        opt: function (state) { // 注意这个函数的参数必须是state
            return "最新的值是： " + state.count;
        }
    }
});



var vm = new Vue({
    el: '#app',
    render: c => c(app),
    store,// 将vuex创建的实例挂在到 vue 实例上；
});