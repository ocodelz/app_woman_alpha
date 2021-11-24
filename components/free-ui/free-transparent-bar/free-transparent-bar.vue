<template>
	<view>
		<view class="fixed-top" :style="handleNavBarStyle">
			<!-- 状态栏 -->
			<view :style="'height:'+statusBarHeight+'px'"></view>
			<!-- 导航 -->
			<view class="flex align-center justify-between" style="height: 90rpx;">
				<!-- 左边返回按钮 -->
				<view class="ml-2" @click="handleTapBack">
					<text class="iconfont icon-size" :style="handleIsShowNavTab > 0 ? handleShowNavTab : handleIconStyle">{{leftIcon}}</text>
				</view>
				<!-- 标题 || 选项卡 -->
				<view class="ml-5" style="width: 200rpx;">
					<view class="ml-3 font-weight-bold font-md" v-if="title" :style="handleIsShowNavTab > 0 ? handleShowNavTab : title = false">{{title}}</view>
					<view v-if="showNavTabList" :style="handleIsShowNavTab > 0 ? handleShowNavTab : showNavTabList = false">
						<u-tabs :list="navTabList" :is-scroll="false" :current="current" @change="handleChangeTab" bg-color="none" gutter="25"
						active-color="#fc979f"></u-tabs>
					</view>
				</view>
				<!-- 右边操作按钮 -->
				<view class="flex align-center mr-2">
					<view class="mr-1" v-if="rightIcon" @click="handleTabRightIcon">
						<text class="iconfont icon-size" :style="handleIsShowNavTab > 0 ? handleShowNavTab : handleIconStyle">{{rightIcon}}</text>
					</view>
					<view v-if="rightIconTwo">
						<text class="iconfont icon-size" :style="handleIsShowNavTab > 0 ? handleShowNavTab : handleIconStyle">{{rightIconTwo}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: String,
			leftIcon: {
				type: String,
				default: ''
			},
			title: {
				type: [String, Boolean],
				default: false
			},
			navTabList: {
				type: [String, Boolean],
				default: false
			},
			showNavTabList: {
				type: Boolean,
				default: false
			},
			rightIcon: {
				type: String,
				default: ''
			},
			rightIconTwo: {
				type: String,
				default: ''
			},
			startScroll: {
				type: [String, Number],
				default: 0
			},
			endScroll: {
				type: [String, Number],
				default: 690
			},
			current: {
				type: [String, Number],
				default: 0
			},
			scrollTop: {
				type: [String, Number],
				default: 0
			}
		},
		data() {
			return {
				statusBarHeight: 0,
				navBarHeight: 0
			}
		},
		mounted() {
			let statusBarH = uni.getSystemInfoSync();
			this.statusBarHeight = statusBarH.statusBarHeight;
			this.navBarHeight = this.statusBarHeight + uni.upx2px(90)
		},
		computed: {
			handleIconStyle() {
				return `background-color:rgb(0,0,0,.5);color:#fff;border-radius: 100%;padding:0 0rpx 0 0rpx;`
			},
			handleIsShowNavTab() {
				let start = uni.upx2px(this.startScroll);
				let end = uni.upx2px(this.endScroll);
				let H = end - start;
				let num = 0;
				if (this.scrollTop > start) {
					num = (this.scrollTop - start) / H
				}
				return num > 1 ? 1 : num
			},
			handleNavBarStyle() {
				return `background-color: rgba(255,255,255,${this.handleIsShowNavTab});`
			},
			handleShowNavTab() {
				if (this.handleIsShowNavTab > 0) {
					this.showNavTabList = true;
					this.title = this.title;
					return `color:rgba(0,0,0,${this.handleIsShowNavTab});`
				}
				this.showNavTabList = false;
				this.title = false;
				return 'color:#FFFFFF;'
			}
		},
		methods: {
			handleTapBack() {
				uni.navigateBack();
			},
			handleChangeTab(index) {
				this.$emit('change', index)
			},
			handleTabRightIcon(){
				this.$emit('click')
			}
		}
	}
</script>

<style scoped>
	.icon-size {
		font-size: 48rpx;
	}
</style>
