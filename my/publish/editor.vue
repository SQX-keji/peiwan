<template>
	<view class="padding">
		<view class="text-white padding bg radius">
			<u-form :model="form" ref="uForm" label-position="top" :label-style='lableStyle'>
				<u-form-item label="选择陪练游戏">
					<u-input v-model="form.game" placeholder="可商议" />
				</u-form-item>
				<u-form-item label="我的段位">
					<u-input v-model="form.rank" placeholder="请填写（必填）" />
				</u-form-item>
				<u-form-item label="接单时间">
					<u-input v-model="form.time" placeholder="请填写（选填）" />
				</u-form-item>
				<u-form-item label="接单大区">
					<u-input v-model="form.area" placeholder="请填写（选填）" />
				</u-form-item>
				<u-form-item label="接单价格">
					<u-input v-model="form.price" placeholder="请填写（选填）" />
				</u-form-item>
			</u-form>
		</view>
=
		<view class="text-white padding bg radius margin-top">
			<u-form :model="form" ref="uForm" label-position="top" :label-style='lableStyle'>
				<u-form-item label="语音介绍" :border-bottom='false'>
					<textarea class="text-grey" disabled style="height: 150rpx;"
						placeholder="录制一段自我介绍的语音(介绍自己擅长位置，英雄，游戏成就 等皆可)"></textarea>
				</u-form-item>
			</u-form>
			<view v-if="status !=4">
				<view class="text-center" v-if="status == 2||status==3">{{recordLength}}S</view>
				<view class="text-center" v-if="status == 5">{{duration}}S</view>
				
				<view class="flex justify-between text-center margin-top">
					<view class="padding-top">
						<u-image v-if="status == 2||status==3||status==5" @click="reset" src="../static/reset.png" width="120rpx"
							height="120rpx" mode=""></u-image>
					</view>
					<view>
						<view v-if="status == 1" @touchstart="voiceBegin" >
							<u-image  src="../static/luyin.png" width="184rpx"
								height="184rpx" mode=""></u-image>
						</view>
						<view v-if="status == 2" @touchstart="voiceEnd" >
							<u-image  src="../static/stop.png" width="184rpx"
								height="184rpx" mode=""></u-image>
						</view>
						<view v-if="status == 3" @tap="playVoice()" >
							<u-image  src="../static/play.png" width="184rpx"
								height="184rpx" mode=""></u-image>
						</view>
						<view v-if="status == 5" @click="stopVoice" >
							<u-image  src="../static/stop.png" width="184rpx"
								height="184rpx" mode=""></u-image>
						</view>
					</view>
					<view class="padding-top">
						<u-image v-if="status == 2||status==3||status==5" @click="confirm" src="../static/confirm.png"
							width="120rpx" height="120rpx" mode=""></u-image>
					</view>
				</view>
				<view class="flex justify-between text-center">
					<view style="width: 120rpx;">{{status==2||status==3||status==5 ?'重置': ''}}</view>

					<view style="width: 184rpx;" v-if="status==1">点击录制</view>
					<view style="width: 184rpx;" v-if="status==2">点击暂停</view>
					<view style="width: 184rpx;" v-if="status==3">点击试听</view>
					<view style="width: 184rpx;" v-if="status==5">点击暂停</view>
					
					<view style="width: 120rpx;">{{status==2||status==3||status==5 ?'确定': ''}}</view>
				</view>
			</view>
			<view v-if="status == 4" class="u-rela" style="width: 360rpx;">
				<u-image src="../static/15.png" width="360rpx" height="78rpx" mode=""></u-image>
				<view class="flex justify-between u-abso"
					style="width: 326rpx;height: 58rpx;line-height: 58rpx;top:10rpx;left: 0;right: 0;margin: auto;">
					<u-image src="../static/yinpin.png" width="58rpx" height="58rpx" mode=""></u-image>
					<u-image src="../static/yinpin.png" width="185rpx" height="58rpx" mode=""></u-image>
					<view>{{recordLength}}S</view>
				</view>
			</view>
		</view>
		<!-- <view class="text-white padding bg radius margin-top">
			<view class="text-lg">上传主页图</view>
			<u-upload :action="action" :file-list="fileList" ></u-upload>
			
		</view> -->

		<u-button class="margin-top" :custom-style="customStyle" shape="circle" :hair-line="false">提交认证</u-button>
	</view>
