<template>
	<view class="page" style="background-color: #111224;">
		<view class="feedback-title">
			<text>问题和意见</text>
			<text @tap="chooseMsg">快速键入</text>
		</view>
		<view class="feedback-body"><textarea placeholder="请详细描述你的问题和意见..." v-model="sendDate.content" class="feedback-textare" /></view>
		<view class="feedback-title"><text>QQ/邮箱</text></view>
		<view class="feedback-body"><input class="feedback-input" v-model="sendDate.contact" placeholder="方便我们联系你 " /></view>

		<button type="primary" style="" class="feedback-submit" @tap="send">提交</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			msgContents: ['界面显示错乱', '启动缓慢，卡出翔了', 'UI无法直视，丑哭了', '偶发性崩溃'],
			stars: [1, 2, 3, 4, 5],
			imageList: [],
			sendDate: {
				score: 5,
				content: '',
				contact: ''
			}
		};
	},
	onLoad() {
		let deviceInfo = {
			appid: plus.runtime.appid,
			imei: plus.device.imei, //设备标识
			p: plus.os.name === 'Android' ? 'a' : 'i', //平台类型，i表示iOS平台，a表示Android平台。
			md: plus.device.model, //设备型号
			app_version: plus.runtime.version,
			plus_version: plus.runtime.innerVersion, //基座版本号
			os: plus.os.version,
			net: '' + plus.networkinfo.getCurrentType()
		};
		this.sendDate = Object.assign(deviceInfo, this.sendDate);
	},
	methods: {
		close(e) {
			this.imageList.splice(e, 1);
		},
		chooseMsg() {
			//快速输入
			uni.showActionSheet({
				itemList: this.msgContents,
				success: res => {
					this.sendDate.content = this.msgContents[res.tapIndex];
				}
			});
		},
		chooseImg() {
			//选择图片
			uni.chooseImage({
				sourceType: ['camera', 'album'],
				sizeType: 'compressed',
				count: 8 - this.imageList.length,
				success: res => {
					this.imageList = this.imageList.concat(res.tempFilePaths);
				}
			});
		},
		chooseStar(e) {
			//点击评星
			this.sendDate.score = e;
		},
		previewImage() {
			//预览图片
			uni.previewImage({
				urls: this.imageList
			});
		},
		send() {
			//发送反馈
			console.log(JSON.stringify(this.sendDate));

			if (!this.sendDate.content) {
				uni.showToast({
					icon: 'none',
					title: '请输入反馈内容'
				});
				return;
			}
			if (!this.sendDate.contact) {
				uni.showToast({
					icon: 'none',
					title: '请填写QQ或邮箱'
				});
				return;
			}
			// uni.report('意见反馈', this.sendDate);
			this.$queue.showLoading('加载中...');
			this.$Request
				.postJson('/message/add', {
					state: 2,
					title: this.sendDate.contact,
					content: JSON.stringify(this.sendDate)
				})
				.then(res => {
					if (res.status === 0) {
						uni.showToast({
							title: '反馈成功'
						});
						setTimeout(function() {
							uni.navigateBack();
						}, 1000);
					} else {
						uni.hideLoading();
						uni.showModal({
							showCancel: false,
							title: '反馈失败',
							content: res.msg
						});
					}
				});
		}
	}
};
</script>

<style>
@font-face {
	font-family: uniicons;
	font-weight: normal;
	font-style: normal;
	src: url('https://img-cdn-qiniu.dcloud.net.cn/fonts/uni.ttf') format('truetype');
}
page {
	background-color: #111224 !important;
}
view {
	font-size: 28upx;
}


/*问题反馈*/
.feedback-title {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 20upx;
	color: #8f8f94;
	font-size: 28upx;
}
.feedback-star-view.feedback-title {
	justify-content: flex-start;
	margin: 0;
}

.feedback-body {
	font-size: 32upx;
	padding: 16upx;
	margin: 16upx;
	border-radius: 16upx;
	background: #1E1F31;
	color: #FFF;
}
.feedback-textare {
	height: 200upx;
	font-size: 34upx;
	line-height: 50upx;
	width: 100%;
	box-sizing: border-box;
	padding: 20upx 30upx 0;
}
.feedback-input {
	font-size: 32upx;
	height: 60upx;
	padding: 15upx 20upx;
	line-height: 60upx;
}


.feedback-submit {
	background: #1789FD;
	color: #ffffff;
	margin: 20upx;
	margin-top: 32upx;
}
</style>
