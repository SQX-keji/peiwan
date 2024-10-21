<template>
	<view class="">
		<view class="margin-top padding-lr bg">
			<view class="flex padding-tb" @click="goIM">
				<view>
					<u-image shape="circle" width='80rpx' height="80rpx"
						src="../../static/images/msg/msg.png"></u-image>
				</view>
				<view class="flex-sub margin-left-sm">
					<view class="flex justify-between">
						<view class="text-white">系统消息</view>
					</view>
					<view>
						<view class="text-grey">你取消了该订单</view>
					</view>
				</view>
			</view>
		</view>

		<view class="margin-top content padding-lr bg">
			<view class="flex padding-tb u-border-bottom" @click="goIM">
				<view>
					<u-image shape="circle" width='80rpx' height="80rpx"
						src="https://cdn.uviewui.com/uview/swiper/1.jpg"></u-image>
				</view>
				<view class="flex-sub margin-left-sm">
					<view class="flex justify-between">
						<view class="text-white">一言难尽</view>
						<view class="text-grey">刚刚</view>
					</view>
					<view>
						<view class="text-grey">玩游戏吗？带你飞</view>
						<view></view>
					</view>
				</view>
			</view>
			<view class="flex padding-tb u-border-bottom">
				<view>
					<u-image shape="circle" width='80rpx' height="80rpx"
						src="https://cdn.uviewui.com/uview/swiper/1.jpg"></u-image>
				</view>
				<view class="flex-sub margin-left-sm">
					<view class="flex justify-between">
						<view class="text-white">一言难尽</view>
						<view class="text-grey">刚刚</view>
					</view>
					<view>
						<view class="text-grey">玩游戏吗？带你飞</view>
						<view></view>
					</view>
				</view>
			</view>
			<view class="flex padding-tb ">
				<view>
					<u-image shape="circle" width='80rpx' height="80rpx"
						src="https://cdn.uviewui.com/uview/swiper/1.jpg"></u-image>
				</view>
				<view class="flex-sub margin-left-sm">
					<view class="flex justify-between">
						<view class="text-white">一言难尽</view>
						<view class="text-grey">刚刚</view>
					</view>
					<view>
						<view class="text-grey">玩游戏吗？带你飞</view>
						<view></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			goIM() {
				uni.navigateTo({
					url: '/pages/msg/im'
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #111224;
	}

	.bg {
		background-color: #1E1F31;
	}
</style>
