// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
// import css from 'vuetify.min.css';

Vue.config.productionTip = false

Vue.use(Vuetify)

export const globalStore = new Vue({
  data: {
    baseUrl: 'http://localhost/pwa_zdorf_1.2/pwa/'

    // baseUrl: 'http://localhost:8080/'
  }
})

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })


window.onload = function () {
  var main = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
      currentActivity: 'home'
  }
});

}