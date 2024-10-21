<template>
	<view>
		<view class="padding-sm">
			<u-image width="710upx" height="320upx" style="display: inline-block;margin-right: 6upx;"
				src="../../../static/images/index/bannner1.png"></u-image>

			<view class="margin-top-sm padding flex justify-between bg">
				<u-avatar :src="src" mode="square"></u-avatar>
				<view class="flex-sub margin-left-sm">
					<view class="text-white text-lg">王者荣耀陪练</view>
					<view class="margin-top-xs">
						<view
							style="width: 16upx;height: 16upx;background: #1AD566;border-radius: 10upx;display: inline-block;margin: 0 8upx 4upx 0;">
						</view>
						<text class="margin-left-xs" style="color: #CCCCCC;">在线</text>
						<text class="margin-left-sm" style="color: #CCCCCC;">西安市</text>
					</view>
				</view>
			</view>
			<view class="margin-top-sm padding bg">
				<view class="flex justify-between">
					<view>
						<text class="text-white">王者荣耀陪练</text>
						<view class="round margin-left-xs"
							style="display: inline-block;background-color: #582D4D; color: #FF659A;padding: 2upx 8upx;">
							<u-icon name="woman" color="#FF659A" size="24"></u-icon>
							24
						</view>
					</view>
					<view class="text-white"><text style="color: #FF6F1B;">7币 </text> /局</view>
				</view>
				<view class="flex margin-top-sm">
					<view class="" style="color: #3390FF;background: rgba(51,143,255,0.3);padding: 0 8upx;">
						评分5.0
					</view>
					<view class="margin-left-sm"
						style="color: #3390FF;background: rgba(51,143,255,0.3);padding: 0 8upx;">
						14人下单
					</view>
				</view>
				<view class="margin-tb">
					<view class="flex round justify-between"
						style="background-color: #24416F;padding: 0;width: 170upx;">
						<u-image src="../../../static/images/index/stop.png" width="38upx" height="38upx" mode="">
						</u-image>
						<u-image src="../../../static/images/index/audio.png" width="42upx" height="27upx" mode=""
							style="line-height: 44upx;"></u-image>
						<view class="text-white padding-right" style="line-height: 38upx;">4S</view>
					</view>
				</view>
				<u-line color="#36374A" :hair-line="false" />
				<view class="flex margin-top-sm">
					<view style="color: #B8B8CC;">可接大区：</view>
					<view class="text-white">微信区</view>
					<view class="margin-left-xs text-white">QQ区</view>
				</view>
				<view class="flex margin-top-sm">
					<view style="color: #B8B8CC;">接单时间：</view>
					<view class="text-white">周一至周四 00:00~08:00</view>
				</view>
				<view class="flex margin-top-sm">
					<view style="color: #B8B8CC;">可接段位：：</view>
					<view class="text-white">至尊星耀 永恒钻石 最强王者</view>
				</view>
			</view>
			<view class="margin-top-sm padding bg text-white">
				<view class="text-lg">用户评论</view>

				<view class="margin-top-sm">
					<view class="flex justify-between">
						<u-avatar src="../../../static/images/index/image_dijia1.png" size="48"></u-avatar>
						<view class="flex-sub margin-left-sm" style="line-height: 46upx;">我是磨磨牙</view>
						<view class="flex">
							<u-image src="../../../static/images/index/praise.png" width="22upx" height="24upx" mode=""
								style="line-height: 46upx;"></u-image>
							<view class="margin-left-xs">满意</view>
						</view>
					</view>
					<view class="margin-top-sm">
						小哥哥太会聊天了吧~声音好听，照顾我的游戏体验就很棒
					</view>
				</view>
				<view class="margin-top-sm">
					<view class="flex justify-between">
						<u-avatar src="../../../static/images/index/image_dijia1.png" size="48"></u-avatar>
						<view class="flex-sub margin-left-sm" style="line-height: 46upx;">我是磨磨牙</view>
						<view class="flex">
							<u-image src="../../../static/images/index/praise.png" width="22upx" height="24upx" mode=""
								style="line-height: 46upx;"></u-image>
							<view class="margin-left-xs">满意</view>
						</view>
					</view>
					<view class="margin-top-sm">
						下赛季一起呀
					</view>
				</view>
			</view>
		</view>
		<view class="text-white flex justify-between cu-bar foot bg padding-lr">
			<view>
				<u-image src="../../../static/images/index/guanzhu.png" width="49upx" height="43upx" mode=""></u-image>
				<view style="font-size: 22upx;margin-top: 8upx;">关注</view>
			</view>
			<view @click="goMsg" >
				<u-image src="../../../static/images/index/im.png" width="48upx" height="43upx" mode=""></u-image>
				<view style="font-size: 22upx;margin-top: 8upx;">聊天</view>
			</view>
			<view class="">
				<u-button :custom-style="customStyle" @click="goNav()" shape="circle" :hair-line="false" >下单</u-button>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: '../../../static/images/index/image_dijia1.png',
				customStyle: {
					width: '400upx',
					color: '#FFFFFF',
					background: "#2087fe",
					border: 0
				}
			}
		},
		onLoad() {

		},
		methods: {
			goNav() {
				uni.navigateTo({
					url:"/pages/index/game/orderDet"
				})
			},
			goMsg() {
				uni.navigateTo({
					url:"/pages/msg/im"
				})
			}
		}

	}
</script>

<style>
</style>
