<!-- 菜单悬浮的原理: 通过给菜单添加position:sticky实现, 用法超简单, 仅APP端的低端机不兼容 https://caniuse.com/#feat=css-sticky -->
<template>
	<view>
		<!-- 对于mescroll-body: 需设置:sticky="true", 此应避免在mescroll-body标签前面加其他非定位的元素, 否则下拉区域会被挤出, 无法会隐藏.-->
		<!-- 对于mescroll-uni: 则无需设置:sticky="true", 无其他限制和要求 -->
		<mescroll-body :sticky="true" ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="upCallback">
			<!-- sticky吸顶悬浮的菜单, 父元素必须是 mescroll -->
			<view class="sticky-tabs">
				<me-tabs v-model="tabIndex" :tabs="tabs" @change="tabChange"></me-tabs>
			</view>

			<!-- 数据列表 -->
			<!-- <orderList :list="goods"></orderList> -->
			<view class="margin-sm padding-sm bg" v-for="(item,index) in 5"  @click="clickItem(item)">
				<view class="flex justify-between u-border-bottom padding-bottom-sm">
					<view class="text-blue">待付款</view>
					<view class="text-white">2021/02/21 13:44</view>
				</view>
				<view class=" u-flex u-p-t-30">
					<!-- <view class="u-m-r-10">
						<u-avatar :src="avatar" mode="square" size="100"></u-avatar>
					</view> -->
					<view class="u-flex-1 text-white margin-left-xs">
						<view class="u-font-16  text-bold flex justify-between">
							<view>清风渡我</view>
							<view>5币/局</view>
						</view>
						<view class="u-font-14 u-tips-color margin-top">
							<view class="text-white">接单时间：8:00-19:00</view>
						</view>
					</view>
				</view>
				
				<view class="flex justify-end u-p-t-20">
					<u-button class="margin-right-sm" :custom-style="customStyle" shape="circle" :plain="true">取消审核</u-button>
					<u-button :custom-style="customStyle" shape="circle" :plain="true" @click="goNav('/my/publish/editor')" >重新编辑</u-button>
				</view>
			</view>
			<!-- <empty v-if="goods.length === 0" des="暂无数据" show="true"></empty> -->
		</mescroll-body>
		<view class="padding-lr" style="position: fixed;bottom: 40upx;width: 100%;z-index: 999;">
			<u-button class="margin-top" :custom-style="customStyle1" :hair-line="false" @click="goNav('/my/publish/editor')" >
				<!-- <u-image src="../static/fabu.png" mode="" width="28upx" height="28upx" ></u-image> -->
				<u-icon name="plus" color="#fff" size="30" style="margin-right: 10upx;"></u-icon>
				发布
			</u-button>
		</view>
	</view>
</template>

