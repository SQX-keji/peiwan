<template>
	<view class="record_box" :style="{height: containerHeight}">
		<!-- 录音列表展示区域 -->
		<view class="recordListArea">
			<!-- 这里是录音列表 -->
			<checkbox-group @change="clickCheckBox" class="scrollView">
				<!-- 每个item里面有: 播放录音的按钮，单个删除录音的按钮 -->
				<uniSwipeAction>
					<uniSwipeActionItem :options="options" v-for="(item, index) in recordList" :key="item['src']" class="loopList" @click="onClick($event,item)">
						<checkbox class="checkedBox" :value="item"></checkbox>
						<view class="loopItem" :class="{ mark: item['src'] === playPath }">
							<view class="itemName">{{ item['name'] }}</view>
							<view class="itemTime">总时长：{{ item['time'] }}s</view>
						</view>
					</uniSwipeActionItem>
				</uniSwipeAction>
			</checkbox-group>
			<!-- 批量删除按钮 -->
			<view class="deleteArray"  @tap="deleteRec" v-if="chooseList.length !== 0">批量删除</view>
		</view>
		<!-- 工具区域，比如各种按钮，设置等等 -->
		<view class="toolBox">
			<!-- 显示时间的区域 -->
			<view class="timeArea">
				<!-- 展示当前录音的时长或者是当前播放录音倒计时 -->
				{{ showRecordTime }}
			</view>
			<!-- 按钮区域 -->
			<view class="buttonArea">
				<view class="btn" @tap="tapRecBtn()" @longpress="longPress">
					<view :class="{ square: showSquare }"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
