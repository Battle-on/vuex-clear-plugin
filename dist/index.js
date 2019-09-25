"use strict";

var _clearData = _interopRequireDefault(require("./libs/clear-data.js"));

var _utils = require("./libs/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function moduleClearPlugin(modules) {
  return function (store) {
    (0, _utils.registerModule)(store, _utils.CLEAR_MODULE, _clearData.default); // 注册清空模块

    Object.keys(modules).forEach(function (moduleName) {
      // 循环注册vuex的module
      (0, _utils.registerModule)(store, moduleName, modules[moduleName]);
    });
    window.localStorage.setItem(_utils.STORE_VALUE_NOT_BE_CHANGE, JSON.stringify(store.state));
    var initStore = JSON.parse(window.localStorage[_utils.STORE_VALUE_NOT_BE_CHANGE]);
    store.subscribe(function (mutation, state) {
      var type = mutation.type,
          payload = mutation.payload;

      if (type === 'initDataAll') {
        if (Array.isArray(payload)) {
          payload.forEach(function (moduleName) {
            console.log(moduleName, initStore[moduleName], 'value');

            if (initStore && initStore[moduleName]) {
              (0, _utils.unregisterModule)(store, moduleName);
              (0, _utils.registerModule)(store, moduleName, initStore[moduleName]);
            }
          });
        } else {
          store.replaceState(initStore);
        }
      }

      if (type === 'initDtaAllExpect') {
        if (Array.isArray(payload)) {
          payload.forEach(function (moduleName) {
            if (initStore && !initStore[moduleName]) {
              // 不含有这个模块取消注册
              (0, _utils.unregisterModule)(store, moduleName);
              (0, _utils.registerModule)(store, moduleName, initStore[moduleName]);
            }
          });
        }
      }
    });
  };
};