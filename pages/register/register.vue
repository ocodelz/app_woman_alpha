<template>
	<view class="w-100 flex align-center justify-center flex-column" style="margin-top: 80rpx;">
		<view style="width: 686rpx;">
			<view class="flex align-center mb-4">
				<view class="position-absolute">
					<u-icon :custom-style="customIconStyle" color="#cccccc" name="account-fill" size="35" margin-left="40"></u-icon>
				</view>
				<u-input type="text" :custom-style="customInputStyle" v-model="form.userName" border height="80" placeholder="请输入姓名" />
			</view>
			<view class="flex align-center mb-4">
				<view class="position-absolute">
					<u-icon :custom-style="customIconStyle" name="phone" custom-prefix="custom-icon" color="#cccccc" size="35"></u-icon>
				</view>
				<u-input type="number" :custom-style="customInputStyle" v-model="form.userNamePhone" border height="80" placeholder="请输入手机号" />
			</view>
			<view class="flex align-center mb-4">
				<view class="position-absolute">
					<u-icon :custom-style="customIconStyle" color="#cccccc" name="lock" size="35"></u-icon>
				</view>
				<u-input type="password" :custom-style="customInputStyle" v-model="form.userNamePwd" border height="80" placeholder="请输入密码" />
			</view>
			<view class="flex align-center mb-4">
				<view class="position-absolute">
					<u-icon :custom-style="customIconStyle" color="#cccccc" name="lock" size="35"></u-icon>
				</view>
				<u-input type="password" :custom-style="customInputStyle" v-model="form.repeatPassword" border height="80"
				 placeholder="请再次输入密码" />
			</view>
			<view class="flex align-center">
				<view class="position-absolute">
					<u-icon :custom-style="customIconStyle" color="#cccccc" name="account-fill" size="35"></u-icon>
				</view>
				<u-input v-model="istype" :custom-style="customInputStyle" type="select" border height="80" @click="show = true" />
				<u-action-sheet :list="actionSheetList" v-model="show" @click="actionSheetCallback"></u-action-sheet>
			</view>
			<u-button :class="form.userName!== '' && form.userNamePhone !== '' && form.userNamePwd !== '' && form.repeatPassword !== '' ? 'active' : 'btnClass'"
			 hover-class="none" :hair-line="false" @click="handleNextBtn">完成注册</u-button>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				istype: '孕妇',
				show: false,
				current: 0,
				// 表单输入框内容
				form: {
					// 姓名
					userName: '',
					// 手机号
					userNamePhone: '',
					// 密码内容
					userNamePwd: '000000',
					// 重复输入内容
					repeatPassword: '000000'
				},
				customInputStyle: {
					marginLeft: '40rpx'
				},
				customIconStyle: {
					marginLeft: '10rpx'
				},
				actionSheetList: [{
						text: '孕妇'
					},
					{
						text: '非孕妇'
					}
				],
				type: ''
			}
		},
		methods: {
			actionSheetCallback(index) {
				this.istype = this.actionSheetList[index].text;
			},
			handleRegister() {
				let data = {
					name: this.form.userName,
					account: this.form.userNamePhone,
					pw: this.form.userNamePwd,
					type: this.type
				}
				console.log(data);
				this.$u.post('/RegisterAccout1', data).then(res => {
					console.log(res);
					if (JSON.stringify(res.data) == '{}' || res.code == 500) {
						uni.showToast({
							title: res.info,
							icon: 'none'
						})
					} else if (res.code == 200) {
						uni.setStorage({
							key: 'user_login',
							data: res.data
						})
						uni.reLaunch({
							url: '../login/login'
						})
						uni.showToast({
							title: '注册成功,请登录',
							icon: 'none'
						})
					}
				}).catch(e => {
					console.log(JSON.stringify(e));
					uni.showToast({
						title: "未知错误",
						icon: 'none'
					})
				})
			},
			// 跳转登录页面
			handleNextBtn() {
				if (this.$u.test.isEmpty(this.form.userName)) {
					uni.showToast({
						title: '姓名不能为空',
						icon: 'none'
					})
					return;
				}
				if (!this.$u.test.letter(this.form.userName) && !this.$u.test.chinese(this.form.userName)) {
					uni.showToast({
						title: '只能输入纯中文或纯英文的姓名',
						icon: 'none'
					})
					return;
				}
				if (this.$u.test.isEmpty(this.form.userNamePhone)) {
					uni.showToast({
						title: '手机号不能为空',
						icon: 'none'
					})
					return;
				}
				if (!this.$u.test.mobile(this.form.userNamePhone)) {
					uni.showToast({
						title: '非法手机号',
						icon: 'none'
					})
					return;
				}
				if (this.$u.test.isEmpty(this.form.userNamePwd)) {
					uni.showToast({
						title: '密码不能为空',
						icon: 'none'
					})
					return;
				}
				if (this.form.userNamePwd.length < 6 || this.form.userNamePwd.length > 16) {
					uni.showToast({
						title: '请输入6~16位密码',
						icon: 'none'
					})
					return;
				}
				if (this.$u.test.isEmpty(this.form.repeatPassword)) {
					uni.showToast({
						title: '二次密码不能为空',
						icon: 'none'
					})
					return;
				}
				if (this.form.repeatPassword.length < 6 || this.form.repeatPassword.length > 16) {
					uni.showToast({
						title: '请输入6~16位二次密码',
						icon: 'none'
					})
					return;
				}
				if (this.form.repeatPassword != this.form.userNamePwd) {
					uni.showToast({
						title: '两次密码不一样',
						icon: 'none'
					})
					return;
				}
				if (this.istype == '孕妇') {
					this.type = 0;
				} else {
					this.type = 1;
				}
				if (this.istype == '孕妇') {
					uni.showModal({
						content: '您当前选择的是孕妇，是否要注册吗？',
						success: (res) => {
							if (res.confirm) {
								this.handleRegister();
							} else if (res.cancel) {}
						}
					})
				} else {
					this.handleRegister();
				}
			}
		}
	}
</script>
<style scoped>
	.active {
		background-color: #e55a6f;
		margin-top: 100rpx;
		color: #fff;
		border: 1rpx solid #e55a6f;
	}

	.btnClass {
		background-color: #e59192;
		margin-top: 100rpx;
		color: #fff;
		border: 1rpx solid #e59192;
	}
</style>
