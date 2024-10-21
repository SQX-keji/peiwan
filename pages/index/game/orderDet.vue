<template>
	<view >
		<view class="padding">
			<view class="padding bg">
				<view class=" u-flex">
					<view class="u-m-r-10">
						<u-avatar :src="avatar" mode="square" size="100"></u-avatar>
					</view>
					<view class="u-flex-1 text-white margin-left-xs">
						<view class="u-font-16  text-bold">清风渡我</view>
						<view class="u-font-14 margin-top-sm u-tips-color flex justify-between">
							<view class="text-blue">10币/局</view>
						</view>
					</view>
				</view>
			</view>
			<view class="padding bg margin-top">
				<view class="flex justify-between  margin-top">
					<view class="text-lg" style="color: #A1A2B3;width: 140upx;">服务技能</view>
					<view class="text-white">王者荣耀</view>
				</view>
				<view class="flex justify-between  margin-top">
					<view class="text-lg" style="color: #A1A2B3;width: 140upx;">购买数量</view>
					<!-- <view class="text-white">×1</view> -->
					<u-number-box v-model="value" min='1' bg-color="#27283C" color="#fff" @change="valChange"></u-number-box>
				</view>
				<view class="flex justify-between  margin-top">
					<view class="text-lg" style="color: #A1A2B3;width: 140upx;">单价</view>
					<view class="text-white">5币/局</view>
				</view>
			</view>
			<view class="padding bg margin-top">
				<view class="flex justify-between">
					<view class="text-lg" style="color: #A1A2B3;margin-right: 20upx;">备注说明</view>
					<textarea class="text-white text-df flex-sub" placeholder="简单描述下您的要求" placeholder-style="text-align: right;" style="height: 200upx;"></textarea>
				</view>
			</view>
		</view>
		<view class="text-white flex justify-between cu-bar foot bg padding-lr">
			<view >
				实付：<text style="font-size: 38upx;margin-top: 8upx;">5币</text>
			</view>
			<view class="">
				<u-button :custom-style="customStyle" @click="goNav()" shape="circle" :hair-line="false" >立即支付</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				customStyle: {
					width: '340upx',
					color: '#FFFFFF',
					background: "#2087fe",
					border: 0
				}
			}
		},
		onLoad() {
	
		},
		methods: {
	
		}
	}
</script>

<style>
	textarea::-webkit-input-placeholder {
	    color: red;
		
	}
</style>
