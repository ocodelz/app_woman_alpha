import Vue from 'vue'
import App from './App'
import store from './store/store.js'
Vue.prototype.$store = store
import uView from "uview-ui";
Vue.use(uView);
Vue.config.productionTip = false
//版本更新
let currentVersion = uni.getStorageSync('localVersionID')
console.log('localVersion=' + currentVersion.id)
if (!currentVersion) {
	currentVersion = {
		id: 0
	}
} else
if (!currentVersion.id) {
	currentVersion.id = 0
}
Vue.prototype.$current = currentVersion
//

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})

import httpInterceptor from '@/common/http.interceptor.js';
Vue.use(httpInterceptor, app)
app.$mount()