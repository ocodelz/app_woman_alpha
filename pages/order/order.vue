<template>
	<view class="wrap">
		<u-navbar title="填写订单" :background="background" back-icon-color="#fff" title-color="#fff"></u-navbar>
		<view class="w-100 flex align-center justify-center flex-column">
			<view class="bg-white w-100 flex align-center justify-center">
				<view class="py-2" v-if="address.length" style="width: 94%;">
					<view class="flex align-center pb-2">
						<u-tag text="默认" type="error" mode="dark" v-if="address[0].is_default === true" size="mini" />
						<u-tag :text="address[0].lable" type="primary" mode="dark" v-if="address[0].lable" size="mini" :class="address[0].is_default === true ? 'ml-1':''"></u-tag>
						<text class="font-sm text-muted ml-1">{{address[0].location}}</text>
					</view>
					<view class="flex justify-between pb-1">
						<text class="font font-weight-bold">{{address[0].detailed_address}}</text>
						<u-icon name="arrow-right" size="32 " color="#ccc" @click="handleTapMyAddress"></u-icon>
					</view>
					<view class="font-sm flex">
						<text class="u-line-1">{{address[0].recive_man}}</text>
						<text class="ml-2">{{address[0].phone.replace(/^(\d{3})\d{4}(\d+)/, '$1****$2')}}</text>
					</view>
				</view>
			</view>
			<view class="bg-white w-100 flex justify-center mt-2">
				<view class="py-2 flex  bg-white" style="width: 94%;">
					<u-image :src="dataInfo.picture[0]" width="200" height="200" border-radius="14"></u-image>
					<view class="flex-1 ml-2 flex flex-column pt-2">
						<text class="u-line-1">{{ename}}</text>
						<view class="flex justify-between">
							<view class="flex align-center">
								<text class="font-sm text-red font-weight-bold">￥</text>
								<text class="text-red font-md font-weight-bold">{{dataInfo.e_buy_price.toFixed(2)}}</text>
							</view>
							<u-number-box v-model="num" @change="handleValChange" min="1"></u-number-box>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view v-if="address.length == 0" class="flex align-center flex-column justify-center w-100" :style="'height:'+wrapHeight+'px'">
			<u-image src="/static/image/user/myaddress.png" width="200" height="200"></u-image>
			<text>您还没有收货地址哦！</text>
			<u-button hover-class="none" style="background-color: #fc979f;margin-top: 20rpx;color: #fff;" shape="circle" @click="handleTabNewAddress">新建地址</u-button>
		</view>
		<u-popup v-model="show" border-radius="22" width="686" height="240" mode="center" :mask-close-able="false">
			<view class="flex align-center justify-center flex-column" style="height: 240rpx;">
				<text>你还没有收货地址哦，赶快设置一个吧</text>
				<view class="flex align-center justify-center mt-4">
					<u-button @click="handleTapCancel" shape="circle" type="error" plain style="height: 55rpx;width: 200rpx;font-size: 24rpx;">取消</u-button>
					<u-button @click="handleSetUp" shape="circle" type="error" style="height: 55rpx;width: 200rpx;font-size: 24rpx;margin-left: 20rpx;">去设置</u-button>
				</view>
			</view>
		</u-popup>
		<view class="position-fixed bottom-0 flex justify-center w-100 bg-white pt-2" style="height: 140rpx;">
			<view style="height: 80rpx;width: 96%;" class="flex align-center justify-between border-bottom">
				<view class="flex align-center ml-2 mt-2">
					<text class="font-sm text-red font-weight-bold">￥</text>
					<text class="text-red font-md font-weight-bold">{{result.toFixed(2)}}</text>
				</view>
				<view class="flex justify-end mr-2">
					<u-button @click="handleSubmit" type="error" shape="circle" style="width: 200rpx;height: 70rpx;">提交订单</u-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address: [],
				show: false,
				wrapHeight: 0,
				background: {
					background: '#fc979f'
				},
				p_id: '',
				dataInfo: {},
				ename: '',
				num: '',
				result: '',
				equipment_id: '',
				state: 1
			}
		},
		onLoad(e) {
			let data = uni.getStorageSync('address');
			this.address.push(data.address);
			this.dataInfo = JSON.parse(data.dataInfo);
			this.num = data.num;
			this.equipment_id = data.equipment_id;
			this.ename = data.ename
			let res = uni.getSystemInfoSync();
			this.handleIsPopup();
			this.wrapHeight = uni.upx2px(res.screenHeight);
			uni.$on('address', res => {
				this.address = [];
				this.address.push(res)
			})
		},
		onShow() {
			this.result = this.num * this.dataInfo.e_buy_price;
		},
		methods: {
			handleIsPopup() {
				this.address.length === 0 ? this.show = true : this.show = false;
			},
			handleTapMyAddress() {
				this.$u.route('/pages/myAddress/myAddress')
			},
			handleValChange() {
				this.result = this.num * this.dataInfo.e_buy_price;
			},
			handleSubmit() {
				let obj = {
					p_id: this.p_id,
					p_name: this.address[0].recive_man,
					commodity_id: this.equipment_id,
					commodity_code: this.dataInfo.notice_id,
					commodity_name: this.ename,
					buy_price: this.dataInfo.e_buy_price,
					account_price: this.result,
					count: this.num,
					phone: this.address[0].phone,
					receive_address: this.address[0].location + this.address[0].detailed_address,
					mail_address: ''
				}
				console.log(obj);
				this.$u.post('/UploadOrder', obj).then(res => {
					console.log(JSON.stringify(res));
				})
			}
		}
	}
</script>

<style scoped>
	.wrap {
		height: 100vh;
		background-color: #e3e3e3;
	}
</style>
