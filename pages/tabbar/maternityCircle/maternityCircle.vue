<template>
	<view>
		<free-transparent-bar :leftIcon="'\ue637'" title="孕妇圈" :rightIcon="'\ue66c'" startScroll="400" endScroll="600"
		 :scrollTop="scrollTop" @click="handleTapRightIcon"></free-transparent-bar>
		<view class="position-relative" style="height: 620rpx;">
			<image src="https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg" mode="aspectFill" style="height: 590rpx;"
			 class="bg-secondary w-100"></image>
			<image src="https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg" style="width: 120rpx;height: 120rpx;right: 30rpx;"
			 class="bg-secondary rounded position-absolute bottom-0"></image>
			<text class="text-white font-md position-absolute" style="bottom: 45rpx;right: 160rpx;">清澈</text>
		</view>
		<!-- 孕妇圈列表 -->
		<free-maternity-circle-list v-for="(item,index) in list" :key="index" :item="item" :index="index" @action="doAction"></free-maternity-circle-list>
		<!-- 评论框 -->
		<u-popup v-model="show" mode="bottom">
			<view style="height: 105rpx;" class="bg-white flex align-center px-3">
				<textarea fixed class="bg-white rounded p-2 font-md" focus style="height: 75rpx;width: 520rpx;" v-model="content" />
				<u-icon name="plus-circle" size="30" color="#ccc" @click="changeFaceModel"></u-icon>
				<u-tag text="发送" type="success" mode="dark" :show="content.length"
				@click="send"/>
			</view>
			<scroll-view v-if="faceModal" scroll-y="true" style="height: 350rpx;"
			class="bg-light">
				<view class="flex flex-wrap">
					<view style="width: 107rpx;height: 107rpx;"
					class="flex align-center justify-center" hover-class="bg-white"
					v-for="(item,index) in faceList" :key="index"
					@click="addFace(item)">
						<text>{{item}}</text>
					</view>
				</view>
			</scroll-view>
		</u-popup>
	</view>
</template>

<script>
	import freeTransparentBar from '@/components/free-ui/free-transparent-bar/free-transparent-bar.vue';
	import freeMaternityCircleList from "@/components/free-ui/free-maternityCircle-list/free-maternityCircle-list.vue";
	export default {
		components: {
			freeTransparentBar,
			freeMaternityCircleList
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		data() {
			return {
				showType:1,
				content:'',
				show:false,
				scrollTop: 0,
				list: [{
						id: 2,
						avatar: 'https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg',
						username: '清澈',
						context: '我从未拥有过你一秒钟，心里却失去过你千万次。---选自网易云音乐《再见二丁目》',
						image: [],
						video: false,
						create_time: 1567481668,
						// 点赞
						supports: [{
							id: 1,
							username: '清澈',
							avatar: 'https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg',
						}],
						// 评论
						comments: [{
							id: 1,
							username: '清澈',
							content: '评论内容'
						}]
					},
					{
						id: 2,
						avatar: 'https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg',
						username: '清澈',
						context: '我从未拥有过你一秒钟，心里却失去过你千万次。---选自网易云音乐《再见二丁目》',
						image: [{
							src: 'https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg'
						}],
						video: false,
						create_time: 1567481668,
						// 点赞
						supports: [],
						// 评论
						comments: []
					},
					{
						id: 2,
						avatar: 'https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg',
						username: '清澈',
						context: '我从未拥有过你一秒钟，心里却失去过你千万次。---选自网易云音乐《再见二丁目》',
						image: [{
								src: 'https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg'
							},
							{
								src: 'https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg'
							}
						],
						video: false,
						create_time: 1567481668,
						// 点赞
						supports: [],
						// 评论
						comments: []
					},
					{
						id: 2,
						avatar: 'https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg',
						username: '清澈',
						context: '我从未拥有过你一秒钟，心里却失去过你千万次。---选自网易云音乐《再见二丁目》',
						image: [],
						video: {
							poster: '',
							src: '/static/video/video.mp4'
						},
						create_time: 1567481668,
						// 点赞
						supports: [],
						// 评论
						comments: []
					}
				],
				faceModal:false,
				faceList:["😀","😁","😂","😃","😄","😅","😆","😉","😊","😋","😎","😍","😘","😗","😙","😚","😇","😐","😑","😶","😏","😣","😥","😮","😯","😪","😫","😴","😌","😛","😜","😝","😒","😓","😔","😕","😲","😷","😖","😞","😟","😤","😢","😭","😦","😧","😨","😬","😰","😱","😳","😵","😡","😠"],
				commentIndex:-1
			}
		},
		methods: {
			// 点击操作菜单
			doAction(e) {
				uni.showActionSheet({
					itemList: ['点赞', '评论'],
					success: (res) => {
						if (res.tapIndex === 0) {
							this.doSupport(e)
						} else {
							this.content = '';
							this.faceModal = false;
							this.commentIndex = e.index;
							this.show = true;
						}
					}
				})
			},
			// 点赞
			doSupport(e) {
				e.item.supports.push({
					id: 1,
					username: '清澈',
					avatar: 'https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/shengchengqi/datapic/1.jpg',
				})
			},
			// 表情
			addFace(item){
				this.content += item;
			},
			// 开启关闭表情面板
			changeFaceModel(){
				uni.hideKeyboard();
				setTimeout(() => {
					this.faceModal = !this.faceModal;
				},100)
			},
			// 发送
			send(){
				this.list[this.commentIndex].comments.push({
					id: 1,
					username: '昵称',
					content: this.content
				})
				this.show = false;
			},
			// 选择发表朋友圈类型
			handleTapRightIcon(){
				let list = [{
					name:'图文',
					key:'image'
				},{
					name:'短视频',
					key:'video'
				},{
					name:'文字',
					key:'text'
				}]
				uni.showActionSheet({
					itemList:list.map(v=>v.name),
					success: (res) => {
						this.$u.route('/pages/moment/moment?type='+list[res.tapIndex].key,)}
				})
			}
		}
	}
</script>

<style>
</style>
