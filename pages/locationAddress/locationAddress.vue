<template>
	<view class="content">
		
		
		<view style="width:100%; background-color: #969696;">
			<input v-model="keyword" confirm-type="search" placeholder="请输入位置" @input="getLikePos" />
			<view v-for="item in posList">
				{{item.title}}
			</view>
		</view>
		
		
		<map id="map" style="width: 100%; height: 350px; margin-top: 20rpx;" :polyline="daohang" show-location="true"
		 :latitude="latitude" :longitude="longitude" :markers="markers" :circles="circles">
		</map>
		<view>{{local1}}</view>
		<view>{{local2}}</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: 0,
				longitude: 0,
				markers: [],
				circles: [{
					latitude: 0,
					longitude: 0,
					color: '#0000AA20',
					fillColor: '#0000AA20',
					radius: 200, //定位点半径
					strokeWidth: 1
				}],
				local1: '',
				local2: '',
				daohang: [{
					points: [{
							latitude: 36.508974,
							longitude: 116.800768,
						},
						{
							latitude: 36.5095,
							longitude: 116.802,
						}
					],
					color: "#00FF00", //线的颜色
					width: 2, //线的宽度
					dottedLine: false, //是否虚线
					arrowLine: true, //带箭头的线 开发者工具暂不支持该属性
				}, ],
				origin: '',
				keyword: '',
				posList:[]
			}
		},
		onLoad() {
			this.getLocation()
		},
		methods: {
			getLocation() {
				let that = this
				uni.getLocation({
					type: 'gcj02',
					success: function(res) {
						// 当前坐标圈的中心（当前坐标）
						that.circles[0].latitude = res.latitude
						that.circles[0].longitude = res.longitude

						// 当前坐标
						that.latitude = res.latitude
						that.longitude = res.longitude

						// 标记
						that.markers[0] = {
							id: 1,
							latitude: res.latitude,
							longitude: res.longitude,
							iconPath: '../../static/location.png'
						}

						// 获取中文位置
						uni.request({
							header: {
								"Content-Type": "application/text"
							},
							url: 'http://apis.map.qq.com/ws/geocoder/v1/?location=' + res.latitude + ',' + res.longitude +
								'&key=MVGBZ-R2U3U-W5CVY-2PQID-AT4VZ-PDF35',
							success(re) {
								console.log("中文位置")
								console.log(re)
								if (re.statusCode === 200 && re.data.status == 0) {
									console.log("获取中文街道地理位置成功")
									that.local1 = re.data.result.address;
									that.local2 = re.data.result.formatted_addresses.recommend;
									that.origin = re.data.result.address_component.city
								} else {
									uni.showToast({
										icon: 'none',
										title: re.data.message
									})
								}
							}
						});
					}
				});
			},
			// 查询坐标关键字
			getLikePos() {
				let that = this
				uni.request({
					header: {
						"Content-Type": "application/text"
					},
					url: 'https://apis.map.qq.com/ws/place/v1/suggestion/' +
						'?region=' + this.origin + '&keyword=' + this.keyword +
						'&key=WN3BZ-VDYCG-UDCQX-IR2KI-ISLM7-WOB2E',
					success(res) {
						console.log("地图搜索", res)
						if(res.statusCode == 200){
							that.posList = res.data.data
						}
					}
				});
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* background: ; */
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
