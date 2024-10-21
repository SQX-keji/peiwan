<template>
	<view class="container">
		<view class="wrapper">
			<view class="input-content">
				<view class="cu-form-group" style="border: 2upx solid whitesmoke;margin-bottom: 20px;border-radius: 30px">
					<text class="title">旧密码</text>
					<input type="password" :value="oldpassword" placeholder="请输入旧密码" placeholder-class="input-empty" maxlength="20"
					 minlength="6" data-key="oldpassword" @input="inputChange" @confirm="toLogin" />
				</view>
				<view class="cu-form-group" style="border: 2upx solid whitesmoke;margin-bottom: 20px;border-radius: 30px">
					<text class="title">新密码</text>
					<input type="password" :value="password" placeholder="请设置新密码" placeholder-class="input-empty" maxlength="20"
					 minlength="6" data-key="password" @input="inputChange" @confirm="toLogin" />
				</view>
			</view>
			<button class="confirm-btn" @click="toLogin">修改密码</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				code: '',
				phone: '',
				password: '',
				oldpassword: '',
				sending: false,
				sendTime: '获取验证码',
				count: 60,
				logining: false
			}
		},

		methods: {
			sendMsg() {
				const {
					phone
				} = this;
				if (!phone) {
					this.$queue.showToast("请输入手机号");
				} else if (phone.length !== 11) {
					this.$queue.showToast("请输入正确的手机号");
				} else {
					this.$queue.showLoading("正在发送验证码...");
					this.$Request.getT('/appLogin/sendMsg/' + mobile + '/forget').then(res => {
						if (res.code === 0) {
							this.sending = true;
							this.$queue.showToast('验证码发送成功请注意查收');
							this.countDown();
							uni.hideLoading();
						} else {
							uni.hideLoading();
							uni.showModal({
								showCancel: false,
								title: '短信发送失败',
								content: res.msg ? res.msg : '请一分钟后再获取验证码'
							});
						}
					});
				}
			},
			countDown() {
				const {
					count
				} = this;
				if (count === 1) {
					this.count = 60;
					this.sending = false;
					this.sendTime = '获取验证码'
				} else {
					this.count = count - 1;
					this.sending = true;
					this.sendTime = count - 1 + '秒后重新获取';
					setTimeout(this.countDown.bind(this), 1000);
				}
			},
			inputChange(e) {
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			navBack() {
				uni.navigateBack();
			},


			navTo(url) {
				uni.navigateTo({
					url
				})
			},
			toLogin() {
				const {
					password,
					oldpassword
				} = this;
				if (!oldpassword) {
					this.$queue.showToast("请输入旧密码");
				} else if (oldpassword.length < 6) {
					this.$queue.showToast("旧密码位数必须大于六位");
				} else if (!password) {
					this.$queue.showToast("请设置新密码");
				} else if (password.length < 6) {
					this.$queue.showToast("新密码位数必须大于六位");
				} else {
					this.logining = true;
					this.$queue.showLoading("正在修改密码中...");
					let userId = this.$queue.getData('userId');
					this.$Request.getT("/user/changePassword", {
						newPassword : password,
						oldPassword : oldpassword,
						id: userId
					}).then(res => {
						uni.hideLoading();
						if (res.status === 0) {
							this.$queue.showToast('密码修改成功！下次请使用新密码登录！')
						} else {
							uni.showModal({
								showCancel: false,
								title: '密码修改失败',
								content: res.msg,
							});
						}
					});
				}
			},
		},

	}
</script>

<style lang='scss'>

	.container {
		padding-top: 32upx;
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: #111224;
	}

	.wrapper {
		position: relative;
		z-index: 90;
		background: #111224;
		padding-bottom: 20px;
	}


	.input-content {
		padding: 32upx 80upx;
	}


	.confirm-btn {
		width: 600upx;
		height: 80upx;
		line-height: 80upx;
		border-radius: 60upx;
		margin-top: 32upx;
		background: #5E81F9;
		color: #fff;
		font-size: 32upx;

		&:after {
			border-radius: 60px;
		}
	}


</style>
