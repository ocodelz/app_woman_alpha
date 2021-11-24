<template>
	<view class="wrap">
		<view class="w-100 flex align-center justify-center bg-white">
			<view style="width: 94%;">
				<view class="py-2 border-bottom">
					<text>商品评价</text>
					<u-rate :count="count" @change="handleChangeRate" v-model="value"></u-rate>
					<text class="ml-2">{{rate}}</text>
				</view>
				<view class="pb-3">
					<view>
						<u-input @input="handleInput" v-model="comment" placeholder="请对商品进行评价" type="textarea" maxlength="500"/>
						<text>已写</text>
						<text class="text-danger">{{conterNum}}</text>
						<text>个字</text>
					</view>
					<view class="flex flex-wrap">
						<view style="width: 230rpx;" class="flex align-end justify-center pt-2 position-relative" v-for="(item,index) in imglist"
						 :key="index">
							<u-image :src="item" width="220" height="220" @click="preview(item)"></u-image>
							<view class="flex align-center justify-center rounded-circle" @click="deleteImage(item)" style="width: 30rpx;height: 30rpx;position: absolute;top: 10rpx;right: 0;background-color: rgba(0,0,0,.5);">
								<u-icon name="close" size="20" color="#fff"></u-icon>
							</view>
						</view>
						<view v-if="imglist.length < 9" style="width: 220rpx;" class="flex align-center justify-center mt-2" @click="chooseImage">
							<view class="flex align-center justify-center bg-light rounded" style="width: 220rpx;height: 220rpx;">
								<text class="text-light-muted" style="font-size: 150rpx;">+</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				comment:'',
				conterNum:0,
				count: 5,
				value: 5,
				rate: '非常好',
				imglist:[],
				p_id:'',
				dataInfo:{},
				commodity_id:'',
				uploadImgUrl:[]
			}
		},
		onLoad() {
			uni.getStorage({
				key: 'user_login',
				success: res => {
					this.p_id = res.data.PregnantID;
				}
			})
			let order = uni.getStorageSync('order');
			this.dataInfo = JSON.parse(order.dataInfo);
			this.commodity_id = order.commodity_id;
		},
		onNavigationBarButtonTap(e){
			this.handleSubmitComment();
		},
		methods: {
			handleChangeRate(e) {
				this.value = e;
				if (this.value == 1) {
					this.rate = '非常差'
				} else if (this.value == 2) {
					this.rate = '差'
				} else if (this.value == 3) {
					this.rate = '一般'
				} else if (this.value == 4) {
					this.rate = '好'
				} else {
					this.rate = '非常好'
				}
			},
			handleSubmitComment() {
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
							console.log(this.uploadImgUrl);
						}
					});
				}
				uni.showModal({
					content: '确定要上传吗?',
					success: (res) => {
						if (res.confirm) {
							const res = uni.getSystemInfoSync();
							this.$u.post('/UploadEvaluate',{
								p_id: this.p_id,
								commodity_id: this.commodity_id,
								commodity_code:'',
								order_id:'',
								contents:this.comment,
								picture:this.uploadImgUrl.join(';'),
								video:'',
								star_level: this.value,
								lable:''
							}).then(res => {
								console.log(JSON.stringify(res));
								if(res.code == 200 && res.data !== null){
									uni.showToast({
										title:'上传成功',
										icon:'none'
									})
								}
							})
						}
					}
				})
			},
			handleInput(){
				this.conterNum = this.comment.length;
			},
			chooseImage(){
				uni.chooseImage({
					count: 9 - this.imglist.length,
					success: (res) => {
						this.imglist = [...this.imglist, ...res.tempFilePaths]
					}
				})
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
			}
		}
	}
</script>

<style scoped>
	.wrap {
		width: 100%;
		height: 100vh;
		background-color: #e3e3e3;
	}
</style>
