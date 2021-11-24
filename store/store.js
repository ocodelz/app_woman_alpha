import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		tabBarlist: [],
		midBtn: true,
		count:0
	},
	mutations: {
		tabBerList(state) {
			if (uni.getStorageSync('userType') === '0') {
				let num = uni.getStorageSync('aboutToExpire');
				this.count = num.length;
				state.tabBarlist = [{
						pagePath: "/pages/tabbar/index/index",
						text: "首页",
						iconPath: "/static/image/tabbar/home.png",
						selectedIconPath: "/static/image/tabbar/home_active.png"
					},
					{
						pagePath: "/pages/tabbar/purchaseOrLease/purchaseOrLease",
						text: "商城",
						iconPath: "/static/image/tabbar/gouwuche.png",
						selectedIconPath: "/static/image/tabbar/gouwuche_active.png"
					},
					{
						iconPath: "/static/image/tabbar/option.png",
						selectedIconPath: "/static/image/tabbar/option_active.png",
						text: '操作',
						midButton: true,
						customIcon: false
					},
					{
						pagePath: "/pages/tabbar/msgCenter/msgCenter",
						text: "消息",
						iconPath: "/static/image/tabbar/msg.png",
						selectedIconPath: "/static/image/tabbar/msg_active.png",
						count: this.count
					},
					{
						pagePath: "/pages/tabbar/user/user",
						text: "我的",
						iconPath: "/static/image/tabbar/wode.png",
						selectedIconPath: "/static/image/tabbar/wode_active.png"
					}
				]
				state.midBtn = true;
			} else {
				state.tabBarlist = [{
						pagePath: "/pages/tabbar/purchaseOrLease/purchaseOrLease",
						text: "商城",
						iconPath: "/static/image/tabbar/gouwuche.png",
						selectedIconPath: "/static/image/tabbar/gouwuche_active.png"
					},
					{
						pagePath: "/pages/tabbar/msgCenter/msgCenter",
						text: "消息中心",
						iconPath: "/static/image/tabbar/msg.png",
						selectedIconPath: "/static/image/tabbar/msg_active.png"
					},
					{
						pagePath: "/pages/tabbar/user/user",
						text: "我的",
						iconPath: "/static/image/tabbar/wode.png",
						selectedIconPath: "/static/image/tabbar/wode_active.png"
					}
				]
				state.midBtn = false;
			}
		}
	},
	actions: {}
})
export default store
