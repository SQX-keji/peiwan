<template>
	<view>
		<u-dropdown height="80" style="">
			<u-dropdown-item v-model="value1" title="智能优选" :options="options1"></u-dropdown-item>
			<u-dropdown-item v-model="value2" title="不限男女" :options="options2"></u-dropdown-item>
			<u-dropdown-item v-model="value3" title="价格" :options="options3"></u-dropdown-item>
		</u-dropdown>
		<view class="margin-lr-sm">
			<view class="flex justify-between margin-bottom bg padding-sm" @click="goOrder">
				<u-image src="../../../static/images/index/image_dijia1.png" width="200upx" height="200upx" mode="">
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
						style="background: url(../../../static/images/index/bg.png)100% no-repeat;line-height: 34upx;">
						<u-image src="../../../static/images/index/wangzhe.png" width="34upx" height="32upx"></u-image>
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
				<u-image src="../../../static/images/index/image_dijia1.png" width="200upx" height="200upx" mode="">
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
						style="background: url(../../../static/images/index/bg.png)100% no-repeat;line-height: 34upx;">
						<u-image src="../../../static/images/index/wangzhe.png" width="34upx" height="32upx"></u-image>
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
				<u-image src="../../../static/images/index/image_dijia1.png" width="200upx" height="200upx" mode="">
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
						style="background: url(../../../static/images/index/bg.png)100% no-repeat;line-height: 34upx;">
						<u-image src="../../../static/images/index/wangzhe.png" width="34upx" height="32upx"></u-image>
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

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
		onLoad(option) {
			console.log(option)
			uni.setNavigationBarTitle({
				title: option.name
			})
		},
		methods: {
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
