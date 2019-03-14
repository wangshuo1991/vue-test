# myapp

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## vuex 刷新页面后数据丢失

- 使用vuex-persistedstate插件
  
  ```shell
    
    npm install vuex-persistedstate  --save

  ```
- 在vuex store.js 文件中

  ```javascript

    import createPersistedState from "vuex-persistedstate"
    const store = new Vuex.Store({
    // ...
    plugins: [createPersistedState()]
    })

  ```

- 想要存储到sessionStorage，配置如下

  ```javascript

      import createPersistedState from "vuex-persistedstate"
      const store = new Vuex.Store({
      // ...
          plugins: [createPersistedState({
              storage: window.sessionStorage
          })]
      })

  ```

- 指定需要持久化的state,配置如下

    ```javascript

    import createPersistedState from "vuex-persistedstate"
    const store = new Vuex.Store({
    // ...
        plugins: [createPersistedState({
            storage: window.sessionStorage,
            reducer(val) {
                return {
                // 只储存state中的assessmentData
                assessmentData: val.assessmentData
                }
            }
        })]
    })

    ```