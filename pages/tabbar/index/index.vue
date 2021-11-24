<template>
	<view class="flex flex-column w-100" :style="'height:'+pageHeight+'px'">
		<u-navbar title="首页" title-color="#fff" :is-back="false" :background="background" :border-bottom="false"></u-navbar>
		<view class="container-box flex flex-column">
			<!-- 顶部 -->
			<view class="wrap" style="height: 60rpx;">
				<u-row gutter="16" justify="around" align="center">
					<u-col span="3" text-align="center ">
						<view class="text-white">
							<text>身 高(mm)</text>
							<view>{{ personalInformation.translation }}</view>
						</view>
					</u-col>
					<u-col span="3" text-align="center ">
						<view class="text-white">
							<navigator open-type="navigate" url="../../test/txjh">
								<text>体 重(g)</text>
								<view>{{ personalInformation.bodyWeight }}</view>
							</navigator>
						</view>
					</u-col>
					<u-col span="3" text-align="center">
						<view class="text-white">
							<text class="font-sm">双路径(cm)</text>
							<view>{{ personalInformation.doubleDiameter }}</view>
						</view>
					</u-col>
				</u-row>
			</view>
			<!-- body -->
			<view class="mt-2 u-relative">
				<view class="u-absolute u-flex u-col-center u-row-center" @click="handleShare" style="bottom: 8rpx;background-color: #f9e9d9;width: 130rpx;height: 42rpx;border-top-right-radius: 25rpx;border-bottom-right-radius: 25rpx;box-shadow: 0px 3px 2px #e6b1a5;">
					<text class="font-small" style="color: #c4a397;">分享好友</text>
					<view class="u-flex align-center u-row-center" style="background-color: #e19d9f;width: 28rpx;height: 28rpx; border-radius: 100%;">
						<!-- <u-icon name="fenxiang" custom-prefix="custom-icon" color="#f9e9d9" size="30"></u-icon> -->
						<text class="iconfont font" style="color: #f9e9d9;">&#xe6d1;</text>
					</view>
				</view>
				<view class="u-flex w-100 align-center u-row-center">
					<view class="bg-white u-flex align-center u-row-center" style="width: 151rpx;height: 150rpx;border-radius: 100%;box-shadow: 0px 3px 2px #b89f98 ;">
						<u-image shape="circle" width="150rpx" height="150rpx" src="/static/image/index/taier.png"></u-image>
					</view>
				</view>
				<view @click="handleReminderThisWeek('/pages/tabbar/pregnancyKnowledge/pregnancyKnowledge')" class="u-absolute right-0 u-flex align-center u-row-center"
				 style="top: 54rpx;background-color: #f9e9d9;width: 130rpx;height: 42rpx;border-top-left-radius: 25rpx;border-bottom-left-radius: 25rpx;box-shadow: 0px 3px 2px #e6b1a5;">
					<view class="u-flex align-center u-row-center" style="background-color: #e19d9f;width: 28rpx;height: 28rpx; border-radius: 100%;">
						<!-- <u-icon name="tixing1" custom-prefix="custom-icon" color="#f9e9d9" size="30"></u-icon> -->
						<text class="iconfont font" style="color: #f9e9d9;">&#xe64f;</text>
					</view>
					<text class="font-small" style="color: #c4a397;">本周提醒</text>
				</view>
			</view>
			<!-- 时间 -->
			<view class="u-flex align-center u-row-center mt-2">
				<view class="u-flex align-center u-row-center" style="background-color: #b89f98;border-radius: 12rpx;width: 120rpx;height: 40rpx;">
					<text class="text-white font-sm">{{ personalInformation.week }}周</text>
				</view>
			</view>
			<!-- 预产期 -->
			<view class="w-100 flex align-center justify-center">
				<view class="u-flex u-row-center mt-1" style="width: 400rpx;" @click="handleShowUPicker">
					<u-picker mode="time" title="请选择预产期" v-model="isShow" @confirm="handleConfirm"></u-picker>
					<text style="color: #786352;">预产期:{{ personalInformation.birthday }}</text>
				</view>
			</view>
			<!-- 注意事项 -->
			<view class="w-100 u-flex u-row-center py-1 flex flex-row">
				<view class="flex flex-row" style="width: 95%;">
					<text class="u-line-3" style="width: 100%;height: 100%; color: #877468;">{{ personalInformation.attention }}</text>
				</view>
			</view>
		</view>
		<!-- 列表 -->
		<view class=" flex flex-row align-center justify-center">
			<view class="flex align-center justify-center flex-wrap" style="width:95%;">
				<view v-for="(item, index) in categoryList" :key="index" class="pl-3 flex align-center  mt-2 border" style="background-color: #fafafa;height: 100rpx;"
				 :class="index > 3 ?'one-list':'home-list two-list'" @click="openWin(index)">
					<u-image width="80" height="80" shape="circle" :mode="index == 3 ? 'aspectFit' : 'aspectFill'" :src="item.icon"></u-image>
					<view class="flex flex-column pl-2">
						<text class="font-weight-bold">{{ item.title }}</text>
						<text class="pt-2 font-sm" style="color: #adadad;">{{ item.info }}</text>
					</view>
				</view>
			</view>
		</view>
		<u-popup mode="center" v-model="show" width="700" height="500" border-radius="12" safe-area-inset-bottom
		 :mask-close-able="false">
			<text class="flex align-center justify-center font-md font-weight-bold mt-2">以下设备即将过期</text>
			<scroll-view scroll-y="true" style="height: 300rpx;">
				<view v-for="(item,index) in list" :key="index" class="mt-2">
					<view class="flex flex-column ml-3 mb-2">
						<text>设备名称: {{item.e_name}}</text>
						<text>设备类型: {{item.e_type}}</text>
						<text>到期时间: {{item.return_time.substr(0,10)}}</text>
					</view>
				</view>
			</scroll-view>
			<view class="flex align-center justify-center mt-2">
				<u-button type="error" size="medium" @click="handleTabBtn">我知道了</u-button>
			</view>
		</u-popup>
		<u-mask :show="operation" @click="operation = false">
			<view class="flex align-center justify-center position-fixed w-100" style="bottom: 200rpx;z-index: 999999;"
			 @tap.stop>
				<view class="ml-2 flex align-center flex-column justify-center" @click="handleTapTabBar('yfq')">
					<u-image src="/static/image/tabbar/yfq.png" width="100" height="100" shape="circle"></u-image>
					<text>孕妇圈</text>
				</view>
				<view class="ml-2 flex align-center flex-column justify-center" @click="handleTapTabBar('yqzs')">
					<u-image src="/static/image/tabbar/yqzs.png" width="100" height="100" shape="circle"></u-image>
					<text>孕期知识</text>
				</view>
			</view>
		</u-mask>
		<u-tabbar @change="handleTabBarChange" :list="tabBer" :mid-button="$store.state.midBtn" :active-color="activeColor"
		 :inactive-color="inactiveColor"></u-tabbar>
	</view>
