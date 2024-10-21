<template>
	<view>
		<view class="flex text-center text-white text-lg">
			<view class="title_btn flex-sub" @click="cut(1)" :style="{backgroundColor:title_color==1?bgCol2: ''}" >我的余额</view>
			<view class="title_btn flex-sub" @click="cut(2)" :style="{backgroundColor:title_color==2?bgCol2: ''}" >我的收益</view>
		</view>
		<view v-if="title_color==1" class="padding">
			<view class=" radius bg">
				<view class=" u-flex u-p-l-30 u-p-t-30 u-p-b-30">
					<view class="u-m-r-20">
						<u-avatar :src="avatar" size="80"></u-avatar>
					</view>
					<view class="u-flex-1 ">
						<view class="u-font-16 text-white text-bold">0币</view>
						<view class="u-font-14 u-m-t-10 u-tips-color" style="color: #A1A2B2;">金币用于订单支付，会员开通</view>
					</view>
				</view>
			</view>
			<view class="margin-top radius bg flex justify-between flex-wrap padding-lr padding-bottom">
				<view class="flex justify-between padding-sm radius margin-top" style="color: #1789FD;background-color: #3B3D55; width: 46%;">
					<view class="flex">
						<u-image src="../static/jinbi.png" mode="" width="38upx" height="38upx" ></u-image>
						<text class="margin-left-sm">5</text>
					</view>
					<view>
						¥5
					</view>
				</view>
				<view class="flex justify-between padding-sm radius margin-top" style="color: #1789FD;background-color: #3B3D55; width: 46%;">
					<view class="flex">
						<u-image src="../static/jinbi.png" mode="" width="38upx" height="38upx" ></u-image>
						<text class="margin-left-sm">20</text>
					</view>
					<view>
						¥5
					</view>
				</view>
				<view class="flex justify-between padding-sm radius margin-top" style="color: #1789FD;background-color: #3B3D55; width: 46%;">
					<view class="flex">
						<u-image src="../static/jinbi.png" mode="" width="38upx" height="38upx" ></u-image>
						<text class="margin-left-sm">50</text>
					</view>
					<view>
						¥5
					</view>
				</view>
				<view class="flex justify-between padding-sm radius margin-top" style="color: #1789FD;background-color: #3B3D55; width: 46%;">
					<view class="flex">
						<u-image src="../static/jinbi.png" mode="" width="38upx" height="38upx" ></u-image>
						<text class="margin-left-sm">100</text>
					</view>
					<view>
						¥5
					</view>
				</view>
				<view class="flex justify-between padding-sm radius margin-top" style="color: #1789FD;background-color: #3B3D55; width: 46%;">
					<view class="flex">
						<u-image src="../static/jinbi.png" mode="" width="38upx" height="38upx" ></u-image>
						<text class="margin-left-sm">200</text>
					</view>
					<view>
						¥5
					</view>
				</view>
				<view class="flex justify-between padding-sm radius margin-top" style="color: #1789FD;background-color: #3B3D55; width: 46%;">
					<view class="flex">
						<u-image src="../static/jinbi.png" mode="" width="38upx" height="38upx" ></u-image>
						<text class="margin-left-sm">500</text>
					</view>
					<view>
						¥5
					</view>
				</view>
			</view>
			<view class="btn">开通会员</view>
		</view>
		<view v-if="title_color==2" class="padding">
			<view class="bg radius text-white padding">
				<view class="text-lg">金币收入</view>
				<view class="flex margin-top-sm">
					<!-- <view class="text-xxl"></view> -->
					<view class="text-xxl">5币</view>
				</view>
				<view class="margin-top-sm">可用余额: 5币</view>
			</view>
			<view class="bg radius text-white padding margin-top">
				<view class="text-lg">提现金额</view>
				<view class="margin-top-sm"> <text class="text-xxl">0币</text> =0元</view>
			</view>
			<view class="btn1">立即提现</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title_color: 2,
				bgCol1: '#1E1F31',
				bgCol2: '#2E2F48',
				
			}
		},
		onLoad() {

		},
		methods: {
			cut(e) {
				this.title_color = e
			}
		}
	}
</script>

<style>
	.title_btn {
		height: 78upx;
		line-height: 78upx;
		background-color: #1E1F31;
	}
	
	.btn {
		width: 100%;
		height: 88upx;
		background: #1789FD;
		border-radius: 44upx;
		text-align: center;
		line-height: 88upx;
		margin-top: 40upx;
		font-size: 28upx;
		color: #FFF;
	}
	.btn1 {
		width: 100%;
		height: 88upx;
		background: #A3B8CC;
		border-radius: 44upx;
		text-align: center;
		line-height: 88upx;
		margin-top: 40upx;
		font-size: 28upx;
		color: #FFF;
		font-weight: bold;
	}
</style>
