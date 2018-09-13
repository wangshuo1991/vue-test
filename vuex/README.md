## vuex
    为了 vue 状态管理模式，就是管理数据的；把一些共享的数据 保存到 vuex 中，方便程序中任何组件获取数据。
    [注意]： -> vuex只存的是 共享的数据，要注意 props（父组件传递给子组件的数据） 和 data（自己的私有数据） 与 vuex （全局的共享数据的存取区域） 的区别；

## 使用vuex
   1. 安装 vuex

    ```
        npm install vuex -S
    ```

  2. 创建一个vuex的实例 =仓储 store  在main.js 中引入包 

    ```
        const store = new Vuex.Store({ // 注意 这里的 State 是大写
            state: { // 相当于 data
                count: 0
            },
            mutations: { // 相当于 methods
                // 如果在各个组件中 想要对 state 中的数据进行改变，那么必须通过 mutations 来进行函数调用 例如一个函数
                increcement(state){
                    // 注意 这个参数必须是 state,后边还可以传递一个参数，一共只能传递两个参数，可以是对象，数组等；
                    state.count ++;
                }
            },
             getters: {
                // getters 负责提供数据，只是把原数据做了一个包装，和过滤器比较像。和computd比较像，只要state 中的数据发生变化了，那么如果 getters 正好也
                // 引用了这个数据，那么就会立即触发getter数值重新计算
                opt: function (state) { // 注意这个函数的参数必须是state
                    return "最新的值是： " + state.count;
            }
    }
        })        
    
    ```
 3. 如何引用 store 中定义的值？

    ```
        <input v=model="$store.state.count" @click="add">

        export default {
            methods:{ // 如果想调用这个方法，通过 this.$store.commit('方法名')
                add(){
                    this.$store.commit('increcement')
                }
            }
        }
    ```

## 总结 
1. state中的数据不能直接修改，通过 mutations 修改
2. 如果组件想要从 state 上获取数据需要 this.$store.state.***
3. 如果组件要修改数据，必须从 mutations 中提供的方法，通过 this.$store.commit(‘方法名’，唯一的参数)
4. 如果 store 中的 state 上的数据 在对外提供的时候 需要一层包装 那么推荐使用  getters; this.$store.getters.****使用