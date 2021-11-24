<template>
	<view class="flex flex-wrap">
		<view style="width: 230rpx;"class="flex align-end justify-center pt-2 position-relative"
		v-for="(item,index) in imageList" :key="index">
			<u-image :src="item"
			width="220" height="220" @click="preview(item)"></u-image>
			<view class="flex align-center justify-center rounded-circle"
			 @click="deleteImage(item)"
			style="width: 60rpx;height: 60rpx;position: absolute;top: 10rpx;right: 0;background-color: rgba(0,0,0,.5);">
				<u-icon name="close" size="20" color="#fff"></u-icon>
			</view>
		</view>
		<view v-if="imageList.length < 9" style="width: 230rpx;" class="flex align-center justify-center"
		@click="chooseImage">
			<view class="flex align-center justify-center bg-light rounded" style="width: 220rpx;height: 220rpx;">
				<text class="text-light-muted" style="font-size: 100rpx;">+</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			data:{
				type: Array,
				default: () => {
					return []
				}
			}
		},
		data() {
			return {
				imageList:[]
			}
		},
		mounted() {
			this.imageList = this.data;
		},
		methods:{
			// 选择图片
			chooseImage(){
				uni.chooseImage({
					count:9 - this.imageList.length,
					sizeType:['compressed'],
					success: (res) => {
						// 上传
						this.imageList = [...this.imageList,...res.tempFilePaths],
						this.$emit('update',this.imageList)
					}
				})
			},
			// 预览图片
			preview(item){
				uni.previewImage({
					current:item,
					urls:this.imageList
				})
			},
			// 删除图片
			deleteImage(item){
				uni.showModal({
					content:'是否要删除该图片?',
					success: (res) => {
						if(res.confirm){
							let index = this.imageList.findIndex(url=> url === item);
							if(index !== -1){
								this.imageList.splice(index,1)
								this.$emit('update',this.imageList)
							}
						}
					}
				})
			}
		}
	}
</script>

<style>
</style>
