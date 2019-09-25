import clearData from './libs/clear-data.js'
import {
  registerModule,
  unregisterModule,
  STORE_VALUE_NOT_BE_CHANGE,
  CLEAR_MODULE
} from './libs/utils'
module.exports = function moduleClearPlugin (modules) {
  return store => {
    registerModule(store, CLEAR_MODULE, clearData) // 注册清空模块
    Object.keys(modules).forEach(moduleName => {
      // 循环注册vuex的module
      registerModule(store, moduleName, modules[moduleName])
    })
    window.localStorage.setItem(
      STORE_VALUE_NOT_BE_CHANGE,
      JSON.stringify(store.state)
    )
    let initStore = JSON.parse(window.localStorage[STORE_VALUE_NOT_BE_CHANGE])
    store.subscribe((mutation, state) => {
      const { type, payload } = mutation
      if (type === 'initDataAll') {
        if (Array.isArray(payload)) {
          payload.forEach(moduleName => {
            console.log(moduleName, initStore[moduleName], 'value')
            if (initStore && initStore[moduleName]) {
              unregisterModule(store, moduleName)
              registerModule(store, moduleName, initStore[moduleName])
            }
          })
        } else {
          store.replaceState(initStore)
        }
      }
      if (type === 'initDtaAllExpect') {
        if (Array.isArray(payload)) {
          payload.forEach(moduleName => {
            if (initStore && !initStore[moduleName]) {
              // 不含有这个模块取消注册
              unregisterModule(store, moduleName)
              registerModule(store, moduleName, initStore[moduleName])
            }
          })
        }
      }
    })
  }
}
