// library
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueRouterSync from 'vuex-router-sync'
// css
import './common/styles/base.scss';
import './common/styles/reset.scss';
import 'font-awesome/css/font-awesome.css';
// ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// util
import Http from './common/scripts/http.js';
import Auth from './common/scripts/auth.js';
import States from './common/scripts/store.js';
import Routers from './router.js';

/** Plugins */
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(ElementUI);

/** Routers */
const router = new VueRouter(Routers)
router.beforeEach((to, from, next) => {
  Auth.accessibility(to, from, next);
  Auth.interceptor();
});

/** Store */
const store = new Vuex.Store(States);

/** Sync $route to store */
const unsync = VueRouterSync.sync(store, router);
unsync();

/** Mount */
const app = new Vue({
  store,
  router
}).$mount('#app');
