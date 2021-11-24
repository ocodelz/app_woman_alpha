<template>
	<view class="p-3 flex align-start border-bottom border-light-secondary">
		<u-image width="80" height="80" :src="item.avatar" border-radius="4"></u-image>
		<view class="pl-2 flex-1 flex flex-column">
			<!-- 昵称 -->
			<text class="font-md text-hover-primary mb-1">{{item.username}}</text>
			<!-- 内容 -->
			<text class="font-md text-dark mb-1">{{item.context}}</text>
			<!-- 图片 -->
			<view v-if="item.image.length" class="py-2 flex flex-wrap">
				<block v-for="(image,imageIndex) in item.image" :key="imageIndex">
					<!-- 单图 -->
					<free-image v-if="item.image.length === 1" imageClass="rounded bg-secondary" 
					:src="image.src" @click="preview(image.src)"></free-image>
					<!-- 多图 -->
					<u-image v-else :src="image.src"
					 width="180" height="180" class="bg-secondary mr-1 mb-1" border-radius="4"
					 @click="preview(image.src)"></u-image>
				</block>
			</view>
			<!-- 视频 -->
			<view v-if="item.video" class="py-2">
				<video style="height: 300rpx;width: 500rpx;"
				:src="item.video.src" :poster="item.video.poster" loop controls></video>
			</view>
			<!-- 时间 | 操作 -->
			<view class="flex align-center justify-between">
				<text class="font-sm text-light-muted">{{item.create_time | formatTime}}</text>
				<view class="rounded px-1 bg-light" @click="$emit('action',{item,index})">
					<u-icon name="more-dot-fill" size="30" color="#0056b3"></u-icon>
				</view>
			</view>
			<!-- 点赞列表 | 评论列表-->
			<view class="bg-light mt-2" v-if="item.supports.length || item.comments.length">
				<!-- 点赞 -->
				<view class="border-bottom flex align-start p-2" v-if="item.supports.length">
					<u-icon name="heart" size="30" color="#0056b3"></u-icon>
					<view class="flex flex-1 flex-wrap">
						<text v-for="(s,si) in item.supports" :key="si" class="font text-hover-primary ml-1">{{s.username}}</text>
					</view>
				</view>
				<!-- 评论 -->
				<view class="flex align-start p-2" v-if="item.comments.length">
					<u-icon name="heart" size="30" color="#0056b3"></u-icon>
					<view class="flex flex-column flex-1 flex-wrap ml-2">
						<view class="flex" v-for="(c,ci) in item.comments" :key="ci">
							<text class="text-hover-primary font">{{c.username}}:</text>
							<text class="font text-dark flex-1">{{c.content}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import freeImage from '../../../components/free-ui/free-image/free-image.vue';
	import $T from '@/common/free-lib/time.js';
	export default {
		components: {
			freeImage
		},
		props:{
			item:Object,
			index: Number
		},
		filters:{
			formatTime(value){
				return $T.gettime(value);
			}
		},
		computed:{
			urls(){
				return this.item.image.map(item => item.src)
			}
		},
		methods:{
			// 查看大图
			preview(src){
				console.log(src);
				uni.previewImage({
					current:src,
					urls:this.urls
				})
			}
		}
	}
</script>

<style>
</style>
