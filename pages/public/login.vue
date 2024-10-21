<template>
	<view class="container">
		<image @click="navBack" src="../../static/images/index/close.png" style="width: 32upx;height: 32upx;margin-left: 46upx;"></image>

		<view style="text-align: center;">
			<image style="width: 120upx;height: 120upx;margin-top: 140upx;border-radius:20upx" src="../../static/logo.png"></image>
			<view style="font-size: 28upx;margin-top: 32upx">欢迎使用省钱兄电竞任务平台</view>
			<!-- #ifdef APP-PLUS -->
			<button v-if="weixinLogin" class="confirm-btn" @click="weixinLo">微信登录</button>
			<button v-if="weixinLogin" class='confirm-btn-weixin' @click="register">手机号登录</button>
			<button v-if="!weixinLogin" class='confirm-btn' @click="register">手机号登录</button>
			<!-- #endif -->
			<!-- #ifdef H5 -->
			<button class="confirm-btn" @click="register">手机号登录</button>
			<!-- #endif -->

			<!-- 底部信息 -->
			<view class="footer">
				<text>登录即代表同意</text>
				<!-- 协议地址 -->
				<navigator url="/my/setting/mimi" open-type="navigate">《隐私政策》</navigator>
				和
				<navigator url="/my/setting/xieyi" open-type="navigate">《用户服务协议》</navigator>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				mobile: '',
				code: '',
				weixinLogin: false,
				sending: false,
				sendTime: '获取验证码',
				count: 60
			};
		},
		onLoad(e) {
			if (e.invitation) {
				this.$queue.setData('relation', e.invitation);
			}
			//微信登录开启
			this.$Request.getT('/common/type/53').then(res => {
				if (res.code == 0) {
					if (res.data && res.data.value && res.data.value == '是') {
						this.weixinLogin = true;
					}
				}
			});
		},
		methods: {
			weixinLo() {
				let that = this;
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						that.$queue.showLoading('正在登录中...');
						console.error(loginRes.authResult);
						that.$queue.setData('weixinToken', loginRes.authResult.access_token);
						that.$queue.setData('unionid', loginRes.authResult.unionid);
						that.$queue.setData('weixinOpenid', loginRes.authResult.openid);
						that.$Request.postJson('/appLogin/loginApp', {
								token: loginRes.authResult.access_token,
								unionid: loginRes.authResult.unionid,
								openid: loginRes.authResult.openid
							})
							.then(res => {
								console.log(JSON.stringify(res))
								if (res.code === 0) {
									if (uni.getSystemInfoSync().platform == "android") {
										let clientid = plus.push.getClientInfo().clientid;
										that.$Request.postT('/appLogin/updateClientId?clientId=' + clientid + '&userId=' + res.userId).then(res => {
											
										});
									}
									that.$queue.setData("token", res.uuid);
									that.$queue.setData("userId", res.userId);
									that.getUserInfo(res.userId, res.token);
								} else {
									uni.hideLoading();
									uni.navigateTo({
										url: '/pages/public/wxmobile'
									});
								}
							});


					}
				});
			},

			forget() {
				uni.navigateTo({
					url: '/pages/public/pwd'
				});
			},
			register() {
				uni.navigateTo({
					url: '/pages/public/loginphone'
				});
			},
			inputChange(e) {
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			navBack() {
				uni.navigateBack();
			},

			getUserInfo(userId, token) {
				this.$Request.postJson('/app/selectUserById?userId=' + userId).then(res => {
					if (res.code === 0) {
						this.$queue.setData('token', res.data.uuid);
						this.$queue.setData('image_url', res.data.imageUrl ? res.data.imageUrl : '/static/img/common/logo.jpg');
						this.$queue.setData('relation_id', res.data.relationId);
						this.$queue.setData('relation', res.data.invitationCode);
						this.$queue.setData('grade', res.data.grade);
						this.$queue.setData('mobile', res.data.mobile);
						this.$queue.setData('isInvitation', res.data.isInvitation);
						this.$queue.setData('nickName', res.data.nickName ? res.data.nickName : res.data.phone);
						this.$queue.setData('gender', parseInt(res.data.gender));
						uni.switchTab({
							url: '/pages/index/index'
						});
					} else {
						uni.showModal({
							showCancel: false,
							title: '登录失败',
							content: res.msg
						});
						this.$queue.logout();
					}
					uni.hideLoading();
				});
			}
		}
	};
</script>

<style lang="scss">
	.footer {
		padding-left: 140upx;
		margin-top: 32upx;
		font-size: 24upx;
		color: #666666;
		text-align: center;
		display: flex;
	}


	.container {
		top: 0;
		padding-top: 50px;
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: #111224;
		color: #FFF;
	}



	.confirm-btn-weixin {
		width: 200px;
		height: 42px;
		line-height: 42px;
		border-radius: 30px;
		margin-top: 40upx;
		background: -moz-linear-gradient(left, #f15b6c, #e10a07 100%);
		background: -webkit-gradient(linear, left top, left right, color-stop(0, #f15b6c), color-stop(100%, #e10a07));
		background: -webkit-linear-gradient(left, #f15b6c 0, #e10a07 100%);
		background: -o-linear-gradient(left, #f15b6c 0, #e10a07 100%);
		background: -ms-linear-gradient(left, #f15b6c 0, #e10a07 100%);
		background: linear-gradient(to left, #f15b6c 0, #e10a07 100%);
		color: #fff;
		font-size: 32upx;

		&:after {
			border-radius: 60px;
		}
	}

	.confirm-btn {
		width: 200px;
		height: 42px;
		line-height: 42px;
		border-radius: 30px;
		margin-top: 300upx;
		background: -moz-linear-gradient(left, #f15b6c, #e10a07 100%);
		background: -webkit-gradient(linear, left top, left right, color-stop(0, #f15b6c), color-stop(100%, #e10a07));
		background: -webkit-linear-gradient(left, #f15b6c 0, #e10a07 100%);
		background: -o-linear-gradient(left, #f15b6c 0, #e10a07 100%);
		background: -ms-linear-gradient(left, #f15b6c 0, #e10a07 100%);
		background: linear-gradient(to left, #f15b6c 0, #e10a07 100%);
		color: #fff;
		font-size: 32upx;

		&:after {
			border-radius: 60px;
		}
	}

	
</style>
