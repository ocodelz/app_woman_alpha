<template>
	<view class="flex flex-column" :style="'height:'+pageHeight+'px'">
		<view style="margin: 120rpx auto 0rpx;">
			<view style=" margin-bottom:76rpx;">
				<text style="font-size: 36rpx;font-weight: 500;">*桓台远程监护管理平台-客户版*</text>
				<view class="flex justify-center">V{{version}}</view>
			</view>
			<view class="header">
				<image src="http://www.ajylive.cn/update/pwguardapp/timg.jpg"></image>
			</view>
			<view class="mt-5">
				<u-form :error-type="errorType" :model="form" ref="uForm">
					<u-form-item label="" prop="userNamePhone">
						<u-input type="number" v-model="form.userNamePhone" placeholder="请输入手机号" />
					</u-form-item>
					<u-form-item label="" prop="userPwdPhone">
						<u-input type="password" v-model="form.userPwdPhone" placeholder="请输入手机密码" />
					</u-form-item>
				</u-form>
			</view>
			<view class="flex justify-between mt-2 align-center">
				<!-- 手机登录 -->
				<!-- 	<view @click="handleSwitchLanding">
					<text class="font-sm" style="color: #909399;">手机登录</text>
				</view> -->
				<!-- 记住密码 -->
				<checkbox-group>
					<label @tap="handleRememberPw" class="font-sm flex align-center">
						<checkbox value="psw" :checked='rememberPw' color="#09CC86" />记住密码
					</label>
				</checkbox-group>
				<!-- 点击注册 -->
				<view class="ml-2" @click="handleRegister"><text class="font-sm" style="color: #1a1da0;">点我注册</text></view>
			</view>
		</view>
		<!-- 孕妇 非孕妇登录选项 -->
		<view class="flex align-center justify-center mt-4">
			<view class="flex-column align-center justify-center flex" :class="index == 0 ? 'mr-2' : 'ml-2'" v-for="(item,index) in imgList"
			 :key="index" @click="handleBtnClick(index)">
				<u-image :src="item.url" width="100rpx" height="100rpx" shape="circle" :class="current == index ? 'bord' : ''"></u-image>
				<text>{{item.txt}}</text>
			</view>
		</view>
		<!-- 用户服务协议 -->
		<view class="flex flex-row flex-wrap pl-5 pt-2 pr-5" style="color: #909399;">
			<view>
				登录既代表用户同意
				<text style="color: #f90;">用户协议、</text>
				<text style="color: #f90;">隐私政策</text>
				并授权使用其账号信息(如昵称、头像、收获地址等),以便进行统一管理
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rememberPw: true,
				errorType: ['toast'],
				version: '',
				imgList: [{
						url: '/static/image/login/woman.png',
						txt: '孕妇登录'
					},
					{
						url: '/static/image/login/yk.png',
						txt: '非孕妇'
					}
				],
				current: -1,
				form: {
					// 账号
					userName: '',
					userPwd: '',
					userNamePhone: '',
					userPwdPhone: ''
				},
				// 登陆方式
				// switchLanding: true,
				// 登陆按钮样式
				customStyle: {
					marginTop: '40rpx',
					width: '526rpx'
				},
				rules: {
					userNamePhone: [{
							required: true,
							message: '请输入手机号',
							trigger: ['change', 'blur']
						},
						{
							validator: (rule, value, callback) => {
								return this.$u.test.mobile(value);
							},
							message: '请输入合法的手机号',
							trigger: ['change', 'blur']
						}
					],
					userPwdPhone: [{
							required: true,
							message: '请输入手机密码',
							trigger: ['change', 'blur']
						},
						{
							max: 16,
							required: true,
							message: '请输入6-16位手机密码',
							trigger: ['change', 'blur']
						},
						{
							min: 6,
							required: true,
							message: '请输入6-16位手机密码',
							trigger: ['change', 'blur']
						}
					]
				},
				pageHeight: 0,
			};
		},
		onLoad() {
			let _self = this;
			let pageHeight = uni.getSystemInfoSync();
			_self.pageHeight = pageHeight.windowHeight;
		},
		mounted() {
			// #ifdef APP-PLUS
			plus.runtime.getProperty(plus.runtime.appid, (v) => {
				this.version = v.version;
			})
			// #endif
			let userPhone = uni.getStorageSync('userPhone');
			let userPw = uni.getStorageSync('userPw');
			uni.getStorage({
				key: 'user_login',
				success: (res) => {
					this.form.userNamePhone = res.data.P_Telephone
				}
			})
			if (userPw && userPw) {
				this.form.userNamePhone = userPhone;
				this.form.userPwdPhone = userPw;
			} else {
				this.form.userNamePhone = "";
				this.form.userPwdPhone = "";
			}
		},
		methods: {
			// 切换登陆方式
			// handleSwitchLanding() {
			// 	this.switchLanding = !this.switchLanding;
			// },
			// 登录按钮
			handleBtnClick(index) {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						this.current = index;
						uni.showLoading({
							title: '正在登录请稍后...',
						});
						let data = {
							account: this.form.userNamePhone,
							password: this.form.userPwdPhone,
							type: 2,
							type1: this.current
						}
						this.$u.post('/LoginInfoNew', data).then(res => {
							console.log(JSON.stringify(res));
							let obj = res.data;
							if (obj.P_Yuchanqi == null) {
								obj.P_Yuchanqi = '---'
							}
							uni.setStorage({
								key: 'user_login',
								data: obj
							});
							uni.setStorageSync('userType', obj.Type)
							if (this.rememberPw == true) {
								uni.setStorageSync('userPhone', this.form.userNamePhone)
								uni.setStorageSync('userPw', this.form.userPwdPhone)
							} else {
								uni.removeStorageSync('userPhone')
								uni.removeStorageSync('userPw')
							}
							if (res.code !== 200) {
								uni.showToast({
									title: res.info,
									icon: 'none'
								});
								// uni.hideLoading();
								return false;
							} else {
								if (uni.getStorageSync('userType') === '0') {
									this.$u.route({
										url: '/pages/tabbar/index/index',
										type: 'tab'
									});
								} else {
									this.$u.route({
										url: '/pages/tabbar/purchaseOrLease/purchaseOrLease',
										type: 'tab'
									});
								}

								// uni.hideLoading();
							}
						}).catch(err => {
							console.log(JSON.stringify(err));
							if (err.errMsg == 'request:fail abort statusCode:-1' && uni.getSystemInfoSync().platform == 'android') {
								uni.showModal({
									title: '无法登陆',
									showCancel: false,
									content: '请确认您的手机是否允许App使用网络\n查看方式:\n打开手机设置-找到孕婴安App-允许使用数据'
								})
							}
							if (err.errMsg == 'request:fail abort statusCode:-1' && uni.getSystemInfoSync().platform == 'ios') {
								uni.showModal({
									title: '无法登陆',
									showCancel: false,
									content: '请确认您的手机是否允许App使用网络\n查看方式:\n打开手机设置-找到孕婴安App-无线数据'
								})
							}
							uni.showToast({
								title: err
							})
						})
					}
				});
			},
			// 点击跳转注册页面
			handleRegister() {
				this.$u.route('/pages/register/register');
				uni.removeStorageSync('userPhone');
				uni.removeStorageSync('userPw');
			},
			handleRememberPw() {
				this.rememberPw = !this.rememberPw;
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		}
	};
</script>

<style scoped>
	.header {
		width: 161upx;
		width: 161upx;
		background: rgba(63, 205, 235, 0);
		box-shadow: 0upx 10upx 15upx 0upx rgba(63, 205, 235, 0.47);
		border-radius: 50%;
		margin-top: 15upx;
		margin-left: auto;
		margin-right: auto;
	}

	.header image {
		width: 161upx;
		height: 161upx;
		border-radius: 50%;
	}

	.btnClass {
		/* margin-top: 40rpx; */
		width: 526rpx;
		background: #7eeeb1;
		border: 1rpx solid #7eeeb1;
		color: #fff;
	}

	.active {
		/* margin-top: 40rpx; */
		width: 526rpx;
		background-color: #00b457;
		border: 1rpx solid #00b457;
		color: #fff;
	}

	.bord {
		border: 2rpx solid #00b457;
		padding: 2rpx;
	}
</style>
