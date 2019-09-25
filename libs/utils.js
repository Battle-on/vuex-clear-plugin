function registerModule (store, moduleName, moduleValue) {
  store.registerModule(moduleName, moduleValue)
}

function unregisterModule (store, moduleName) {
  store.unregisterModule(moduleName)
}

const STORE_VALUE_NOT_BE_CHANGE = '___STORE___CAN__NOT__BE__CHANGE__'

const CLEAR_MODULE = 'clear-data'

export {
  registerModule,
  unregisterModule,
  STORE_VALUE_NOT_BE_CHANGE,
  CLEAR_MODULE
}
