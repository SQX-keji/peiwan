<!-- 商品列表组件 <good-list :list="xx"></good-list> -->
<template>
	<view>
		<view class="padding-sm  bg-white" v-if="list.length != 0"
			style=" width: 100%;column-count: 2;column-gap: 10px;margin: 0 auto;">
			<view class="bg-white radius margin-bottom-sm"
				style="width: 100%;overflow: hidden;box-shadow: 0rpx 0rpx 10rpx #e5e5e5;break-inside: avoid;"
				v-for="(item, index) in list" :key="index" @click="goHouseDet(item)">
				<image :src="item.titleImg?item.titleImg: '../../../static/img/logo.png'"
					style="width: 100%;height: 280rpx;" mode="aspectFill"></image>
				<view>
					<view class="padding-lr-sm">
						<view class="text-lg text-bold "
							style="overflow: hidden;text-overflow: ellipsis;-webkit-line-clamp:2;display:-webkit-box;-webkit-box-orient: vertical;">
							{{item.name}}
						</view>
						<view class="flex flex-wrap" v-if="item.label != ''" style="width: 100%;">
							<view v-if="ite" v-for="(ite,ind) in item.label" :key="ind"
								class='cu-tag radius bg-orange light' style="margin-top: 4px;">{{ite}}</view>
						</view>
						<view class="text-orange text-bold flex" v-if="item.price" style="margin-top: 10px;">
							<view class="text-sm" style="line-height:46upx;margin-right: 4upx;">¥</view>
							<view class="text-lg">{{item.price}}</view>
						</view>
					</view>
					<view class="padding-lr-sm padding-bottom-sm" style="margin-top: 5px;">
						<view style="height: 1px;background-color: #F7F7F7;"></view>
						<view class="text-gray"
							style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;margin-top: 8px;">
							<text class='cuIcon-location' style="margin-right: 4px;font-size: 16px;"></text>
							{{item.address}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<empty v-if="list.length === 0" des="暂无数据" show="false"></empty>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default () {
					return []
				}
			}
		},
		methods: {
			goHouseDet(e) {
				console.log(e)
				let token = uni.getStorageSync('token')
				if (token) {
					uni.navigateTo({
						url: "/pages/locality/houseDet?id=" + e.id + "&name=" + e.classifyName
					})
				} else {
					uni.navigateTo({
						url: '/pages/public/login'
					});
				}

			}
		}
	}
</script>

<style lang="scss">
	.cu-tag {
		height: 36rpx;
	}

	.radius {
		border-radius: 4rpx;
	}
</style>
