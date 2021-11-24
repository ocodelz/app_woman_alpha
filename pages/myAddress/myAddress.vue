<template>
	<view class="w-100 flex align-center justify-center flex-column">
		<view class="border-bottom py-1" v-if="list.length" v-for="(item,index) in list" :key="index" style="width: 94%;">
			<view @click="handleUpdateAddress(item,0)">
				<view class="flex align-center">
					<u-tag text="默认" type="error" mode="dark" v-if="item.is_default === true" size="mini" />
					<u-tag :text="item.lable" type="primary" mode="dark" v-if="item.lable" size="mini" :class="item.is_default === true ? 'ml-1':''"></u-tag>
					<text class="font-sm text-muted ml-1">{{item.location}}</text>
				</view>
				<view class="flex justify-between">
					<text class="font font-weight-bold">{{item.detailed_address}}</text>
					<!-- <u-icon name="edit-pen" size="32 " color="#000" ></u-icon> -->
					<text @click.stop="handleUpdateAddress(item,1)" class="iconfont">&#xe61e;</text>
				</view>
				<view class="font-sm text-muted flex">
					<view style="width: 130rpx;" class="u-line-1">
						<text>{{item.recive_man}}</text>
					</view>
					<view class="flex-1">
						<text class="ml-5">{{item.phone.replace(/^(\d{3})\d{4}(\d+)/, '$1****$2')}}</text>
					</view>
				</view>
			</view>
		</view>
		<view v-if="list.length == 0" class="flex align-center flex-column justify-center w-100" :style="'height:'+wrapHeight+'px'">
			<u-image src="/static/image/user/myaddress.png" width="200" height="200"></u-image>
			<text>您还没有收货地址哦！</text>
			<u-button hover-class="none" style="background-color: #fc979f;margin-top: 20rpx;color: #fff;" shape="circle" @click="handleTabNewAddress">新建地址</u-button>
		</view>
		<view v-if="list.length !== 0" class="position-fixed border" style="bottom: 90rpx; width: 94%;">
			<u-button @click="handleTapNewAddress" type="error" shape="circle" class="font-weight-bold">+ 新建收货地址</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				wrapHeight: 0,
				navStatusBarHeight: 0,
				list: [],
				p_id: ''
			}
		},
		onLoad(e) {
			let res = uni.getSystemInfoSync();
			this.wrapHeight = uni.upx2px(res.screenHeight);
		},
		onShow() {
			uni.getStorage({
				key: 'user_login',
				success: res => {
					this.p_id = res.data.PregnantID;
					this.handleGetAddress(this.p_id);
				}
			})
		},
		methods: {
			handleTabNewAddress() {
				this.$u.route('/pages/newShippingAddress/newShippingAddress')
			},
			handleGetAddress(p_id) {
				this.$u.post('/GetAddress', {
					p_id: p_id
				}).then(res => {
					if (res.code == 200 && res.data !== null) {
						for (let item of res.data) {
							if (item.is_default == 'True') {
								item.is_default = true;
							} else if (item.is_default == 'False') {
								item.is_default = false;
							}
						}
						this.list = res.data;
					} else {
						this.list = [];
					}
				})
			},
			handleUpdateAddress(item,state) {
				if(state == 0){
					uni.$emit('address',item);
					uni.navigateBack();
				}else{
					this.$u.route('/pages/newShippingAddress/newShippingAddress?state=1&detail=' + JSON.stringify(item))
				}
			},
			handleTapNewAddress() {
				this.$u.route('/pages/newShippingAddress/newShippingAddress');
			}
		}
	}
</script>

<style scoped>

</style>
