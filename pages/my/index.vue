<template>
	<view class="text-white bg">
		<view class=" u-flex u-p-l-30 u-p-t-30 u-p-b-30">
			<view class="u-m-r-10">
				<u-avatar :src="avatar" size="100"></u-avatar>
			</view>
			<view class="u-flex-1 text-white" v-if="isLogin" @click="goNav('/my/setting/userinfo')">
				<view class="u-font-18  text-bold">佛系小草莓
					<view class="round margin-left-xs u-font-12" @click.stop="goNav('/my/renzheng/index')"
						style="display: inline-block;background-color: #37394E; color: #FFFFFF;padding: 2upx 16upx;font-weight: 400;">
						未实名
					</view>
				</view>
				<view class="u-font-14 u-tips-color" @click="goNav('/pages/me/vip/index')">邀请码:2641646</view>
			</view>
			<view v-else class="text-xl u-p-l-20 text-bold" @click="goNav('/pages/login/login')">
				登录
			</view>
			<view v-if="" class="" >
				<u-image src="../../static/images/my/yaoqing.png" width="163upx" height="58upx" mode=""></u-image>
			</view>
		</view>
		<view class="flex justify-around padding-tb">
			<view style="text-align: center;" @click="goNav('/my/gird/guanzhu?name=我的粉丝')">
				<view class="text-xxl">0</view>
				粉丝
			</view>
			<view style="text-align: center;" @click="goNav('/my/gird/guanzhu?name=我的关注')">
				<view class="text-xxl">0</view>
				关注
			</view>
			<view style="text-align: center;" @click="goNav('/my/gird/visitor?name=最近访客')">
				<view class="text-xxl">0</view>
				访客
			</view>
			<view style="text-align: center;" @click="goNav('/my/gird/visitor?name=浏览足迹')">
				<view class="text-xxl">0</view>
				足迹
			</view>
		</view>
		<view class="" >
			<view class="flex justify-between padding-lr-sm margin-lr padding-tb-sm radius"
				style="background: url(../../static/images/my/bg.png) 100% no-repeat;"
				@click="goNav('/my/vip/index')">
				<u-image src="@/static/images/my/huiyuan.png" width="35px" mode="widthFix"></u-image>
				<view class="flex-sub margin-left text-lg text-bold" style="line-height: 37px;color: #604320;">
					全站海量视频无线学习
				</view>
				<view class="btn-bg" style="color: #604320;">去开通</view>
			</view>
		</view>
		<view>
			<view class="flex padding-lr padding-tb" @click="goNav('/my/wallet/index')">
				<u-image src="../../static/images/my/qianbao.png" width="50upx" height="50upx" mode=""></u-image>
				<view class="flex-sub margin-left text-df" style="line-height: 50upx;">我的钱包</view>
				<u-image src="../../static/images/my/right.png" width="20upx" height="30upx" mode="" style="line-height: 50upx;"></u-image>
			</view>
			<view class="flex padding-lr padding-tb" @click="goNav('/my/order/index')">
				<u-image src="../../static/images/my/order.png" width="50upx" height="50upx" mode=""></u-image>
				<view class="flex-sub margin-left text-df" style="line-height: 50upx;">我的订单</view>
				<u-image src="../../static/images/my/right.png" width="20upx" height="30upx" mode="" style="line-height: 50upx;"></u-image>
			</view>
			<view class="flex padding-lr padding-tb" @click="goNav('/my/publish/index')">
				<u-image src="../../static/images/my/fabu.png" width="50upx" height="50upx" mode=""></u-image>
				<view class="flex-sub margin-left text-df" style="line-height: 50upx;">我的发布</view>
				<u-image src="../../static/images/my/right.png" width="20upx" height="30upx" mode="" style="line-height: 50upx;"></u-image>
			</view>
			<view class="flex padding-lr padding-tb" @click="goNav('/my/setting/customer')">
				<u-image src="../../static/images/my/kefu.png" width="50upx" height="50upx" mode=""></u-image>
				<view class="flex-sub margin-left text-df" style="line-height: 50upx;">在线客服</view>
				<u-image src="../../static/images/my/right.png" width="20upx" height="30upx" mode="" style="line-height: 50upx;"></u-image>
			</view>
			<view class="flex padding-lr padding-tb" @click="goNav('/my/feedback/index')">
				<u-image src="../../static/images/my/yijian.png" width="50upx" height="50upx" mode=""></u-image>
				<view class="flex-sub margin-left text-df" style="line-height: 50upx;">意见反馈</view>
				<u-image src="../../static/images/my/right.png" width="20upx" height="30upx" mode="" style="line-height: 50upx;"></u-image>
			</view>
			<view class="flex padding-lr padding-tb" @click="goNav('/my/setting/help')">
				<u-image src="../../static/images/my/help.png" width="50upx" height="50upx" mode=""></u-image>
				<view class="flex-sub margin-left text-df" style="line-height: 50upx;">帮助中心</view>
				<u-image src="../../static/images/my/right.png" width="20upx" height="30upx" mode="" style="line-height: 50upx;"></u-image>
			</view>
			<view class="flex padding-lr padding-tb"  @click="goNav('/my/setting/index')">
				<u-image src="../../static/images/my/setting.png" width="50upx" height="50upx" mode=""></u-image>
				<view class="flex-sub margin-left text-df" style="line-height: 50upx;">设置中心</view>
				<u-image src="../../static/images/my/right.png" width="20upx" height="30upx" mode="" style="line-height: 50upx;"></u-image>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatar: '../../static/images/my/avatar.png',
				isLogin: true,
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

<style lang="scss">
	.bg {
		background-color: #1E1F31;
	}

	.camera {
		width: 54px;
		height: 44px;

		&:active {
			background-color: #ededed;
		}
	}
	.btn-bg {
		width: 64px;
		height: 28px;
		background: linear-gradient(90deg, #CDA26E 0%, #DCB78A 100%);
		border-radius: 28px;
		text-align: center;
		line-height: 28px;
		margin-top: 4px;
		color: '#604320'
	}
</style>
