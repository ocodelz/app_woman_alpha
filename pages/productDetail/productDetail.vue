<template>
	<view class="wrap">
		<!-- 渐变导航 -->
		<free-transparent-bar :leftIcon="'\ue637'" :navTabList="navTabList" :rightIcon="'\ue687'" :rightIconTwo="'\ue62b'"
		 startScroll="20" endScroll="300" @change="handleChangeTab" :current="current" :scrollTop="scrollTop"></free-transparent-bar>
		<scroll-view class="scrollHeight position-fixed" :style="'top:'+statusBarHeight+'px'" scroll-y="true" @scroll="handleScroll">
			<view class="commodity">
				<!-- 轮播图 -->
				<view class="mb-2 test" style="height: 750rpx;" v-if="dataInfo.spec[specCurrent].picture.length">
					<u-swiper :list="dataInfo.spec[specCurrent].picture" height="750" @click="handlePreviewImage" indicator-pos="bottomRight"
					 mode="number" border-radius="none" img-mode="aspectFill"></u-swiper>
				</view>
				<!-- 商品信息 -->
				<view class="bg-white w-100 mb-2 pl-3 pr-3 pb-3" style="border-bottom-left-radius: 25rpx;border-bottom-right-radius: 25rpx;">
					<view class="mb-3 flex justify-between">
						<view class="mt-3" style="line-height: 34rpx;">
							<view class="flex">
								<text class="font-sm text-red font-weight-bold">￥</text>
								<text class="text-red font-md font-weight-bold">{{dataInfo.spec[specCurrent].e_buy_price.toFixed(2)}}</text>
							</view>
							<text class="text-muted font-sm font-weight-bold" style="text-decoration: line-through;" v-if="dataInfo.spec[specCurrent].e_day_price">￥{{dataInfo.spec[specCurrent].e_day_price}}</text>
						</view>
						<view class="flex mt-1 align-center flex-column" @click="handleAddCollection">
							<text v-if="dataInfo.spec[specCurrent].collect_id == ''" class="iconfont" style="font-size: 40rpx;">&#xe674;</text>
							<u-icon v-if="dataInfo.spec[specCurrent].collect_id" name="heart-fill" size="40" color="#f00"></u-icon>
							<text class="font-small" v-if="dataInfo.spec[specCurrent].collect_id == ''">{{dataInfo.spec[specCurrent].collectionCount}}</text>
							<text class="font-small" @click="handleAddCollection" v-if="dataInfo.spec[specCurrent].collect_id">已收藏</text>
						</view>
					</view>
					<view class="font font-weight-bold" style="text-indent: 2em;">
						<text>{{dataInfo.ename}}</text>
					</view>
				</view>
				<!-- 商品规格 | 配送地址 -->
				<view class="flex flex-column bg-white w-100 p-3 mb-3" style="border-radius: 25rpx;">
					<!-- 商品规格 -->
					<view class="flex mb-3" @click="show = true">
						<text class="font-weight-bold font">已选</text>
						<view class="flex-1 ml-3 border-bottom pb-3">
							<text class="font-sm">{{dataInfo.ename}}, 1件, 可选服务</text>
							<text class="font-lg iconfont position-absolute" style="right: 30rpx;">&#xe62b;</text>
						</view>
					</view>
					<!-- 配送地址 -->
					<view class="flex align-center justify-between" @click="isAddress = true">
						<view>
							<text class="font-weight-bold font">送至</text>
							<text class="font-sm ml-3" v-if="address.length">{{address[addressIndex].location}}{{address[addressIndex].detailed_address}}</text>
							<text v-else class="font-sm ml-3">暂无配送地址</text>
						</view>
						<view class="font-lg iconfont">&#xe62b;</view>
					</view>
				</view>
			</view>
			<!-- 评价 -->
			<view class="w-100 bg-white p-3 mb-3 evaluate" style="border-radius: 25rpx;">
				<view class="flex justify-between align-center" @click.stop="handleEvaluatePage">
					<view class="font-weight-bold">
						<text class="font-md">评价</text>
						<text class="font-small ml-2">426万</text>
					</view>
					<view class="text-light-muted font-sm">
						<text>好评度</text>
						<text>97%</text>
						<u-icon name="arrow-right" size="22" color="#000"></u-icon>
					</view>
				</view>
				<!-- 热评标签 -->
				<!-- <view class="mt-3">
					<u-tag bg-color="#fc979f" v-for="(tag,tindex) in datas.commentTag" :key="tindex" :class="tindex !== 0 ? 'ml-2' : ''"
					 :text="tag" mode="dark" shape="circle" />
				</view> -->
				<!-- 评论内容 -->
				<view v-for="(ctem,cindex) in commentInfo" :key="cindex" class="mt-3">
					<view class="flex align-center" @click.stop="handleEvaluatePage">
						<u-image shape="circle" :src="ctem.avatar" height="60" width="60"></u-image>
						<view class="flex flex-column ml-1">
							<text>{{ctem.username}}</text>
							<u-rate :count="ctem.count" v-model="ctem.stars" disabled></u-rate>
						</view>
					</view>
					<view class="mt-1 u-line-2 mb-2" @click.stop="handleEvaluatePage">
						<text>{{ctem.content}}</text>
					</view>
					<scroll-view scroll-x="true" style="width: 100%;white-space: nowrap;">
						<view :class="uindex !== 0 ? 'ml-1' : ''" v-for="(url,uindex) in ctem.img" :key="uindex" style="display: inline-block;">
							<u-image :src="url" height="200" width="200" border-radius="12" @click="handleCommentImg(uindex,ctem.img)"></u-image>
						</view>
					</scroll-view>
				</view>
			</view>
		</scroll-view>
		<u-popup v-model="show" mode="bottom" border-radius="14" height="1200" closeable>
			<view class="p-3 flex flex-column align-start">
				<view class="flex mb-4">
					<u-image :src="dataInfo.spec[specCurrent].picture[0]" width="200" height="200" border-radius="14"></u-image>
					<view class="ml-2 flex align-end">
						<view class="flex">
							<text class="font-sm text-red font-weight-bold">￥</text>
							<text class="text-red font-md font-weight-bold">{{dataInfo.spec[specCurrent].e_buy_price.toFixed(2)}}</text>
						</view>
					</view>
				</view>
				<scroll-view scroll-y="true" style="height: 750rpx;">
					<text class="font-sm font-weight-bold">规格</text>
					<view class="flex flex-wrap position-relative mb-3 mt-1" style="right: 20rpx;">
						<view @click="handleSpecTap(sindex,spec)" :class="specCurrent === sindex ? 'specActive' :'space' " v-for="(spec,sindex) in dataInfo.spec"
						 :key="sindex" class="flex rounded-circle px-2 py-1 ml-2 mt-2">
							<text class="font-sm">{{spec.spec_name}}</text>
						</view>
					</view>
					<view class="flex align-center justify-between mt-3">
						<text class="font-sm font-weight-bold">数量</text>
						<view class="position-absolute" style="right: 30rpx;">
							<u-number-box v-model="num" @change="handleValChange" min="1"></u-number-box>
						</view>
					</view>
				</scroll-view>
				<view class="position-fixed" style="bottom: 90rpx;width: 690rpx;">
					<u-button type="error" shape="circle" @click="handleTapNewAddress">确定</u-button>
				</view>
			</view>
		</u-popup>
		<u-popup mode="bottom" v-model="isAddress" height="1200" border-radius="14" safe-area-inset-bottom closeable>
			<text class="flex align-center justify-center font-md font-weight-bold py-3">配送至</text>
			<scroll-view scroll-y="true" style="height: 900rpx;">
				<view v-for="(address,index) in address" :key="index">
					<view class="flex align-center ml-2 py-2" @click="handleTapAddress(index,item)">
						<u-icon name="map" color="#000" size="32"></u-icon>
						<view class="flex flex-column ml-2">
							<text class="font-md font-weight-bold">{{address.detailed_address}}</text>
							<text class="font-sm">{{address.location}}</text>
						</view>
					</view>
				</view>
			</scroll-view>
			<view class="position-fixed w-100 flex align-center justify-center" style="bottom: 90rpx;">
				<u-button style="width: 690rpx;" type="error" shape="circle">选择其他地址</u-button>
			</view>
		</u-popup>
		<view class="bg-white w-100 position-fixed bottom-0 border-top flex align-center" style="height: 150rpx;">
			<u-button class="flex justify-end mr-5" style="width: 200rpx;" type="warning" shape="circle" @click="show = true">立即购买</u-button>
		</view>
	</view>
