<template>
	<view class="wrap">
		<scroll-view scroll-y="true" style="height: 100vh;background: #F3F3F3;">
			<view class="bg-white pb-4 mb-2" style="border-bottom-left-radius: 25rpx;border-bottom-right-radius: 25rpx;">
				<view class="w-100 flex align-center justify-center bg-light py-2">
					<view class="flex align-center justify-between" style="width: 90%;">
						<u-checkbox label-size="24" shape="circle" @change="checkboxChange" v-model="item.checked" v-for="(item, index) in list"
						 :key="index" :name="item.name">{{item.name}}</u-checkbox>
						<view class="font-small text-muted">
							<text>商品好评度 98%</text>
						</view>
					</view>
				</view>
				<view class="flex flex-wrap px-3 mb-1 mt-1  w-100">
					<view style="width: 200rpx;right: 10rpx;" :class="current === tindex ? 'specActive' :'space' " v-for="(tag,tindex) in commentTag"
					 :key="tindex" class="position-relative flex align-center justify-center ml-2 px-2 rounded-circle py-1 mt-2"
					 @click="current = tindex">
						<text class="font-small">{{tag}}</text>
					</view>
				</view>
				<scroll-view scroll-x="true" style="width: 100%;white-space: nowrap;">
					<view :class="topCurrent === toptindex ? 'tag-active tag' : 'tag'" v-for="(topt,toptindex) in tagList" :key="toptindex"
					 @click="topCurrent = toptindex">
						<text class="font-small">{{topt}}</text>
					</view>
				</scroll-view>
			</view>
			<view class="bg-white">
				<view class="w-100 flex align-center justify-center bg-light py-2">
					<view class="flex align-center justify-end font-md" style="width: 90%;">
						<view class="font-sm">
							<text @click="sort = 0" :class="sort == 0 ? 'text-dark mr-1' : 'text-muted mr-1'">最新排序</text>
							<text class="text-muted mr-1">|</text>
							<text @click="sort = 1" :class="sort == 1 ? 'text-dark' : 'text-muted'">默认排序</text>
						</view>
					</view>
				</view>
			</view>
			<view v-for="(ctem,cindex) in comment" :key="cindex" class="bg-white mb-3 p-4 flex border-bottom position-relative flex flex-column"
			 style="border-radius: 25rpx;">
				<view class="flex align-center justify-between" @click.stop="handleEvaluatePage">
					<view class="flex align-center ml-1">
						<u-image shape="circle" :src="ctem.avatar" height="60" width="60"></u-image>
						<text class="ml-2">{{ctem.username}}</text>
					</view>
					<text class="font-sm text-muted">{{ctem.date}}</text>
				</view>
				<view class="mt-2 ml-1 mb-2" @click.stop="handleEvaluatePage">
					<view>
						<u-rate :count="ctem.count" v-model="ctem.stars" disabled></u-rate>
					</view>
					<text class="mt-1">{{ctem.content}}</text>
				</view>
				<scroll-view scroll-x="true" style="width: 100%;white-space: nowrap;">
					<view v-for="(url,uindex) in ctem.img" class="ml-1" :key="uindex" style="display: inline-block;">
						<u-image :src="url" height="200" width="200" border-radius="12" @click="handleCommentImg(uindex,ctem.img)"></u-image>
					</view>
				</scroll-view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				topCurrent: 0,
				sort: 0,
				list: [{
					name: '只看当前商品',
					checked: false,
					disabled: false
				}, ],
				tagList: ['全部', '图 900+', '追评 100+', '好评 1万+', '中评 200+', '差评 200+'],
				commentTag: ['生活方便 1252', '完全不漏 1178', '大小合适 999', '外观完整 828', '材料滑软 352', '穿上好看 215'],
				comment: [{
						id: 1,
						username: '清澈',
						img: ['https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg',
							'https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg',
							'https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg',
							'https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg',
							'https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg',
							'https://s3.ax1x.com/2021/03/09/63seqf.jpg',
							'https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg',
							'https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg',
							'https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg'
						],
						date: '2021-03-13',
						spec: '规格',
						grade: 'good',
						content: '宝宝穿上可以去拯救地球了',
						count: 5,
						stars: 4,
						avatar: 'https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg'
					},
					{
						id: 1,
						username: '简安',
						img: ['https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg',
							'https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg',
							'https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg'
						],
						date: '2021-03-14',
						spec: '规格',
						grade: 'good',
						content: '宝宝穿上可以去拯救地球了宝宝穿上可以去拯救地球了宝宝穿上可以去拯救地球了宝宝穿上可以去拯救地球了宝宝穿上可以去拯救地球了宝宝穿上可以去拯救地球了',
						count: 5,
						stars: 3,
						avatar: 'https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg'
					},
					{
						id: 1,
						username: '盖亚',
						img: ['https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg',
							'https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg',
							'https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg'
						],
						date: '2021-03-16',
						spec: '规格',
						grade: 'good',
						content: '宝宝穿上可以去拯救地球了',
						count: 5,
						stars: 2,
						avatar: 'https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg'
					}
				]
			}
		},
		methods: {
			handleCommentImg(index, images) {
				uni.previewImage({
					current: index,
					urls: images
				})
			}
		}
	}
</script>

<style scoped>
	.specActive {
		background-color: #fc979f;
		color: #fff;
	}

	.tag-active {
		border: 2rpx solid #f00;
	}

	.tag {
		display: flex;
		padding: 0rpx 20rpx 0rpx 20rpx;
		margin-left: 40rpx;
		margin-top: 20rpx;
		line-height: 50rpx;
		height: 50rpx;
		background-color: #fcd8d7;
		display: inline-block;
		border-radius: 100rpx;
	}

	.space {
		background-color: #f3f3f3;
	}

	/deep/ .uni-scroll-view::-webkit-scrollbar {
		/* 隐藏滚动条，但依旧具备可以滚动的功能 */
		display: none
	}
</style>
