<template>
	<view class="padding">
		<view style="position: relative;border-radius: 10upx;overflow: hidden;">
			<u-image src="../static/vip.png" width="100%" height="250upx"></u-image>
			<view class=" u-flex u-p-l-30 u-p-t-80 u-p-b-30" style="position: absolute;top: 0;width: 100%;">
				<view class="u-m-r-20">
					<u-avatar :src="avatar" size="100"></u-avatar>
				</view>
				<view class="u-flex-1 ">
					<view class="u-font-18 text-white text-bold">佛系小草莓</view>
					<view class="u-font-14 u-m-t-10 u-tips-color" style="color: #C59D7C;">您目前还未开通会员</view>
				</view>
			</view>
		</view>
		<view class="margin-top" style="position: relative;border-radius: 10upx;overflow: hidden;">
			<u-image src="../static/bg.png" width="100%" height="390upx"></u-image>
			<view class="" style="position: absolute;top: 0;width: 100%;">
				<view class="text-center text-xl text-bold margin-top" style="color: #CAB49C;">开通专享特权</view>
				<view class="flex justify-between flex-wrap" >
					<view v-for="(item,index) in gridData" :key="index" style="width: 30%;text-align: center;margin-top: 34upx;">
						<u-image :src="item.image" mode="" width='45' height="45" style="margin: 0 auto;"></u-image>
						<view class="grid-text margin-top-sm" style="color: #DFC5A7;">{{item.title}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="btn">开通会员</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gridData: [
					{
						title: '专享折上折',
						image: '../static/1.png'
					},
					{
						title: '特权礼物',
						image: '../static/2.png'
					},
					{
						title: '身份标识',
						image: '../static/3.png'
					},
					{
						title: '超值专享券',
						image: '../static/4.png'
					},
					{
						title: '商家特权',
						image: '../static/5.png'
					},
					{
						title: '定制挂件',
						image: '../static/6.png'
					}
				],
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
.bg {
		background-color: #1E1F31;
	}
	.btn {
		width: 100%;
		height: 88upx;
		background: linear-gradient(0deg,#af8262 0%, #cab49c 100%);
		border-radius: 44upx;
		text-align: center;
		line-height: 88upx;
		margin-top: 40upx;
		font-size: 34upx;
		font-weight: 600;
		color: #402321;
	}
</style>
