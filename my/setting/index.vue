<template>
	<view class="text-white padding-lr">
		<view class="flex  padding-tb" @click="goNav('/pages/public/pwd')">
			<view class="flex-sub text-df" style="line-height: 50upx;">修改密码</view>
			<u-image src="../../static/images/my/right.png" width="20upx" height="30upx" mode="" style="line-height: 50upx;"></u-image>
		</view>
		<!-- <view class="flex  padding-tb">
			<view class="flex-sub text-df" style="line-height: 50upx;">帮助中心</view>
			<u-image src="../../static/images/my/right.png" width="20upx" height="30upx" mode="" style="line-height: 50upx;"></u-image>
		</view> -->
		<view class="flex  padding-tb" @click="goNav('/my/setting/xieyi')">
			<view class="flex-sub text-df" style="line-height: 50upx;">用户协议</view>
			<u-image src="../../static/images/my/right.png" width="20upx" height="30upx" mode="" style="line-height: 50upx;"></u-image>
		</view>
		<view class="flex  padding-tb" @click="goNav('/my/setting/mimi')">
			<view class="flex-sub text-df" style="line-height: 50upx;">隐私政策</view>
			<u-image src="../../static/images/my/right.png" width="20upx" height="30upx" mode="" style="line-height: 50upx;"></u-image>
		</view>
		<view class="flex  padding-tb" @click="goNav('/my/setting/about')">
			<view class="flex-sub text-df" style="line-height: 50upx;">关于我们</view>
			<u-image src="../../static/images/my/right.png" width="20upx" height="30upx" mode="" style="line-height: 50upx;"></u-image>
		</view>
		<view class="btn" @click="goOut" >退出登录</view>
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
			goNav(e) {
				uni.navigateTo({
					url:e
				})
			},
			goOut() {
				
			}
		}
		
	}
</script>

<style>
	.btn {
		width: 100%;
		height: 80upx;
		background: #5E81F9;
		border-radius: 6upx;
		text-align: center;
		line-height: 80upx;
		margin-top: 40upx;
		font-size: 34upx;
		color: #fff;
	}
</style>
