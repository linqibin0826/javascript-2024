import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    // 声明全局事件总线
    Vue.prototype.$bus = this
  }
}).$mount('#app')
