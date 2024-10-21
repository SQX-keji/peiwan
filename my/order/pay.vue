<template>
	<view class="padding">
		<view class="bg padding radius">
			<view class=" u-flex " @click="goNav('/my/setting/userinfo')">
				<view class="u-m-r-10">
					<u-avatar :src="avatar" size="68"></u-avatar>
				</view>
				<view class="u-flex-1 text-white">
					<view class="u-font-14  text-bold">佛系小草莓
					</view>
				</view>
				<view>
					<u-image src="../static/right.png" width="16upx" height="28upx" mode=""></u-image>
				</view>
			</view>
			<view class="flex justify-between  margin-top">
				<view style="color: #A1A2B3;width: 120upx;">服务技能</view>
				<view class="text-white">王者荣耀</view>
			</view>
			<view class="flex justify-between  margin-top">
				<view style="color: #A1A2B3;width: 120upx;">购买数量</view>
				<view class="text-white">×1</view>
			</view>
			<view class="flex justify-between  margin-top">
				<view style="color: #A1A2B3;width: 120upx;">单价</view>
				<view class="text-white">5币/局</view>
			</view>
			<view class="flex justify-between  margin-top">
				<view style="color: #A1A2B3;margin-right: 20upx;">备注说明</view>
				<textarea class="text-white flex-sub" style="height: 100upx;"></textarea>
			</view>
			<view class="flex justify-between  margin-top">
				<view style="color: #A1A2B3;"><u-icon name="chat" size="30" color="#1789FD" class="margin-right-sm" ></u-icon>联系TA</view>
				<view class="text-white">实付：<text class="text-lg text-bold">5币</text></view>
			</view>
		</view>
		<view class="bg padding radius margin-top">
			<view class="text-xl text-white">订单信息</view>
			<view class="flex justify-between  margin-top-xl">
				<view style="color: #A1A2B3;width: 120upx;">订单编号</view>
				<view class="text-white">4566132</view>
			</view>
			<view class="flex justify-between  margin-top">
				<view style="color: #A1A2B3;width: 120upx;">下单时间</view>
				<view class="text-white">2021-07-02 15:32:21</view>
			</view>
		</view>
		<view class="flex justify-between margin-top-xl">
			<u-button class="margin-top" :custom-style="customStyle" :hair-line="false" >取消订单</u-button>
			<u-button class="margin-top" :custom-style="customStyle2" :hair-line="false" >立即支付</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				customStyle: {
					backgroundColor: '#27283C',
					color: '#FFFFFF',
					border: 0,
					width: "330upx",
					margin: 0
				},
				customStyle2: {
					backgroundColor: '#2087FE',
					color: '#FFFFFF',
					border: 0,
					width: "330upx",
					margin: 0
				}
			}
		},
		onLoad() {

		},
		methods: {
			goNav(e) {
				uni.navigateTo({
					url:e
				})
			}
		}
	}
</script>

<style>
.bg {
		background-color: #1E1F31;
	}
</style>