</template>

<script>
	export default {
		components: {
			
		},
		data() {
			return {
				form: {
					game: '',
					rank: '',
					time: '',
					area: '',
					price: '',
				},
				lableStyle: {
					color: '#FFFFFF',
					fontSize: '32rpx'
				},
				customStyle: {
					backgroundColor: '#2087FE',
					color: '#FFFFFF',
					border: 0
				},
				status: 1,
				action: '',
				
				//录音相关参数
				// #ifndef H5
				//H5不能录音
				RECORDER: uni.getRecorderManager(),
				// #endif
				
				recording: false,
				willStop: false,
				
				recordTimer: null,
				recordLength: 0,	//录音时长
				
				//播放语音相关参数
				AUDIO: uni.createInnerAudioContext(),
				// playMsgid: null,
				
				audioUrl: '',
				duration: 0
			}
		},
		onLoad() {
			//语音自然播放结束
			this.AUDIO.onEnded((res) => {
				// this.playMsgid = null;
				this.status = 3
			});
			// #ifndef H5
			//录音开始事件
			this.RECORDER.onStart((e) => {
				this.recordBegin(e);
			})
			//录音结束事件
			this.RECORDER.onStop((e) => {
				this.recordEnd(e);
			})
			// #endif
		},
		methods: {
			// 录音开始
			voiceBegin(e) {
				if (e.touches.length > 1) {
					return;
				}
				this.RECORDER.start({
					format: "mp3"
				}); //录音开始,
				this.status = 2
			},
			//录音开始UI效果
			recordBegin(e) {
				this.recordLength = 0;
				this.recordTimer = setInterval(() => {
					this.recordLength++;
					if(this.recordLength == 60) {
						this.RECORDER.stop(); //录音结束
						this.duration = this.recordLength
						this.status = 3
						uni.showToast({
							icon:'none',
							title:'只能录入60S以内的语音'
						})
					}
				}, 1000)
				
			},
			
			// 结束录音
			voiceEnd(e) {
				this.duration = this.recordLength
				this.RECORDER.stop(); //录音结束
				this.status = 3
			},
			//录音结束(回调文件)
			recordEnd(e) {
				clearInterval(this.recordTimer);
				if (!this.willStop) {
					console.log(e)
					// let msg = {
					// 	length: 0,
					// 	url: e.tempFilePath
					// }
					// let min = parseInt(this.recordLength / 60);
					// let sec = this.recordLength % 60;
					// min = min < 10 ? '0' + min : min;
					// sec = sec < 10 ? '0' + sec : sec;
					// msg.length = min + ':' + sec;
					// 上传文件
					 uni.uploadFile({
						url: 'https://gameadmin.shengqianxiong.com.cn/game/alioss/upload', //仅为示例，非真实的接口地址
						filePath: e.tempFilePath,
						name: 'file',
						success: (uploadFileRes) => {
							this.audioUrl = JSON.parse(uploadFileRes.data).data
						}
					});
					
				} else {
					console.log('取消发送录音');
				}
				this.willStop = false;
			},
			// 播放语音
			playVoice() {
				this.AUDIO.src = this.audioUrl;
				this.$nextTick(function() {
					this.AUDIO.play();
					let time = setInterval(() => {
						this.duration--;
						if(this.duration<=0) {
							clearInterval(time)
						}
					}, 1000)
					
					if(this.status != 4) {
						this.status = 5
					}
				});
			},

			// 重置
			reset() {
				this.status = 1
			},
			// 确定
			confirm() {
				this.status = 4
			},
			// 暂停播放
			stopVoice() {
				this.AUDIO.stop();
				this.status = 3
			}
			

		}
	}
</script>

<style>
</style>
