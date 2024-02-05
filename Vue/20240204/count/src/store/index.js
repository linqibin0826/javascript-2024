import Vue from "vue"
import Vuex from "vuex"

// 应用vuex插件, 无法在App.vue中使用Vuex, 模块里的代码会先被执行, 然后才Vue.use
Vue.use(Vuex)

const actions = {
    oddAdd(context, value) {
        if (context.state.sum % 2) context.commit('ADD', value)
    },
    waitAdd(context, value) {
        setTimeout(() => {
            context.commit('ADD', value)
        }, 500)
    }
}
const mutations = {
    ADD(state, value) {
        state.sum += value
    },
    MINUS(state, value) {
        state.num -= value
    }
}
const state = {
    sum: 0
}

export default new Vuex.Store({
    actions, mutations, state
})