<script>
	import MescrollMixin from "@/components/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
	import mescrollBody from "@/components/mescroll-uni/components/mescroll-body/mescroll-body.vue";
	import meTabs from "@/components/mescroll-uni/me-tabs/me-tabs.vue";
	// import orderList from "@/components/mescroll-uni/good-list/orderList.vue";

	export default {
		mixins: [MescrollMixin], // 使用mixin
		components: {
			mescrollBody,
			meTabs,
			// orderList
		},
		data() {
			return {
				goods: [], // 数据列表
				tabs: [{
						title: '全部',
						status: '2'
					}, {
						title: '待审核',
						status: '3'
					},
					{
						title: '进行中',
						status: '4'
					}, {
						title: '已取消',
						status: '5'
					}
				],
				tabIndex: 0, // tab下标

				page: 1,
				limit: 10,
				userId: 0,
				status: 1,
				nickName: '',
				avatar: '',
				customStyle: {
					color: '#1789FD',
					backgroundColor: '#1E1F31',
					border: "4px",
					width: '180upx',
					height: '54upx',
					margin: "0 0 0 20upx"
				},
				customStyle1: {
					backgroundColor: "#1789FD",
					border: 0,
					color: "#FFF",
					height: '98upx'
				}
			}
		},
		onLoad() {
			this.userId = uni.getStorageSync('userId')
			this.nickName = uni.getStorageSync('nickName')
		},
		onShow() {
			// this.mescroll.resetUpScroll()
		},
		methods: {
			/*下拉刷新的回调 */
			downCallback() {
				// 这里加载你想下拉刷新的数据, 比如刷新轮播数据
				// loadSwiper();
				// 下拉刷新的回调,默认重置上拉加载列表为第一页 (自动执行 page.num=1, 再触发upCallback方法 )
				this.mescroll.resetUpScroll()
			},
			/*上拉加载的回调: 其中page.num:当前页 从1开始, page.size:每页数据条数,默认10 */
			upCallback(page) {
				let curTab = this.tabs[this.tabIndex].status

				let data = {
					userId: this.userId,
					status: curTab,
					page: page.num,
					limit: page.size
				}
				/* this.$Request.getT('/help/selectCreateHelpOrder', data).then(res => {
					this.mescroll.endBySize(res.data.list.length, res.data.totalPage)
					if (page.num == 1) this.goods = []; //如果是第一页需手动制空列表
					res.data.list.forEach(res => {
						switch (res.status) {
							case 1:
								res.statusName = '待审核'
								break;
							case 2:
								res.statusName = '待接单'
								break;
							case 3:
								res.statusName = '待送达'
								break;
							case 4:
								res.statusName = '已完成'
								break;
							case 5:
								res.statusName = '下架'
								break;
						}
						switch (res.userType) {
							case 0:
								res.userTypeName = '不限'
								break;
							case 1:
								res.userTypeName = '限男生'
								break;
							case 2:
								res.userTypeName = '限女生'
								break;
						}
					})
					this.goods = [...this.goods,...res.data.list]; //追加新数据
					this.mescroll.endSuccess(res.data.list.length); // 隐藏加载状态栏
				}).catch(() => {
					//联网失败, 结束加载
					this.mescroll.endErr();
				}); */
			},
			// 切换菜单
			tabChange() {
				this.goods = []; // 置空列表,显示加载进度条
				this.mescroll.resetUpScroll()
			},
			//删除
			delDemand(e) {
				let that = this
				uni.showModal({
					title: '提示',
					content: '确定删除吗?',
					success: function(res) {
						if (res.confirm) {
							let data = {
								helpOrderId: e.id
							}
							that.$Request.postT('/help/deleteHelpOrder', data).then(res => {
								uni.showToast({
									title: "删除成功"
								})
								that.mescroll.resetUpScroll()
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});

			},
			// 完善需求
			edit(item) {
				uni.navigateTo({
					url: '/pages/order/release?type=hasEdit&id=' + item.id + '&content=' + item.content +
						'&site=' + item.site +
						'&phone=' + item.phone + '&deliveryTime=' + item.deliveryTime + '&classifyId=' + item
						.classifyId +
						'&classifyName=' + item.classifyName + '&userType=' + item.userType + '&commission=' + item
						.commission + '&image=' + item.image + '&address=' + item.address + '&latitude=' + item
						.latitude + '&longitude=' + item.longitude
				})
			},
			clickItem: function(options) {
				console.log('点击', options)
				let isShow = this.tabs[this.tabIndex].status == 4 ? '1' : '0'
				uni.navigateTo({
					url: '/pages/index/taskDetail?helpOrderId=' + options.id + '&isShow=' + isShow
				})
			},
			goNav(e) {
				uni.navigateTo({
					url:e
				})
			}
		}
	}
</script>

<style lang="scss">
	/*
	sticky生效条件：
	1、父元素不能overflow:hidden或者overflow:auto属性。(mescroll-body设置:sticky="true"即可, mescroll-uni本身没有设置overflow)
	2、必须指定top、bottom、left、right4个值之一，否则只会处于相对定位
	3、父元素的高度不能低于sticky元素的高度
	4、sticky元素仅在其父元素内生效,所以父元素必须是 mescroll
	*/
	.sticky-tabs {
		z-index: 990;
		position: sticky;
		top: var(--window-top);
		// background-color: #fff;
	}

	// 使用mescroll-uni,则top为0
	.mescroll-uni,
	/deep/.mescroll-uni {
		.sticky-tabs {
			top: 0;
		}
	}

	.demo-tip {
		padding: 18upx;
		font-size: 24upx;
		text-align: center;
	}
</style>
