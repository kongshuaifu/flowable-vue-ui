
const permission = {
  state: {
    routers: []
  },
  mutations: {
    SET_ROUTERS: (state, data) => {
      state.routers = data
    }
  },
  actions: {
    setRoutes({ commit }, data) {
      return new Promise(resolve => {
        commit('SET_ROUTERS', data)
        resolve()
      })
    }
  }
}

export default permission
