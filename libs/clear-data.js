const state = {}
const mutations = {
  initDataAll (state, payload) {
    if (Array.isArray(payload)) {
      console.log('clearALL-another')
    } else if (payload === undefined || payload === null) {
      console.log('clearALL')
    }
  },
  initDtaAllExpect (state, payload) {
    if (Array.isArray(payload)) {
      console.log('payload', payload)
    } else {
      throw new Error('initDtaAllExpect methods payload must be a array')
    }
  }
}

export default {
  state,
  mutations
}
