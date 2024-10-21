<template>
	<view>
		<view class="margin-sm padding-sm bg-white" v-for="(item, index) in list">
			<view class="flex justify-between solid-bottom padding-tb-sm">
				<view>佛系小草莓</view>
				<view class="text-orange" v-if="item.status==2">待接单</view>
				<view class="text-orange" v-if="item.status==3">接单中</view>
				<view class="text-orange" v-if="item.status==1">已完成</view>
			</view>
			<view class="text-lg text-black text-bold margin-top-sm">{{item.content}}</view>
			<view class="flex margin-top-sm">
				<view class="bg-blue light radius" style="padding: 1px 4px;">限美女</view>
				<view class="bg-orange light radius margin-left" style="padding: 1px 4px;">取快递</view>
				<view class="bg-orange light radius margin-left" style="padding: 1px 4px;">待接单</view>
			</view>
			<view class="margin-top-sm">下单时间：{{item.createTime}}</view>
			<view class="flex justify-between margin-top-sm">
				<view v-if="item.code">收货码：{{item.code}}</view>
				<view>实付款：<text class="text-black text-bold">¥{{item.money}}</text></view>
			</view>
			<view class="flex justify-end bg-white padding-tb-sm" style="">
				<button class="cu-btn  round margin-right" style="width: 90px;" @click="delDemand(item)" v-if="item.status==2">删除</button>
				<button class="cu-btn bg-orange  round" style="width: 90px;" @click="edit(item)">完善需求</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default () {
					return []
				}
			}
		},
		methods: {
			delDemand(e) {
				let data = {
					helpOrderId: e.id
				}
				this.$Request.postT('/help/deleteHelpOrder', data).then(res => {
					uni.showToast({
						title:"删除成功"
					})
				})
			},
			edit(item) {
				uni.navigateTo({
					url: '/pages/order/release?type=hasEdit&id=' + item.id + '&content=' + item.content +
						'&site=' + item.site +
						'&phone=' + item.phone + '&deliveryTime=' + item.deliveryTime + '&classifyId=' + item
						.classifyId +
						'&classifyName=' + item.classifyName + '&userType=' + item.userType + '&commission=' + item
						.commission
				})
			}
		}

	}
</script>

<style>
</style>
