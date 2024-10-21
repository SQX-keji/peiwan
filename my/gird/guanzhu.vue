<template>
	<view class="content">
		<view>
			<view class=" u-flex u-p-l-30 u-p-t-30 u-p-b-10 u-p-r-30">
				<view class="u-m-r-10">
					<u-avatar :src="avatar" size="100"></u-avatar>
				</view>
				<view class="u-flex-1 text-white margin-left-xs">
					<view class="u-font-16  text-bold">佛系小草莓</view>
					<view class="u-font-14 u-tips-color" @click="goNav('/pages/me/vip/index')">邀请码:2641646</view>
				</view>
				<view v-if="" class="">
					<view class="round" style="color: white;background: #474966;padding: 10upx 24upx;width: 150upx;text-align: center;font-size: 22upx;">互相关注</view>
				</view>
			</view>
			
			<view class=" u-flex u-p-l-30 u-p-t-30 u-p-b-10 u-p-r-30">
				<view class="u-m-r-10">
					<u-avatar :src="avatar" size="100"></u-avatar>
				</view>
				<view class="u-flex-1 text-white margin-left-xs">
					<view class="u-font-16  text-bold">佛系小草莓</view>
					<view class="u-font-14 u-tips-color" @click="goNav('/pages/me/vip/index')">邀请码:2641646</view>
				</view>
				<view v-if="" class="">
					<view class="round" style="color: white;background: #474966;padding: 10upx 24upx;width: 150upx;text-align: center;font-size: 22upx;">关注</view>
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
		onLoad(e) {
			console.log(e)
			uni.setNavigationBarTitle({
				title: e.name
			})
		},
		methods: {

		}
	}
</script>

<style>

</style>
