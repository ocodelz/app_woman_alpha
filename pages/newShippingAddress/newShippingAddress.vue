<template>
	<view class="wrap">
		<u-navbar :is-back="false" title="" :background="background">
			<view class="flex  align-center w-100 text-white" :class="state == 1 ? 'justify-between' : 'justify-center'">
				<view class="ml-2">
					<u-icon name="arrow-left" @click="handleTapBack" color="#fff" size="42"></u-icon>
				</view>
				<view class="font-md" :class="state == 1 ? 'ml-2' : 'flex flex-1 justify-center'">
					<text>{{title}}</text>
				</view>
				<view class="mr-2" v-if="state == 1" @click="handleDelAddress">
					<text>删除</text>
				</view>
			</view>
		</u-navbar>
		<view class="flex align-center justify-center flex-column bg-white mb-3" style="width: 100%; border-bottom-left-radius: 25rpx;border-bottom-right-radius: 25rpx;">
			<view class="flex align-center border-bottom py-2" style="width: 94%;">
				<text>收货人</text>
				<u-input v-model="form.recive_man" style="margin-left: 30rpx;" placeholder="请填写收货人姓名"></u-input>
				<u-icon name="man-add" color="#ccc" size="28"></u-icon>
				<text class="text-muted ml-1">通讯录</text>
			</view>
			<view class="flex align-center border-bottom py-2" style="width: 94%;">
				<text>手机号码</text>
				<u-input v-model="form.phone" style="margin-left: 30rpx;" placeholder="请填写收货人手机号"></u-input>
			</view>
			<view class="flex align-center border-bottom py-2" style="width: 94%;">
				<text>所在地区</text>
				<u-input v-model="form.location" style="margin-left: 30rpx;" placeholder="省市区县乡镇等"></u-input>
				<view @click="handleLocation">
					<u-icon name="map-fill" color="#ccc" size="28"></u-icon>
					<text class="text-muted ml-1">定位</text>
				</view>
			</view>
			<view class="flex align-center border-bottom py-2" style="width: 94%;">
				<text>详细地址</text>
				<u-input v-model="form.detailed_address" style="margin-left: 30rpx;" placeholder="街道楼牌号等" @input="getLikePos"
				 @focus="keyboardheightchange" @blur="handleBlur"></u-input>
			</view>
		</view>
		<scroll-view scroll-y="true" style="height: 400rpx;margin-top: -30rpx;background-color: #f3f3f3;" v-if="isSearch == true">
			<view class="flex border-bottom p-1 w-100" v-for="(item,index) in searchList" :key="index">
				<u-icon name="map" size="32" color="#ccc"></u-icon>
				<view class="flex pl-1 flex-column w-100" @click="handleTapSearchItem(item)">
					<text class="font">{{item.title}}</text>
					<text class="font-sm">{{item.address}}</text>
				</view>
			</view>
		</scroll-view>
		<view class="flex flex-column bg-white p-2" style="border-radius: 25rpx;">
			<view class="flex border-bottom py-2">
				<text>标签</text>
				<view :class="form.lable == item ? 'active flex border' : 'flex border'" v-for="(item,index) in list" :key="index"
				 style="border-radius: 100rpx;height: 40rpx;margin-left: 70rpx;" @click="handleTapTag(index,item)">
					<text class="px-4">{{item}}</text>
				</view>
			</view>
			<view class="flex align-center justify-between py-2 bg-white">
				<view class="flex-column flex">
					<text>设置默认地址</text>
					<text>提醒: 每次下单会默认推荐使用该地址</text>
				</view>
				<u-switch v-model="form.is_default" @change="handleChangeSwitch"></u-switch>
			</view>
		</view>
		<view class="flex align-center position-fixed justify-center w-100" style="bottom: 100rpx;">
			<u-button type="error" shape="circle" style="width: 94%;" @click="handleSubmitAddress">保存</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					background: '#fc979f'
				},
				region: '',
				current: -1,
				isSearch: false,
				form: {
					id: '',
					p_id: '',
					location: '',
					detailed_address: '',
					is_default: false,
					recive_man: '',
					phone: '',
					lable: ''
				},
				searchList: [],
				list: ['家', '公司', '学校'],
				title: '新建收货人',
				state: 0
			}
		},
		onLoad(e) {
			if (e.detail) {
				this.form = JSON.parse(e.detail);
				this.state = e.state;
				this.title = '编辑收货人'
			}
			this.getLocation();
		},
		onPageScroll(e) {
			console.log(e);
			if (e.scrollTop > 10 || e.scrollTop == 0) {
				this.isSearch = false;
			}
		},
		methods: {
			handleTapBack() {
				uni.navigateBack();
			},
			handleDelAddress() {
				this.$u.post('/DeteleAddress', {
					id: this.form.id
				}).then(res => {
					console.log(JSON.stringify(res));
					uni.showToast({
						title: '删除成功',
						icon: 'none'
					})
					uni.navigateBack();
				}).catch(err => {
					uni.showToast({
						title: '删除失败',
						icon: 'none'
					})
				})
			},
			handleTapTag(index, item) {
				this.current = index;
				this.form.lable = item;
			},
			handleChangeSwitch(e) {
				this.form.is_default = e;
			},
			getLocation() {
				uni.request({
					url: 'https://apis.map.qq.com/ws/location/v1/ip?&key=WN3BZ-VDYCG-UDCQX-IR2KI-ISLM7-WOB2E',
					success: (res) => {
						// console.log(res);
						this.region = res.data.result.ad_info.city;
					}
				})
			},
			handleSubmitAddress() {
				uni.getStorage({
					key: 'user_login',
					success: (res) => {
						this.form.p_id = res.data.PregnantID;
						this.$u.post('/UpdateAddress', this.form).then(res => {
							if (res.code == 200) {
								uni.showToast({
									title: res.info,
									icon: 'none'
								})
								uni.navigateBack();
							}
						}).catch(err => {
							console.log(err);
						})
					}
				})
			},
			handleLocation() {
				this.$u.route('/pages/locationAddress/locationAddress');
			},
			getLikePos() {
				uni.request({
					url: 'https://apis.map.qq.com/ws/place/v1/suggestion/' +
						'?region=' + this.region + '&keyword=' + this.form.detailed_address +
						'&key=WN3BZ-VDYCG-UDCQX-IR2KI-ISLM7-WOB2E',
					success: (res) => {
						if (res.data.status == 0 && this.form.detailed_address !== ' ') {
							this.isSearch = true;
							this.searchList = res.data.data;
						} else {
							this.isSearch = false;
						}
					}
				})
			},
			handleTapSearchItem(item) {
				this.isSearch = false;
				this.form.detailed_address = item.title + item.address;
			},
			keyboardheightchange(e) {
				console.log(e);
			}
		}
	}
</script>

<style scoped lang="scss">
	.wrap {
		background-color: #e3e3e3;
		height: 100vh;
	}

	.active {
		background-color: #007AFF;
		color: #fff;
	}
</style>