// 导入功能函数包
import lwjFun from './js/lwj-record.js';
// 滑块内容
import options from './js/options.js';
// 调用设备麦克风进行录音操作
const r = plus.audio.getRecorder();
let p;
export default {
	name: 'recordComponent',
	props: {
		recordList: {
			type: Array,
			default: function() {
				return [];
			}
		},
		containerHeight: {
			type: String,
			default: '100vh'
		}
	},
	data() {
		return {
			options,
			// 记录当前录音的时间
			time: 0,
			// 当前录音文件的路径
			src: '',
			// 录音文件的名字
			name: '',
			// 当前状态，				 0			 1			 2
			// isPlay = true	没有播放	正在播放	暂停播放
			// isPlay = false	没有录音	正在录音
			state: 0,
			// 是否变化录音按钮的样式
			showSquare: false,
			// 复选框选中的列表，里面存储的是选中的录音路径
			chooseList: [],
			//正在播放录音
			isPlay: false,
			// 是否正在录音
			isRec: false,
			// 记录当前正在播放的录音文件路径，用于继续播放
			playPath: undefined,
			// 是否可以命名录音文件
			reName: false,
		};
	},
	watch: {
		/**
		 * 监测time，倘若time的值大于录音最大值，则停止录音
		 */
		time(newValue) {
			if (this.rec && newValue > this.setting['duration']) {
				this.stopRec();
			}
		},
		/**
		 * 检测状态位
		 * @param {Number} newValue
		 */
		state(newValue) {
			if (newValue == 1) {
				this.showSquare = true;
			} else {
				this.showSquare = false;
			}
		},
		/**
		 * 检测命名录音文件
		 * @param {Boolean} newValue
		 */
		async reName(newValue) {
			// 如果可以命名录音
			if (newValue) {
				let res = await lwjFun.showPrompt('请给录音文件命名', '命名');
				if (res.index == 0) {
					// 命名的录音名字
					this.name = res.value;
				} else {
					// 删除这条录音文件
					lwjFun.deleteOneFile(this.src);
					// 初始化状态
					this.initState();
				}
				this.reName = false;
			}
		},
		/**
		 * 监听录音文件名
		 */
		name() {
			if (this.name.trim() != '') {
				// 如果命名重复
				if (lwjFun.isRepeat(this.name, this.recordList)) {
					lwjFun.showToast('请不要起同样的名字哦~~', 'bottom');
					this.name = '';
					// 显示输入框
					this.reName = true;
				} else {
					// 如果命名没有重复，向recordList中加入一条记录
					this.$emit('sendRecList', {
						src: this.src, // 录音文件路径
						time: this.time, // 录音时长
						name: this.name // 用户自定义命名的文件名
					});
					// 初始化状态
					this.initState();
					// 告诉用户保存成功
					lwjFun.showToast('添加成功', 'bottom');
				}
			}
		}
	},
	computed: {
		/**
		 * 动态计算已经录制的时间或者播放的录音的剩余时间
		 */
		showRecordTime() {
			return lwjFun.formatTime(this.time);
		}
	},
	methods: {
		/**
		 * 显示与关闭设置
		 */
		needSetting() {
			// 正在录音时，不能设置录音配置
			if(this.isRec){
				lwjFun.showToast('请结束当前录音，才能设置录音配置');
				return;
			} 
			this.showSetting = !this.showSetting;
		},
		/**
		 * 设置时，点击picker的事件
		 * @param {Object} e
		 * @param {String} id
		 */
		getSettingContent(e,id) {
			// 获取到点击项的下标
			let index = e.detail.value;
			let content;
			settings.map(item=>{
				if(item['id'] === id) {
					content = item['range'][index];
				}
			});
			this.setting[id] = content;
		},
		/**
		 * 点击滑块的事件
		 * @param {Object} e
		 * @param {Object} item
		 */
		onClick(e,item) {
			let {index} = e;
			let {playPath} = this
			if(index === 0) {
				// 点击了播放按钮
				this.playRec(item)
			} else if(index === 1) {
				if(playPath !== item['src']) {
					this.$emit('delRecSingle',{item})
				}
			}
		},
		/**
		 * 初始化状态
		 */
		initState() {
			this.name = '';
			this.src = '';
			this.time = 0;
			this.state = 0;
			this.isPlay = false;
			this.isRec = false;
		},
		/**
		 * state: 0为处于停止状态，1为处于录音状态，2为处于暂停状态
		 * 点击录音按钮时的触发事件
		 */
		tapRecBtn() {
			
			// 获取当前状态，初始时是0、false
			let { state, isPlay } = this;
			// 如果是正在播放录音
			if (isPlay) {
				switch (state) {
					case 1:
						// 当前处于正在播放,点击暂停
						this.pausePlay();
						break;
					case 2:
						// 当前处于暂停状态，点击继续播放
						this.resumePlay();
						break;
				}
			} else {
				switch (state) {
					case 0:
						// 开始录音，改变状态位
						this.startRecord();
						break;
					case 1:
						lwjFun.showToast('长按结束录音', 'center');
						break;
				}
			}
		},
		/**
		 * 长按触发的事件
		 */
		longPress() {
			let { isPlay, isRec, state } = this;
			// 正在播放，停止播放
			if (isPlay) {
				this.stopPlay();
			}
			// 如果是正在录音
			if (isRec) {
				// 当状态位0时，表示没有开始录音，停止录音无意义
				if (state !== 0) {
					// 正在录音，停止录音
					this.stopRec();
				}
			}
		},
		/**
		 * 开始录音事件
		 */
		startRecord() {
			r.record( {filename:"_doc/audio/"}, res=>{
				// 修改状态位
				this.state = 0;
				this.isRec = false;
				// 用于记录录音时间的计数器停止
				clearInterval(this.timeObj);
				// 计时器置空
				this.timeObj = null;
				// 向src添加路径
				this.src = res;
				// 可以命名录音文件名
				this.reName = true;
				lwjFun.showToast('录音——停止', 'bottom');
			}, e=> {
				console.log( "Audio record failed: " + e.message );
			} );
			// 设置定时器
			if (this.timeObj == null) {
				// 开始录音后，设定计时器，用以记录录音的时间
				this.timeObj = setInterval(_ => {
					this.time++;
				}, 1000);
			}
			// 改变状态位
			this.state = 1;
			// 当前正在录音
			this.isRec = true;
			lwjFun.showToast('录音——开始', 'center');
		},
		/**
		 * 停止录音
		 */
		stopRec() {
			// 停止录音
			r.stop();
		},
		/**
		 * 点击复选框的触发事件，用于删除
		 * 获得选中项的路径
		 * @param {Object} e
		 */
		clickCheckBox(e) {
			// chooseList数组中存储的是选中项的value值,在这个组件中返回的选中项的name值
			this.chooseList = e.detail.value;
		},
		/**
		 * 根据录音文件路径，进行录音的播放
		 * @param {String} path
		 */
		playRec(item) {
			let { isPlay, isRec, state } = this;
			// 如果当前正在录音
			if (isRec) {
				lwjFun.showToast('请长按底部按钮停止录音', 'center');
				return;
			}
			let _this = this;
			// 设置正在播放录音
			this.isPlay = true;
			// 改变状态位
			this.state = 1;
			// 记录当前播放路径
			this.playPath = item['src'];
			// 设置时间
			this.time = Math.round(item['time']);
			// 创建录音播放对象
			p = plus.audio.createPlayer(item['src']);
			// 开始播放
			p.play();
			if (!this.playTimeClock) {
				this.playTimeClock = setInterval(_ => {
					this.time--;
				}, 1000);
				lwjFun.showToast('播放——开始', 'center');
			}
			p.addEventListener("ended",_=>{
				this.playEnd();
				lwjFun.showToast('播放结束','center');
			})
		},
		/**
		 * 暂停播放录音事件
		 */
		pausePlay() {
			// 暂停播放
			// 当前处于播放状态才能暂停
			// 否则调用此方法无任何作用
			p.pause();
			// 改变状态位
			this.state = 2;
			// 清除倒计时
			clearInterval(this.playTimeClock);
			// 将计时器设置为空
			this.playTimeClock = null;
			lwjFun.showToast('播放——暂停', 'center');
		},
		/**
		 * 继续播放录音
		 */
		resumePlay() {
			// 继续播放
			// 当前处于暂停状态从暂停处开始恢复播放
			// 非暂停状态调用此方法无任何作用
			p.resume();
			// 改变状态位
			this.state = 1;
			// 设置倒计时定时器
			if (this.playTimeClock == null) {
				this.playTimeClock = setInterval(_ => {
					this.time--;
				}, 1000);
			}
			lwjFun.showToast('播放——继续', 'center');
		},
		/**
		 * 自然播放后会执行的方法
		 * 播放结束后会执行的方法
		 */
		playEnd() {
			p.close();
			// 清除倒计时
			clearInterval(this.playTimeClock);
			// 计时器置空
			this.playTimeClock = null;
			// 当播放结束后，将显示倒计时的时间置空
			this.time = 0;
			// 即便在播放过程中出现过几次暂停，只要不是通过stop结束的音频，都属于自然播放
			this.currentTime = 0;
			// 当前播放的路径置空
			this.playPath = undefined;
			// 停止播放录音后，设置状态位
			this.state = 0;
			this.isPlay = false;
		},
		/**
		 * 停止播放录音
		 */
		stopPlay() {
			// 停止播放
			p.stop();
			p.close();
			this.playEnd();
			lwjFun.showToast('播放——停止','center');
		},
		/**
		 * 删除录音,批量删除
		 * @param {Array} list
		 */
		deleteRec(list) {
			let { recordList, chooseList, playPath } = this;
			chooseList = chooseList.filter(item=>{
				return item['src'] !== playPath
			})
			this.$emit('delRecList', {chooseList});
			// 清空选中列表
			this.chooseList.length = 0;
		}
	}
};
</script>

<style scoped lang="less">
@import url('./less/toolBox.less');
@import url('./less/recordListArea.less');
</style>
