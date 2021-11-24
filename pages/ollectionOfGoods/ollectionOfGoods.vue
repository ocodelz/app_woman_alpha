<template>
	<view class="wrap">
		<scroll-view scroll-y="true" style="height: calc(100vh);">
			<view class="mt-2 w-100 bg-white" style="border-radius: 24rpx;">
				<view class="flex w-100" v-for="(item,index) in collection" :key="index">
					<view class="flex align-center justify-center" style="width: 230rpx;height: 220rpx;">
						<u-image width="200" height="200" border-radius="14" :src="item.picture[0]"></u-image>
					</view>
					<view class="flex flex-column mt-4 ml-2 flex-1 borderBottom">
						<text class="font-sm">{{item.ename}}</text>
						<text class="text-danger">￥{{item.e_buy_price}}</text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				collection: []
			}
		},
		onLoad(e) {
			if(e.collection){
				this.collection = JSON.parse(e.collection);
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.wrap{
		width: 100%;
		height: calc(100vh);
		background-color: #e3e3e3;
	}
	.borderBottom:not(last-child){
		border-bottom: 1rpx solid #e3e3e3;
	}
</style>
