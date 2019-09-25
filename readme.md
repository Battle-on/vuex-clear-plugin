# vuex-clear-plugin

> vuex-clear-plugin 是一个使用vuex技术栈，可以自动清除vuex module层数据的插件

## Features
自动清除vuex module层数据，
平时写业务代码的时候，
有可能会出现忘记清除module层数据情况，使用vuex-clear-plugin可以有效避免这种情况的发生

## Getting started
### Installation
```

npm install vuex-clear-plugin
```

### Example
```javascript
import initData from 'vuex-clear-plugin'
const moduleControl = initData(modules)
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  plugins: [moduleControl]
})

```
## Usage
### 清除所有module 数据
 ```javascript
vm.$store.commit("initDataAll")
 ```

### 清除指定vuex module 数据
 ```javascript
const modules = ['count', 'color]
vm.$store.commit("initDataAll", modules)
// 这样就能清除 count 和 color module的数据
 ```
 
### 清除指定vuex 除一下模块不清除
 ```javascript

const modules = ['count', 'color]
vm.$store.commit("initDtaAllExpect", modules)
 // 这样就能清除 除 count 和 color module的数据
 ```



