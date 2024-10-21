<template>
	<view class="content">
		<view class="padding-lr padding-top-sm bg flex" @click.stop="goSearch">
			<view class="flex justify-between margin-right-sm" @tap.stop="getPlace" style="line-height: 68rpx;">
				<!-- <u-image src="../../static/images/index/place.png" width="27rpx" height="37rpx"class="margin-top-xs" ></u-image> -->
				<view class="localName text-white margin-left-sm">西安市</view>
			</view>
			<u-search placeholder="搜大神" v-model="keyword" shape="square" disabled :show-action="false" :animation="true"
				bg-color="#343546"></u-search>
		</view>
		<scroll-view scroll-x class="bg nav text-white">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''"
					v-for="(item,index) in tabData" :key="index" :data-id="index" @click="">
					{{item.title}}
				</view>
			</view>
		</scroll-view>
		
		<view>
			<view class="wrap padding-sm">
				<u-swiper :list="swiperList"></u-swiper>
			</view>
			<view class="" style="color: #BFBFCB;">
				<u-grid :col="5" :border="false">
					<u-grid-item bg-color="#111224" v-for="(item,index) in gridData" @tap="goNav(item)">
						<u-image :src="item.image" mode="" width='92' height="92"></u-image>
						<view class="grid-text margin-top-sm">{{item.title}}</view>
					</u-grid-item>
				</u-grid>
			</view>
			<view class="bg margin-lr-sm padding-sm radius">
				<view class="flex justify-between text-white padding-bottom-sm">
					<view>乐享低价</view>
					<view>更多<u-image class="margin-left-sm" style="display: inline-block;" width="14upx" height="24upx"
							src="../../static/images/index/right.png"></u-image>
					</view>
				</view>
				<view class="flex justify-between">
					<view @click="goOrder">
						<view class="u-relative">
							<u-image width="200upx" height="200upx" :src="src"></u-image>
							<view class="u-abso"
								style="bottom: 0;left: 0;color: white;background: rgba(0,0,0,.4);padding: 0 5upx;">
								<view
									style="width: 10upx;height: 10upx;background: #1AD566;border-radius: 10upx;display: inline-block;margin: 0 8upx 4upx 0;">
								</view>
								在线中
							</view>
						</view>
						<view class="margin-top-xs text-white text-df">王者荣耀</view>
						<view class="margin-top-xs" style="color: #FF711B;">
							<u-image width="20upx" height="20upx" style="display: inline-block;margin-right: 6upx;"
								src="../../static/images/index/jinbi.png"></u-image>
							3币/局
						</view>
					</view>
					<view @click="goOrder">
						<view class="u-relative">
							<u-image width="200upx" height="200upx" :src="src"></u-image>
							<view class="u-abso"
								style="bottom: 0;left: 0;color: white;background: rgba(0,0,0,.4);padding: 0 5upx;">
								<view
									style="width: 10upx;height: 10upx;background: #1AD566;border-radius: 10upx;display: inline-block;margin: 0 8upx 4upx 0;">
								</view>
								在线中
							</view>
						</view>
						<view class="margin-top-xs text-white text-df">王者荣耀</view>
						<view class="margin-top-xs" style="color: #FF711B;">
							<u-image width="20upx" height="20upx" style="display: inline-block;margin-right: 6upx;"
								src="../../static/images/index/jinbi.png"></u-image>
							3币/局
						</view>
					</view>
					<view @click="goOrder">
						<view class="u-relative">
							<u-image width="200upx" height="200upx" :src="src"></u-image>
							<view class="u-abso"
								style="bottom: 0;left: 0;color: white;background: rgba(0,0,0,.4);padding: 0 5upx;">
								<view
									style="width: 10upx;height: 10upx;background: #1AD566;border-radius: 10upx;display: inline-block;margin: 0 8upx 4upx 0;">
								</view>
								在线中
							</view>
						</view>
						<view class="margin-top-xs text-white text-df">王者荣耀</view>
						<view class="margin-top-xs" style="color: #FF711B;">
							<u-image width="20upx" height="20upx" style="display: inline-block;margin-right: 6upx;"
								src="../../static/images/index/jinbi.png"></u-image>
							3币/局
						</view>
					</view>
				</view>
			</view>

			<u-dropdown>
				<u-dropdown-item v-model="value1" title="智能优选" :options="options1"></u-dropdown-item>
				<u-dropdown-item v-model="value2" title="不限男女" :options="options2"></u-dropdown-item>
				<u-dropdown-item v-model="value3" title="价格" :options="options3"></u-dropdown-item>
			</u-dropdown>
			<!-- <view class="margin-lr-sm">
				<view class="flex justify-between margin-bottom bg padding-sm" @click="goOrder">
					<u-image src="../../static/images/index/image_dijia1.png" width="200upx" height="200upx" mode="">
					</u-image>
					<view class="flex-sub margin-left text-white flex flex-direction justify-between">
						<view class="flex justify-between">
							<view>
								<view class="margin-right-xs" style="display: inline-block;">
									茗茗酱依恋
								</view>
								<view class="round"
									style="display: inline-block;background-color: #582D4D; color: #FF659A;padding: 2upx 8upx;">
									<u-icon name="woman" color="#FF659A" size="24"></u-icon>
									24
								</view>
							</view>
							<view class="radius"
								style="color: white;background: #243E6A;padding: 0 8upx;display: inline-block;">
								<view
									style="width: 10upx;height: 10upx;background: #1AD566;border-radius: 10upx;display: inline-block;margin: 0 8upx 4upx 0;">
								</view>
								西安
							</view>
						</view>
						<view class="flex radius"
							style="background: url(../../static/images/index/bg.png)100% no-repeat;line-height: 34upx;">
							<u-image src="../../static/images/index/wangzhe.png" width="34upx" height="32upx"></u-image>
							<text class="margin-left-xs margin-right-sm">王者荣耀</text>
							<text>至尊星耀</text>
						</view>
						<view class="flex" style="color: #3390FF;">
							<view class="margin-right">评分5.0</view>
							<view>服务48人</view>
						</view>
						<view><text style="color: #FF6F1B;">7币 </text> /局</view>
					</view>
				</view>
				<view class="flex justify-between margin-bottom bg padding-sm" @click="goOrder">
					<u-image src="../../static/images/index/image_dijia1.png" width="200upx" height="200upx" mode="">
					</u-image>
					<view class="flex-sub margin-left text-white flex flex-direction justify-between">
						<view class="flex justify-between">
							<view>
								<view class="margin-right-xs" style="display: inline-block;">
									茗茗酱依恋
								</view>
								<view class="round"
									style="display: inline-block;background-color: #582D4D; color: #FF659A;padding: 2upx 8upx;">
									<u-icon name="woman" color="#FF659A" size="24"></u-icon>
									24
								</view>
							</view>
							<view class="radius"
								style="color: white;background: #243E6A;padding: 0 8upx;display: inline-block;">
								<view
									style="width: 10upx;height: 10upx;background: #1AD566;border-radius: 10upx;display: inline-block;margin: 0 8upx 4upx 0;">
								</view>
								西安
							</view>
						</view>
						<view class="flex radius"
							style="background: url(../../static/images/index/bg.png)100% no-repeat;line-height: 34upx;">
							<u-image src="../../static/images/index/wangzhe.png" width="34upx" height="32upx"></u-image>
							<text class="margin-left-xs margin-right-sm">王者荣耀</text>
							<text>至尊星耀</text>
						</view>
						<view class="flex" style="color: #3390FF;">
							<view class="margin-right">评分5.0</view>
							<view>服务48人</view>
						</view>
						<view><text style="color: #FF6F1B;">7币 </text> /局</view>
					</view>
				</view>
				<view class="flex justify-between margin-bottom bg padding-sm" @click="goOrder">
					<u-image src="../../static/images/index/image_dijia1.png" width="200upx" height="200upx" mode="">
					</u-image>
					<view class="flex-sub margin-left text-white flex flex-direction justify-between">
						<view class="flex justify-between">
							<view>
								<view class="margin-right-xs" style="display: inline-block;">
									茗茗酱依恋
								</view>
								<view class="round"
									style="display: inline-block;background-color: #582D4D; color: #FF659A;padding: 2upx 8upx;">
									<u-icon name="woman" color="#FF659A" size="24"></u-icon>
									24
								</view>
							</view>
							<view class="radius"
								style="color: white;background: #243E6A;padding: 0 8upx;display: inline-block;">
								<view
									style="width: 10upx;height: 10upx;background: #1AD566;border-radius: 10upx;display: inline-block;margin: 0 8upx 4upx 0;">
								</view>
								西安
							</view>
						</view>
						<view class="flex radius"
							style="background: url(../../static/images/index/bg.png)100% no-repeat;line-height: 34upx;">
							<u-image src="../../static/images/index/wangzhe.png" width="34upx" height="32upx"></u-image>
							<text class="margin-left-xs margin-right-sm">王者荣耀</text>
							<text>至尊星耀</text>
						</view>
						<view class="flex" style="color: #3390FF;">
							<view class="margin-right">评分5.0</view>
							<view>服务48人</view>
						</view>
						<view><text style="color: #FF6F1B;">7币 </text> /局</view>
					</view>
				</view>

			</view> -->
			
			<view style="height: 650rpx;"></view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: '',
				TabCur: 0,
				tabData: [{
						title: '推荐'
					},
					{
						title: '王者荣耀'
					},
					{
						title: '和平精英'
					},
					{
						title: '英雄联盟'
					},
					{
						title: '穿越火线'
					}
				],
				scrollLeft: 0,
				swiperList: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				gridData: [{
						image: '../../static/images/index/wangzhe.png',
						title: '王者荣耀'
					},
					{
						image: '../../static/images/index/chiji.png',
						title: '和平精英'
					},
					{
						image: '../../static/images/index/doudizhu.png',
						title: '斗地主'
					},
					{
						image: '../../static/images/index/cf.png',
						title: '穿越火线'
					},
					{
						image: '../../static/images/index/feiche.png',
						title: 'QQ飞车'
					},
					{
						image: '../../static/images/index/diwurenge.png',
						title: '第五人格'
					},
					{
						image: '../../static/images/index/yunding.png',
						title: '云顶之弈'
					},
					{
						image: '../../static/images/index/huangye.png',
						title: '荒野乱斗'
					},
					{
						image: '../../static/images/index/shouwang.png',
						title: '守望先锋'
					}
				],
				src: '../../static/images/index/image_dijia1.png',
				value1: 1,
				value2: 1,
				value3: 1,
				options1: [{
						label: '智能排序',
						value: 1,
					},
					{
						label: '距离优先',
						value: 2,
					},
					{
						label: '人气优先',
						value: 3,
					},
					{
						label: '同城',
						value: 4,
					}
				],
				options2: [{
						label: '不限性别',
						value: 1,
					},
					{
						label: '限男生',
						value: 2,
					},
					{
						label: '限女生',
						value: 3,
					}
				],
				options3: [{
						label: '价格',
						value: 1,
					},
					{
						label: '从高到低',
						value: 2,
					},
					{
						label: '从低到高',
						value: 3,
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			//获取地址和经纬度
			getPlace() {
				uni.chooseLocation({
					success: (res) => {
						console.log(res)
						// this.address = res.address + res.name
						this.address = res.name
						this.latitude = res.latitude
						this.longitude = res.longitude
					}
				})
			},
			// 跳转游戏列表
			goNav(e) {
				uni.navigateTo({
					url: '/pages/index/game/gameList?name=' + e.title
				})
			},
			// 跳转搜索
			goSearch() {
				uni.navigateTo({
					url: '/pages/index/search/index'
				});
			},
			// 跳转订单
			goOrder() {
				uni.navigateTo({
					url: '/pages/index/game/order'
				});
			},
		}
	}
</script>

<style>
	page {
		background-color: #111224;
	}

	.bg {
		background-color: #1E1F31;
	}
</style>
