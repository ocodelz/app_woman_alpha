<template>
	<view>
		<u-navbar :background="background" back-icon-color="#fff" class="navbar" :border-bottom="false">
			<view class="flex position-absolute align-center justify-center bg-success" style="width: 100rpx; right: 40rpx;"
			 @click="handleSubmit">
				<text class="text-white">发表</text>
			</view>
		</u-navbar>
		<view class="content px-3">
			<!-- 文字 -->
			<textarea placeholder="这一刻的想法" v-model="content" class="p-2 font-md mb-3" />
			<!-- 图文 -->
			<free-upload-image :data="imageList" v-if="type === 'image'" @update="updateImage"></free-upload-image>
			<!-- 视频 -->
			<view v-if="type === 'video' && !video" class="flex align-center justify-center bg-light rounded" style="height: 350rpx;"
			hover-class="bg-hover-light" @click="uploadVideo">
				<text class="text-muted" style="font-size: 100rpx;">+</text>
			</view>
			<video v-if="type === 'video' && video" :src="video" controls></video>
			
			<view v-if="type === 'video' && video" :src="video" class="my-3 flex align-center justify-center bg-light" 
			style="height: 100rpx;"hover-class="bg-hover-light" @click="uploadVideo">
				<text class="font-md text-muted">点击切换视频</text>
			</view>
			<u-cell-item icon="map" title="所在位置" value="位置"></u-cell-item>
		</view>
	</view>
</template>

<script>
	import freeUploadImage from '@/components/free-ui/free-upload-image/free-upload-image.vue'
	export default {
		components:{
			freeUploadImage
		},
		data() {
			return {
				background: {
					backgroundColor: '#fc979f',
				},
				content:'',
				imageList:[],
				type:'image',
				video:'',
				address:''
			}
		},
		onLoad(e) {
			this.type = e.type
		},
		onPageScroll() {
			uni.hideKeyboard();
		},
		methods:{
			handleSubmit(){
				console.log('发表');
			},
			// 上传图片
			update(list){
				this.imageList = list;
			},
			// 上传视频
			uploadVideo(){
				uni.chooseVideo({
					maxDuration:30,
					success: (e) => {
						this.video = e.tempFilePath
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: calc(100vh - 88px - var(--status-bar-height));
		width: 100%;
		overflow: auto;
	}
</style>
