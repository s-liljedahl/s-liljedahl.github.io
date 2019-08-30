import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//render app component in an element with app as id
new Vue({
  render: h => h(App),
}).$mount('#app')