</template>

<script>
	import freeTransparentBar from '@/components/free-ui/free-transparent-bar/free-transparent-bar.vue';
	export default {
		components: {
			freeTransparentBar
		},
		data() {
			return {
				scrollTop: 0,
				show: false,
				specCurrent: 0,
				addressIndex: 0,
				isAddCollection: false,
				num: 1,
				isAddress: false,
				bgColor: '#ccc',
				p_id: '',
				address: [],
				dataInfo: {},
				navTabList: [{
						name: '商品'
					},
					{
						name: '评价',
					}
				],
				pagination: {
					rows: 20,
					page: 1,
					sidx: '',
					sord: '',
					records: 0,
					total: 0
				},
				statusBarHeight: 0,
				current: 0,
				commentInfo: '',
				tableList: []
			}
		},
		onLoad(e) {
			let statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
			this.statusBarHeight = statusBarHeight;
			this.dataInfo = JSON.parse(e.detail);
			// this.handlePriceStyle();
		},
		onShow() {
			uni.getStorage({
				key: 'user_login',
				success: res => {
					this.p_id = res.data.PregnantID;
					this.handleGetAddress(this.p_id);
					this.handleGetEvaluateInfo(this.p_id);
				}
			})
		},
		methods: {
			handleGetAddress(p_id) {
				this.$u.post('/GetAddress', {
					p_id: p_id
				}).then(res => {
					// console.log(JSON.stringify(res));
					for (let item of res.data) {
						if (item.is_default === 'True') {
							item.is_default = 0;
						} else {
							item.is_default = 1;
						}
					}
					let arr = res.data;
					arr.sort((a, b) => {
						return a.is_default > b.is_default
					})
					this.address = arr;
					// console.log(this.address);
				})
			},
			handleTapAddress(index, item) {
				this.addressIndex = index;
				this.isAddress = false;
			},
			handleAddCollection() {
				let commodity_id = '',
					isTrue = '',
					obj = {};
				if (this.dataInfo.spec[this.specCurrent].collect_id == '') {
					isTrue = 'true'
				} else if (this.dataInfo.spec[this.specCurrent].collect_id) {
					isTrue = 'false'
				}
				if (this.dataInfo.spec[this.specCurrent].lx == '设备') {
					obj = {
						id: this.dataInfo.spec[this.specCurrent].collect_id,
						commodity_id: this.dataInfo.equipment_id,
						commodity_code: this.dataInfo.equipment_id,
						p_id: this.p_id,
						is_colloect: isTrue
					}
				} else if (this.dataInfo.spec[this.specCurrent].lx == '商品') {
					obj = {
						id: this.dataInfo.spec[this.specCurrent].collect_id,
						commodity_id: this.dataInfo.spec[this.specCurrent].notice_id,
						commodity_code: this.dataInfo.equipment_id,
						p_id: this.p_id,
						is_colloect: isTrue
					}
				}
				console.log(obj);
				this.$u.post('/UploadCollect', obj).then(res => {
					console.log(JSON.stringify(res));
					if (res.data.length) {
						console.log('1111111111111111111111111111111111111111111');
						this.dataInfo.spec[this.specCurrent].collect_id = res.data[0].id
						uni.showToast({
							title: '收藏成功'
						})
						return this.dataInfo.spec[this.specCurrent].collectionCount;
					}
					if (res.data.length == 0) {
						console.log('---------------------------------------');
						this.dataInfo.spec[this.specCurrent].collect_id = '';
						uni.showToast({
							title: '取消成功'
						})
						return this.dataInfo.spec[this.specCurrent].collectionCount;
					}
				}).catch(err => {
					console.log(JSON.stringify(err));
				})
			},
			// handlePriceStyle() {
			// 	let splitPrice = this.dataInfo.spec[this.specCurrent].e_buy_price.toFixed(2).split('.');
			// 	this.dataInfo.spec[this.specCurrent].e_buy_price =
			// 		`<text class="font-lg text-red font-weight-bold">${splitPrice[0]}</text><text class="text-red">.</text><text class="text-red font-weight-bold font-sm">${splitPrice[1]}</text>`;

			// },
			// handleChangeTab(index) {
			// 	this.current = index;
			// 	if (index == 0) {
			// 		uni.createSelectorQuery().select('.commodity').boundingClientRect(data => {
			// 			uni.createSelectorQuery().select(".wrap").boundingClientRect(res => {
			// 				uni.pageScrollTo({
			// 					duration: 100,
			// 					scrollTop: data.top - res.top - 50,
			// 				})
			// 			}).exec()
			// 		}).exec();
			// 	} else {
			// 		uni.createSelectorQuery().select('.evaluate').boundingClientRect(data => {
			// 			uni.createSelectorQuery().select(".wrap").boundingClientRect(res => {
			// 				uni.pageScrollTo({
			// 					duration: 100,
			// 					scrollTop: data.top - res.top - 50,
			// 				})
			// 			}).exec()
			// 		}).exec();
			// 	}
			// },
			// 轮播图预览
			// handlePreviewImage(index) {
			// 	uni.previewImage({
			// 		current: index,
			// 		urls: this.datas.swiperList
			// 	})
			// },
			// handleCommentImg(index, images) {
			// 	uni.previewImage({
			// 		current: index,
			// 		urls: images
			// 	})
			// },
			handleScroll(e) {
				this.scrollTop = e.detail.scrollTop;
			},
			handleSpecTap(sindex, fitem) {
				this.specCurrent = sindex;

				// let splitPrice = this.dataInfo.spec[this.specCurrent].e_buy_price.toFixed(2).split('.');
				// this.dataInfo.spec[this.specCurrent].e_buy_price =
				// 	`<text class="font-lg text-red font-weight-bold">${splitPrice[0]}</text><text class="text-red">.</text><text class="text-red font-weight-bold font-sm">${splitPrice[1]}</text>`;

			},
			// handleValChange(e) {
			// 	console.log(e);
			// },
			// handleEvaluatePage() {
			// 	this.$u.route('/pages/evaluate/evaluate')
			// },
			handleGetEvaluateInfo(p_id) {
				let obj = {
					id: '',
					commodity_id: '',
					commodity_code: this.dataInfo.equipment_id,
					p_id: '',
					is_picture: '',
					lable: '',
					star_level: '',
					pagination: JSON.stringify(this.pagination)
				}
				// console.log(obj);
				this.$u.post('/SearchEvaluate', obj).then(res => {
					// console.log(JSON.stringify(res));
					this.tableList = res.data.rows;
					if (res.code == 200 && this.tableList.length !== 0) {
						let arr = res.data.rows[0].Table;
						this.commentInfo = arr;
						console.log(this.commentInfo);
					}
				})
			},
			handleTapNewAddress() {
				let obj = {
					dataInfo: JSON.stringify(this.dataInfo.spec[this.specCurrent]),
					ename: this.dataInfo.ename,
					num: this.num,
					equipment_id: this.dataInfo.equipment_id,
					address: this.address[this.addressIndex]
				}
				uni.setStorageSync('address', obj)
				// console.log(obj);
				this.$u.route('/pages/order/order?state=0')
			}
		}
	}
</script>

<style scoped lang="less">
	.wrap {
		height: 100vh;
		background: #F3F3F3;
		// z-index: -1;
	}

	.scrollHeight {
		height: calc(100vh - var(--status-bar-height) - 150rpx);
	}

	.specActive {
		background-color: #fc979f;
		color: #fff;
	}

	.space {
		background-color: #f3f3f3;
	}

	/deep/ .uni-scroll-view::-webkit-scrollbar {
		/* 隐藏滚动条，但依旧具备可以滚动的功能 */
		display: none
	}
</style>
