<template>
	<view class="flex align-center w-100 py-5">
		<view v-if="isPlatform == 0">
			<web-view :webview-styles="webviewStyles" src="https://www.pgyer.com/lIH0"></web-view>
		</view>
		<view v-else>
			<web-view :webview-styles="webviewStyles" src="https://www.pgyer.com/Ah9Q"></web-view>
		</view>
	</view>
</template>

<script>
	export default { 
		data() {
			return {
				isPlatform: 0,
				webviewStyles: {
					progress: {
						color: '#18b566'
					}
				}
			}
		},
		onLoad() {
			this.handleIsPlatform();
		},
		methods: {
			handleIsPlatform() {
				switch (uni.getSystemInfoSync().platform) {
					case 'android':
						this.isPlatform = 1;
						break;
					case 'ios':
						this.isPlatform = 0;
						break;
				}
			}
		}
	}
</script>

<style scoped>
	.title {
		flex: 1;
		color: #007AFF;
		text-decoration: underline;
		margin-left: 20rpx;
		box-sizing: border-box;
	}
</style>
