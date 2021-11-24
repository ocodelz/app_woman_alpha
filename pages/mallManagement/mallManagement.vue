<template>
	<view class="wrap">
		<view class="flex align-center justify-center w-100">
			<view class="bg-white py-3 flex align-center justify-center mt-2" style="width: 90%;border-radius: 22rpx;">
				<view v-for="(item,index) in list" :key="index" class="flex align-center flex-column w-100 position-relative"
				@click="handleTapItem(item)">
					<u-image :src="item.img" width="50" height="50"></u-image>
					<view class="position-absolute bg-danger rounded-circle text-white font-small  flex align-center justify-center"
					 style="width: 30rpx;right: 30rpx;top: -10rpx;">{{item.count > 99 ? '99' : item.count}}</view>
					<view class="position-absolute text-danger font-weight-bold font-md" style="top: -30rpx;right: 16rpx;" v-if="item.count > 99">+</view>
					<text class="font-small ">{{item.text}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						img: "/static/image/mallManagement/collection.png",
						text: '商品收藏',
						count: ''
					},
					{
						img: '/static/image/mallManagement/to_be_paid.png',
						text: '待付款',
						count: 10
					},
					{
						img: '/static/image/mallManagement/to_be_received.png',
						text: '待收货',
						count: 100
					},
					{
						img: '/static/image/mallManagement/evaluate.png',
						text: '待评价',
						count: 25
					},
					{
						img: '/static/image/mallManagement/my_order.png',
						text: '我的订单'
					}
				],
				collection:[]
			}
		},
		onLoad() {
			uni.getStorage({
				key: 'user_login',
				success: (res => {
					this.handleGetData(res.data.PregnantID);
				})
			})
		},
		methods:{
			handleGetData(p_id) {
				this.$u.post('/GetAllCollect', {
					p_id: p_id
				}).then(res => {
					// console.log(JSON.stringify(res));
					for(let item of res.data){
						item.picture = item.picture.split(',');
					}
					this.collection = res.data;
					this.list[0].count = this.collection.length;
				})
			},
			handleTapItem(item) {
				switch (item.text) {
					case '商品收藏':
						this.$u.route('/pages/ollectionOfGoods/ollectionOfGoods?collection='+JSON.stringify(this.collection))
						break;
					case '待付款':
						break;
					case '待收货':
						break;
					case '待评价':
						break;
					case '我的订单':
						break;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		width: 100%;
		height: 100vh;
		background-color: #e3e3e3;
	}
</style>
