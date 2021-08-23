import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import firebase from 'firebase'



Vue.config.productionTip = false
Vue.use(vuetify)

var firebaseConfig = {
  apiKey: "AIzaSyB2-YsupzmdFvnaDBFyMZw7rP-tWq1BAa0",
  authDomain: "sub-store.firebaseapp.com",
  projectId: "sub-store",
  storageBucket: "sub-store.appspot.com",
  messagingSenderId: "589660387084",
  appId: "1:589660387084:web:039c12b819e1aa620dbb29"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
