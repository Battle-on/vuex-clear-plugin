"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var state = {};
var mutations = {
  initDataAll: function initDataAll(state, payload) {
    if (Array.isArray(payload)) {
      console.log('clearALL-another');
    } else if (payload === undefined || payload === null) {
      console.log('clearALL');
    }
  },
  initDtaAllExpect: function initDtaAllExpect(state, payload) {
    if (Array.isArray(payload)) {
      console.log('payload', payload);
    } else {
      throw new Error('initDtaAllExpect methods payload must be a array');
    }
  }
};
var _default = {
  state: state,
  mutations: mutations
};
exports.default = _default;