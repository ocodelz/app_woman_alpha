<script>
	import {
		autoUpdate,
		checkUpdaterForIos
	} from '@/common/updater/checkUpdater.js';
	export default {
		data() {
			return {
				taixinId: ''
			}
		},
		onLaunch: function() {
			let that = this;
			console.log('App Launch')
			uni.getStorage({
				key: 'xt_info',
				success: (res) => {},
				fail: () => {
					uni.setStorage({
						key: 'xt_info',
						data: []
					})
				}
			})
			uni.onTabBarMidButtonTap(() => {
				console.log(1);
			})
			let taixinId = uni.getStorageSync('taixinId')
			that.taixinId = taixinId;
			let currentid = 0;
			if (this.$current != null && this.$current.id != null) {
				currentid = this.$current.id;
			}
			autoUpdate(currentid);
			uni.onTabBarMidButtonTap(() => {
				console.log(1);
			})
		},
		destoryed() {

		},
		onShow: function() {
			console.log('App Show')

		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "./common/free-icon";
	@import "uview-ui/index.scss";
	@import "./common/free.css";
</style>
