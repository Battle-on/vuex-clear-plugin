# vuex-plugin-clear

> vuex-plugin-clear 是一个使用 vuex 技术栈，可以自动清除 vuex module 层数据的插件

## Features

自动清除 vuex module 层数据，
平时写业务代码的时候，
有可能会出现忘记清除 module 层数据情况，使用 vuex-plugin-clear 可以有效避免这种情况的发生

## Getting started

### Installation

```

npm install vuex-plugin-clear
```

### Example

```javascript
const modules = {
  color,
  count
};
import initData from "vuex-plugin-clear";
const moduleControl = initData(modules);
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  plugins: [moduleControl],
});
```

## Usage

### 清除所有 module 数据

```javascript
vm.$store.commit("initDataAll");
```

### 清除指定 vuex module 数据

```javascript
const modules = ["count", "color"];
vm.$store.commit("initDataAll", modules);
```

```javascript
这样就能清除 count 和 color module的数据
```

### 清除指定 vuex 模块不清除

```javascript
const modules = ["count", "color"];
vm.$store.commit("initDtaAllExpect", modules);
```

```javascript
这样就能清除 除 count 和 color module的数据
```
