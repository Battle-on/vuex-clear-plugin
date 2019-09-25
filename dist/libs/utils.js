"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerModule = registerModule;
exports.unregisterModule = unregisterModule;
exports.CLEAR_MODULE = exports.STORE_VALUE_NOT_BE_CHANGE = void 0;

function registerModule(store, moduleName, moduleValue) {
  store.registerModule(moduleName, moduleValue);
}

function unregisterModule(store, moduleName) {
  store.unregisterModule(moduleName);
}

var STORE_VALUE_NOT_BE_CHANGE = '___STORE___CAN__NOT__BE__CHANGE__';
exports.STORE_VALUE_NOT_BE_CHANGE = STORE_VALUE_NOT_BE_CHANGE;
var CLEAR_MODULE = 'clear-data';
exports.CLEAR_MODULE = CLEAR_MODULE;