</template>
<script>
	import tool from '../../../utils/util.js';
	export default {
		data() {
			return {
				background: {
					background: '#fc979f'
				},
				operation: false,
				inactiveColor: '#000',
				activeColor: '#f07373',
				pageHeight: 0,
				// 时间选择器显示状态
				isShow: false,
				isBottom: false,
				show: false,
				// 胎儿信息
				personalInformation: {
					// 身高
					translation: '',
					// 体重
					bodyWeight: '',
					// 双路径
					doubleDiameter: '',
					// 预产期
					birthday: '',
					// 注意事项
					attention: '',
					id: '',
					// 周
					week: ''
				},
				/// 孕妇id
				preid: '',
				// 分类列表
				categoryList: [{
						icon: '/static/image/index/taixinjianhu.png',
						title: '胎心监护',
						info: '点击进行监护'
					},
					{
						icon: '/static/image/index/xuetangceliang.png',
						title: '血糖测量',
						info: '点击进行血糖测量'
					},
					{
						icon: '/static/image/index/xueyaceliang.png',
						title: '血压测量',
						info: '点击进行血压测量'
					},
					{
						icon: '/static/image/index/tizhongceliang.png',
						title: '体重测量',
						info: '点击进行体重测量'
					},
					{
						icon: '/static/image/index/bangzhu.png',
						title: '监护记录',
						info: '查看以往的胎心记录、血压、血糖测量结果'
					},
					{
						icon: '/static/image/index/bangzhu.png',
						title: '监护帮助',
						info: '如何操作、如何寻找胎心'
					}
				],
				list: []
			};
		},
		onLoad() {
			let pageHeight = uni.getSystemInfoSync()
			this.pageHeight = pageHeight.windowHeight;
			this.handleGetLocalStoragesTime();
			this.handleGetResult();
			// #ifndef H5
			plus.device.setVolume(0.5)
			// #endif 
		},
		onShow() {
			// 获取本地缓存 设备信息
			this.handleGetEquipmentLocalStorage().then(res => {
				this.preid = res.data.PregnantID;
				this.handleDeviceInformation(res.data.PregnantID);
			});
			// 孕期知识
			this.handleGetLocalStoragesYQ();
			this.$store.commit('tabBerList')
		},
		onHide() {
			this.operation = false;
		},
		computed: {
			tabBer() {
				return this.$store.state.tabBarlist
			}
		},
		methods: {
			handleTapTabBar(type) {
				if (type == 'yfq') {
					this.$u.route('/pages/tabbar/maternityCircle/maternityCircle')
				} else if (type == 'yqzs') {
					this.$u.route('/pages/tabbar/pregnancyKnowledge/pregnancyKnowledge')
				}
			},
			handleTabBarChange(index) {
				if (index === 2) {
					this.operation = true;
				}
			},
			// 条件
			handleGetResult() {
				this.$u.post('/GetResultParams', {
					name: '',
					jgpd: '',
					tstj: ''
				}).then(res => {
					let arr = res.data;
					uni.setStorageSync('result_storage', arr);
				})
			},
			// 分享
			handleShare() {
				uni.navigateTo({
					url: '../../download/download'
				})
			},
			// 获取孕期知识
			handleGetLocalStoragesYQ() {
				this.handleGetEquipmentLocalStorage().then(res => {
					this.personalInformation.week = Math.round(res.data.P_Now_Yunzhou);
					this.handleGrtPregnancyKnowledge();
				});
			},
			// 获取预产期
			handleGetLocalStoragesTime() {
				this.handleGetEquipmentLocalStorage().then(res => {
					this.personalInformation.birthday = res.data.P_Yuchanqi.replace(' 00:00:00', '');
				});
			},
			// 更改孕期时间
			handleUpdateTime() {
				this.$u
					.post('/UpdateYuChanQiByPreId', {
						pregnant_id: this.preid,
						yuchanqi: this.personalInformation.birthday
					})
					.then(res => {
						if (res.code == 200 && res.data == true) {
							this.handleGetEquipmentLocalStorage().then(res => {
								let obj = res.data;
								obj.P_Yuchanqi = this.personalInformation.birthday;
								uni.setStorageSync('user_login', obj);
							});
						}
					});
			},
			// 获取本地存储
			handleGetEquipmentLocalStorage() {
				return new Promise(function(resolve, reject) {
					uni.getStorage({
						key: 'user_login',
						success: res => {
							resolve(res);
						}
					});
				});
			},
			// 发起网络请求 获取设备信息
			handleDeviceInformation(y_id) {
				this.$u
					.post('/GetAllEquipmentsByPid', {
						pregnant_id: y_id
					})
					.then(res => {
						let _list = res.data;
						uni.setStorage({
							key: 'equipment_ids',
							data: _list
						})
						let time = tool.getFtSystemTime().substr(0, 10).replace(/-/g, '/');
						uni.getStorage({
							key: 'equipment_ids',
							success: res => {
								let arr = res.data,
									_arr = [];
								for (let item of arr) {
									let str = item.return_time.substr(0, 10);
									let date = new Date(str);
									date = new Date(date.setDate(date.getDate() + 1));
									str = date.getFullYear() + "/" + ((date.getMonth() + 1) > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() +
										1)) + "/" + (date.getDate() > 9 ? date.getDate() : "0" + date.getDate());

									if ((new Date(str) - new Date(time)) / (24 * 3600 * 1000) + 1 <= 3 && item.status == '已领用') {
										_arr.push(item)
										this.list = _arr;
										uni.setTabBarBadge({
											index: 3,
											text: '' + this.list.length
										})
										uni.setStorageSync('aboutToExpire', this.list)
										this.show = true;
										// uni.hideTabBar();
									}

									if (time == str && item.status == '已领用') {
										let obj = {
											e_id: item.equipment_id,
											lease_id: item.id,
											status: '已过期',
											r_time: item.return_time,
											r_days: item.rent_times,
											r_price: item.rent_price,
											r_deposit: item.rent_deposit,
											r_sum: item.rent_accountprice
										}
										this.$u.post('/UpdateEquipStatus', obj).then(res => {
											console.log(JSON.stringify(res));
										}).catch(err => {
											console.log(err);
										})
									}
								}
							}
						})
					});
			},
			// 发起网络请求 获取孕期知识
			handleGrtPregnancyKnowledge() {
				this.$u
					.post('/PregnancyKnowledge', {
						yunzhou: this.personalInformation.week
					})
					.then(res => {
						this.personalInformation.translation = res.data.Height;
						this.personalInformation.bodyWeight = res.data.Weight;
						this.personalInformation.doubleDiameter = res.data.DualPath;
						this.personalInformation.attention = res.data.Attention;
						this.personalInformation.id = res.data.ID;
					});
			},
			handleTabBtn() {
				this.show = false;
				// uni.showTabBar();
			},
			// 分发跳转事件
			openWin(index) {
				if (index == 0) {
					uni.navigateTo({
						url: '/pages/fetalHeartRateMonitoring/fetalHeartRateMonitoring'
					});
				} else if (index == 1) {
					uni.navigateTo({
						url: '/pages/bloodGlucoseTest/bloodGlucoseTest'
					});
				} else if (index == 2) {
					uni.navigateTo({
						url: '/pages/takeBloodPressure/takeBloodPressure'
					});
				} else if (index == 3) {
					uni.showToast({
						title: '暂未开放~',
						icon: 'none'
					});
				} else if (index == 4) {
					uni.navigateTo({
						url: '/pages/guardianshipRecord/guardianshipRecord'
					});
				} else if (index == 5) {
					uni.navigateTo({
						url: '/pages/custodyOrHelp/custodyOrHelp'
					});
				}
			},
			// 修改预产期弹出层显示状态
			handleShowUPicker() {
				this.isShow = true;
			},
			// 选择预产期时间
			handleConfirm(e) {
				let year = e.year;
				let month = e.month;
				let day = e.day;
				this.personalInformation.birthday = year + '-' + month + '-' + day;
				this.handleUpdateTime();
			},
			// 跳转孕期知识
			handleReminderThisWeek(url) {
				uni.switchTab({
					url: url
				});
			}
		}
	};
</script>
<style scoped lang="scss">
	.container-box {
		background: linear-gradient(180deg, #fc979f 0%, #fac6b6 49%, #fac6b6 51%, #fac6b6 100%);
	}

	.wrap {
		padding: 5rpx;
	}

	.two-list {
		width: 50%;
	}

	.one-list {
		width: 100%;
		border-radius: 16rpx;
	}

	.home-list:nth-of-type(2n+1) {
		border-right: 0;
		border-radius: 16rpx 0 0 16rpx;
	}

	.home-list:nth-of-type(2n) {
		border-left: 0;
		border-radius: 0 16rpx 16rpx 0;
	}
</style>
