<template>
	<view>
		<u-cell-group :border="false">
			<block v-for="(item,index) in list" :key="index">
				<u-cell-item :title-style="titleStyle" :center="true" icon-size="44" :arrow="item.arrow" :icon="item.icon" :title="item.title"
				 @click="openWin(item)" :value="index == 4 ? 'V' + version : ''"></u-cell-item>
			</block>
		</u-cell-group>
		<u-modal title="版本信息" v-model="show" confirm-color="#000">
			<scroll-view v-if="updateVersion.length > 0" scroll-y="true" style="height: 700rpx;">
				<view class="flex align-center justify-center" v-for="(item,index) in updateVersion" :key="index">
					<view class="flex flex-column" style="width: 560rpx;border-bottom:2rpx solid #dee2e6 ;">
						<text>更新版本: {{item.version}}</text>
						<text>更新时间: {{item.update_time}}</text>
						<text class="text-danger">更新内容:</text>
						<text class="text-danger">{{item.update_content}}</text>
					</view>
				</view>
			</scroll-view>
			<view v-else>
				<u-empty mode="data"></u-empty>
			</view>
		</u-modal>
		<!-- <u-modal title="选择您的血压类型" v-model="isSelect" confirm-color="#000">
			<scroll-view scroll-y="true" style="height: 200rpx;">
				<u-radio-group v-model="val" class="flex flex-column pl-3" @change="radioGroupChange">
					<u-radio v-for="(item, index) in itemList" :key="index" :name="item.name" :disabled="item.disabled">
						{{item.name}}
					</u-radio>
				</u-radio-group>
			</scroll-view>
		</u-modal> -->
		<u-popup mode="center" v-model="errShow" width="700" height="700" border-radius="12" safe-area-inset-bottom @close="handleClosePopup">
			<text class="flex align-center justify-center font-md font-weight-bold mt-2">请准确填写您的异常信息</text>
			<scroll-view scroll-y="true" style="height: 500rpx;">
				<view class="flex flex-column align-center justify-center mt-3">
					<view class="flex align-center justify-center" style="width: 650rpx;">
						<u-input v-model="abnormal" type="textarea" border height="130" auto-height placeholder="请输入异常信息" />
					</view>
				</view>
				<view class="flex flex-wrap ml-2">
					<view style="width: 160rpx;" class="flex align-end justify-center pt-2 position-relative" v-for="(item,index) in imglist"
					 :key="index">
						<u-image :src="item" width="150" height="150" @click="preview(item)"></u-image>
						<view class="flex align-center justify-center rounded-circle" @click="deleteImage(item)" style="width: 30rpx;height: 30rpx;position: absolute;top: 10rpx;right: 0;background-color: rgba(0,0,0,.5);">
							<u-icon name="close" size="20" color="#fff"></u-icon>
						</view>
					</view>
					<view v-if="imglist.length < 9" style="width: 160rpx;" class="flex align-center justify-center mt-2" @click="chooseImage">
						<view class="flex align-center justify-center bg-light rounded" style="width: 150rpx;height: 150rpx;">
							<text class="text-light-muted" style="font-size: 150rpx;">+</text>
						</view>
					</view>
				</view>
			</scroll-view>
			<view class="flex align-center justify-center">
				<u-button type="error" size="medium" @click="handleSubmitErrInfo">提交</u-button>
			</view>
		</u-popup>
		<u-tabbar :list="tabBer" :mid-button="$store.state.midBtn" :active-color="activeColor" :inactive-color="inactiveColor"></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				action: '',
				filesArr: [],
				errShow: false,
				// isSelect: false,
				inactiveColor: '#000',
				activeColor: '#f07373',
				abnormal: '',
				uploadTime: '',
				imglist: [],
				uploadImgUrl: [],
				list: [{
						title: "设备管理",
						icon: '/static/image/user/shebeiguanli.png',
						arrow: true
					},
					{
						title: "个人信息",
						icon: '/static/image/user/gerenxinxi.png',
						arrow: true
					},
					{
						title: "探头连接设置",
						icon: '/static/image/user/tantoulianjie.png',
						arrow: true
					},
					{
						title: "修改密码",
						icon: '/static/image/user/updatepw.png',
						arrow: true
					},
					{
						title: "版本信息",
						icon: '/static/image/user/verision.png',
						arrow: true
					},
					{
						title: "升级检测",
						icon: '/static/image/user/verision.png',
						arrow: true
					},
					// {
					// 	title: "选择血压类型",
					// 	icon: '/static/image/user/verision.png',
					// 	arrow: true
					// },
					{
						title: "上传异常信息",
						icon: '/static/image/user/upload.png',
						arrow: true
					},
					{
						title: "地址信息",
						icon: '/static/image/user/myaddress.png',
						arrow: true
					},
					{
						title: "商城管理",
						icon: '/static/image/user/pricegl.png',
						arrow: true
					},
					{
						title: "退出当前账号",
						icon: '/static/image/user/tuichuzhanghao.png',
						arrow: false
					}
				],
				titleStyle: {
					marginLeft: '10rpx',
					fontSize: '32rpx'
				},
				version: '',
				updateVersion: [],
				p_id: ''
			}
		},
		onShow() {
			uni.getStorage({
				key: 'user_login',
				success: (res => {
					this.p_id = res.data.PregnantID;
				})
			})
			this.$store.commit('tabBerList')
		},
		mounted() {
			plus.runtime.getProperty(plus.runtime.appid, (v) => {
				this.version = v.version;
			})
		},
		computed: {
			tabBer() {
				return this.$store.state.tabBarlist
			}
		},
		methods: {
			updateCheck() {
				this.$u.route('pages/update/index')
			},
			openVersion() {
				this.$u.get('/GetAppVersion', {
					version: ""
				}).then(res => {
					// console.log(res)
					this.show = true;
					this.updateVersion = res.data;
					// uni.hideTabBar();
				}).catch(e => {
					console.log(e);
					uni.showToast({
						title: '未知错误',
						icon: 'none'
					})
				})
			},
			// handleSelectXyType() {
			// 	this.isSelect = true;
			// 	// uni.hideTabBar();
			// },
			radioGroupChange(e) {
				uni.setStorageSync('type', e);
			},
			chooseImage() {
				uni.chooseImage({
					sizeType: ['compressed'],
					count: 9 - this.imglist.length,
					success: (chooseImageRes) => {
						this.imglist = [...this.imglist, ...chooseImageRes.tempFilePaths]
					}
				});
			},
			preview(item) {
				uni.previewImage({
					current: item,
					urls: this.imglist
				})
			},
			deleteImage(item) {
				uni.showModal({
					content: '是否要删除该图片?',
					success: (res) => {
						if (res.confirm) {
							let index = this.imglist.findIndex(url => url === item);
							if (index !== -1) {
								this.imglist.splice(index, 1)
							}
						}
					}
				})
			},
			handleClosePopup() {
				this.imglist = [];
				this.abnormal = '';
			},
			handleSubmitErrInfo() {
				for (let i = 0; i < this.imglist.length; i++) {
					uni.uploadFile({
						url: 'http://mediasvr.cn.utools.club/batch/upload',
						filePath: this.imglist[i],
						name: 'file',
						formData: {
							'userid': this.p_id
						},
						success: (uploadFileRes) => {
							let obj = JSON.parse(uploadFileRes.data);
							let ret = obj.result;
							this.uploadImgUrl = this.uploadImgUrl.concat(ret);
						}
					});
				}
				uni.showModal({
					content: '确定要上传吗?',
					success: (res) => {
						if (res.confirm) {
							const res = uni.getSystemInfoSync();
							let data = {
								p_id: this.p_id,
								brand: res.brand,
								model: res.model,
								system: res.system,
								version: res.version,
								abnormal: this.abnormal,
								picture: this.uploadImgUrl.join(';')
							}
							console.log(data);
							this.$u.post('/UpdateMobileInfo', data).then(res => {
								console.log(JSON.stringify(res));
								uni.showToast({
									title: res.info,
									icon: 'none'
								})
								this.abnormal = '';
								this.errShow = false;
								this.imglist = [];
								this.uploadImgUrl = [];
							}).catch(err => {
								uni.showToast({
									title: err.info,
									icon: 'none'
								})
								this.abnormal = '';
								this.errShow = false;
								this.imglist = [];
								this.uploadImgUrl = [];
							})
						}
					}
				})
			},
			openWin(item) {
				switch (item.title) {
					case '设备管理':
						this.$u.route('pages/equipmentManagement/equipmentManagement')
						break;
					case '个人信息':
						this.$u.route('pages/pregnantWomanInformation/pregnantWomanInformation')
						break;
						// case '监护设置':
						// 	this.$u.route('pages/monitoringSettings/monitoringSettings')
						// 	break;
					case '探头连接设置':
						this.$u.route('pages/probeConnection/probeConnection')
						break;
					case '退出当前账号':
						uni.showModal({
							title: '提示',
							content: '确定要退出吗?',
							success: (res) => {
								if (res.confirm) {
									uni.reLaunch({
										url: '../../login/login'
									})
								}
							}
						})
						break;
					case '修改密码':
						this.$u.route('pages/changePassword/changePassword');
						break;
					case '版本信息':
						this.openVersion();
						break;
					case '升级检测':
						this.updateCheck();
						break;
						// case '选择血压类型':
						// 	this.handleSelectXyType();
						// 	break;
						break;
					case '商城管理':
						this.$u.route('/pages/mallManagement/mallManagement');
						break;
					case '地址信息':
						this.$u.route('/pages/myAddress/myAddress');
						break;
					case '上传异常信息':
						this.errShow = true;
				}
			}
		}
	}
</script>

<style>

</style>
