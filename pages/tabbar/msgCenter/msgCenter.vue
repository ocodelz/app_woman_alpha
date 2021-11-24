<template>
	<view>
		<view class="p-2" v-if="list.length">
			<u-notice-bar mode="horizontal" :is-circular="true" :list="notice"></u-notice-bar>
		</view>
		<view v-if="list.length" class="w-100 flex justify-center align-center flex-column">
			<block v-for="(item,index) in list" :key="index">
				<view class="border p-3 mb-2 rounded position-relative" :class="current == index ? 'active' : 'bg-white'" style="width: 96%;"
				 @click="handleTapItem(index)">
					<view class="flex flex-column">
						<text>设备名称: {{item.e_name}}</text>
						<text>设备类型: {{item.e_type}}</text>
						<text>到期时间: {{item.return_time.substr(0,10)}}</text>
					</view>
				</view>
			</block>
		</view>
		<view v-else>
			<u-empty text="消息列表为空" mode="message" icon-size="80" margin-top="120"></u-empty>
		</view>
		<u-tabbar :list="tabBer" :mid-button="$store.state.midBtn" :active-color="activeColor" :inactive-color="inactiveColor"></u-tabbar>
	</view>
</template>

<script>
	import tool from '../../../utils/util.js';
	export default {
		data() {
			return {
				notice:['以下设备即将过期，如有需要请及时联系管理员续费！'],
				list: [],
				current: -1,
				inactiveColor: '#000',
				activeColor: '#f07373'
			}
		},
		onShow() {
			let res = uni.getStorageSync('aboutToExpire');
			this.list = res;
			// console.log(this.list);
			this.$store.commit('tabBerList')
		},
		computed:{
			tabBer() {
				return this.$store.state.tabBarlist
			}
		},
		methods: {
			handleTapItem(index) {
				this.current = index;
			}
		}
	}
</script>

<style scoped>
	.active {
		background-color: #f8f9fa;
	}
</style>
