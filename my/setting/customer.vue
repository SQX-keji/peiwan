<template>
	<view style="height: 100vh;margin: 32upx;">
		<view style="text-align: center;background: #1F2029;padding: 40upx;border-radius: 32upx;">
			<view style="font-size: 38upx;color: #FFFFFF">添加客服微信咨询</view>
			<view style="font-size: 32upx;margin-top: 32upx;color: #FFFFFF">微信号：{{weixin}}</view>
			<view @click="copyHref" style="background: #5E81F9;width:200upx;margin-top: 32upx;font-size: 30upx;margin-left: 36%;color: #FFFFFF;padding: 4upx 20upx;border-radius: 24upx;">一键复制</view>
			
			<image @click="saveImg" mode="aspectFit" style="margin-top: 32upx" :src="image"></image>
			<view style="font-size: 28upx;color: #FFFFFF;margin-top: 32upx" v-if="isWeiXin">{{ isWeiXin ? '长按识别上方二维码' : '' }}</view>
			
			
			<view @click="goChat" style="width:260upx;margin-top: 32upx;font-size: 30upx;margin-left: 28%;color: #5E81F9;padding: 4upx 20upx;border-radius: 24upx;">联系在线客服</view>
			<view v-if="isWeiXin" style="font-size: 24upx;color: #FFFFFF;margin-top: 80upx" @click="rests">无法识别？</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			image: 'https://game.shengqianxiong.com.cn/custom.jpg',
			isWeiXin: false,
			weixin: '710070994',
			webviewStyles: {
				progress: {
					color: '#1A1929 '
				}
			}
		};
	},
	onLoad() {
		// #ifdef H5
		let ua = navigator.userAgent.toLowerCase();
		if (ua.indexOf('micromessenger') !== -1) {
			this.isWeiXin = true;
		}
		// #endif
		//获取客服二维码
		this.$Request.getT('/common/type/1').then(res => {
			if (res.status == 0) {
				if (res.data && res.data.value) {
					this.image = res.data.value;
				}
				// uni.navigateBack();
			}
		});
		this.$Request.getT('/common/type/44').then(res => {
			if (res.status == 0) {
				if (res.data && res.data.value) {
					this.weixin = res.data.value;
				}
			}
		});
	},
	onPullDownRefresh: function() {
		uni.stopPullDownRefresh(); // 停止刷新
	},
	methods: {
		//邀请码复制
		copyHref() {
			uni.setClipboardData({
				data: this.weixin,
				success: r => {
					this.$queue.showToast('复制成功');
				}
			});
		},
		saveImg() {
			let that = this;
			uni.saveImageToPhotosAlbum({
				filePath: that.image,
				success(res) {
					that.$queue.showToast('保存成功');
				}
			});
		},
		rests() {
			uni.showToast({
				title: '已刷新请再次长按识别',
				mask: false,
				duration: 1500,
				icon: 'none'
			});
			window.location.reload();
		},
		// 在线客服
		goChat(){
			let token = this.$queue.getData('token');
			if (token) {
				uni.navigateTo({
					url: '/pages/member/chat'
				});
			} else {
				this.goLoginInfo();
			}
		},
		//统一登录跳转
		goLoginInfo() {
			uni.navigateTo({
				url: '/pages/public/loginphone'
			});
		},
	}
};
</script>

<style>
/* @import '../../static/css/index.css'; */

page{
		background: #1c1b20;
	}

</style>
