<template>
	<view class="content">
		<view class="search-box">
			<!-- mSearch组件 如果使用原样式，删除组件元素-->
			<!-- <mSearch class="mSearch-input-box" :mode="2" button="inside" :placeholder="defaultKeyword"
				@search="doSearch(false)" @input="inputChange" @confirm="doSearch(false)" v-model="keyword"></mSearch> -->
			<!-- 原样式 如果使用原样式，恢复下方注销代码 -->

			<!-- <view class="input-box">
				<input type="text" :adjust-position="true" :placeholder="defaultKeyword" @input="inputChange" v-model="keyword" @confirm="doSearch(false)"
				 placeholder-class="placeholder-class" confirm-type="search">
			</view>
			<view class="search-btn" @tap="doSearch(false)">搜索</view> -->
			<u-search style="width: 100%;" placeholder="输入搜索内容" :focus="true" v-model="keyword" :show-action="true"
				 :animation="true" shape="square" bg-color="#343546" color="#FFFFFF" action-text="取消" @custom="goBack()" @search="doSearch(false)"></u-search>
			<!-- 原样式 end -->
		</view>
		<view class="search-keyword">
			<scroll-view class="keyword-list-box" v-show="isShowKeywordList" scroll-y>
				<view class="padding-lr-sm padding-top-sm">
					<view class="flex justify-between flex-wrap">
						<view v-for="(item, index) in keywordList" :key="item.courseId" @click="goCourse(item.courseId)" class="bg-white padding-sm radius margin-bottom-sm" style="width: 48%;">
							<u-image width="280upx" height="200upx"  :src="item.titleImg"></u-image>
							<view class="flex flex-direction" style="">
								<view class="text-bold text-black u-line-1 text-xl">{{item.title}}</view>
								<u-tag class=" margin-right-sm" v-for="(ite,ind) in item.courseLabel"
									:key='ind' :text="ite" mode="light" size="mini" bg-color="#FFEEE5"
									color="#FF5A00" border-color="#FF5A00" />
								<view class="flex justify-between ">
									<view class="text-red text-bold text-lg">¥{{item.price}}</view>
									<view class="text-gray">{{item.payNum}}人已学</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
			<scroll-view class="keyword-box" v-show="!isShowKeywordList" scroll-y>
				<view class="keyword-block">
					<view class="keyword-list-header">
						<view>热门搜索</view>
						<!-- <view>
							<image @tap="hotToggle" :src="'/static/images/index/attention'+forbid+'.png'"></image>
						</view> -->
					</view>
					<view class="keyword" v-if="forbid==''">
						<view v-for="(keyword,index) in hotKeywordList" @tap="doSearch(keyword)" :key="index">
							{{keyword}}</view>
					</view>
					<view class="hide-hot-tis" v-else>
						<view>当前搜热已隐藏</view>
					</view>
				</view>
				<view class="keyword-block" v-if="oldKeywordList.length>0">
					<view class="keyword-list-header">
						<view>历史记录</view>
						<view>
							<image @tap="oldDelete" src="/static/images/index/delete.png"></image>
						</view>
					</view>
					<view class="keyword">
						<view v-for="(keyword,index) in oldKeywordList" @tap="doSearch(keyword)" :key="index">
							{{keyword}}</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				defaultKeyword: "",
				keyword: "",
				oldKeywordList: [], //历史记录
				hotKeywordList: [], //热搜
				keywordList: [], //搜索列表
				forbid: '',
				isShowKeywordList: false,
				limit: 10,
				page: 1,
			}
		},
		onLoad() {
			// this.init();
			this.getSearchList()
		},
		methods: {
			// 获取搜索历史
			getSearchList() {
				this.$u.api.SearchList().then(res => {
					if (res.code == 0) {
						this.hotKeywordList = res.data.allSerchName
						this.oldKeywordList = res.data.userSearchName
					}
				})
			},
			//清除历史搜索
			oldDelete() {
				uni.showModal({
					content: '确定清除历史搜索记录？',
					success: (res) => {
						if (res.confirm) {
							console.log('用户点击确定');
							this.$u.api.SearchDet().then(res => {
								if (res.code == 0) {
									this.getSearchList()
								}
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			//执行搜索
			doSearch(keyword) {
				this.keyword = keyword === false ? this.keyword : keyword;
				this.isShowKeywordList = true;
				let data = {
					title: this.keyword,
					limit: this.limit,
					page: this.page,
				}
				this.$u.api.search(data).then(res => {
					if (res.code == 0) {
						res.data.list.forEach(ret => {
							ret.courseLabel = ret.courseLabel ? ret.courseLabel.split(',') : []
						})
						this.keywordList = [...this.keywordList,...res.data.list]
					}
				})
			},
			// 点击取消返回首页
			goBack() {
				uni.navigateBack()
			},
			//热门搜索开关
			hotToggle() {
				this.forbid = this.forbid ? '' : '_forbid';
			},

			
		},
		onReachBottom: function() {
			this.page = this.page + 1;
			this.doSearch(false);
		},
		onPullDownRefresh: function() {
			this.page = 1;
			this.doSearch(false);
		},
	}
</script>
<style>
	view {
		display: block;
	}

	.search-box {
		width: 100%;
		/* background-color: rgb(242, 242, 242); */
		padding: 15upx 2.5%;
		display: flex;
		justify-content: space-between;
		position: sticky;
		top: 0;
		background-color: #1E1F31;
	}

	.search-box .mSearch-input-box {
		width: 100%;
	}

	.search-box .input-box {
		width: 85%;
		flex-shrink: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.search-box .search-btn {
		width: 15%;
		margin: 0 0 0 2%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
		font-size: 28upx;
		color: #fff;
		background: linear-gradient(to right, #ff9801, #ff570a);
		border-radius: 60upx;
	}

	.search-box .input-box>input {
		width: 100%;
		height: 60upx;
		font-size: 32upx;
		border: 0;
		border-radius: 60upx;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		padding: 0 3%;
		margin: 0;
		background-color: #ffffff;
	}

	.placeholder-class {
		color: #9e9e9e;
	}

	.search-keyword {
		width: 100%;
		background-color: #111224;
	}

	.keyword-list-box {
		height: calc(100vh - 110upx);
		padding-top: 10upx;
		/* border-radius: 20upx 20upx 0 0; */
		/* background-color: #fff; */
	}

	.keyword-entry-tap {
		background-color: #eee;
	}

	.keyword-entry {
		width: 94%;
		height: 80upx;
		margin: 0 3%;
		font-size: 30upx;
		color: #333;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: solid 1upx #e7e7e7;
	}

	.keyword-entry image {
		width: 60upx;
		height: 60upx;
	}

	.keyword-entry .keyword-text,
	.keyword-entry .keyword-img {
		height: 80upx;
		display: flex;
		align-items: center;
	}

	.keyword-entry .keyword-text {
		width: 90%;
	}

	.keyword-entry .keyword-img {
		width: 10%;
		justify-content: center;
	}

	.keyword-box {
		height: calc(100vh - 110upx);
		/* border-radius: 20upx 20upx 0 0; */
		background-color: #111224;
	}

	.keyword-box .keyword-block {
		padding: 10upx 0;
	}

	.keyword-box .keyword-block .keyword-list-header {
		width: 94%;
		padding: 10upx 3%;
		font-size: 27upx;
		font-weight: 700;
		color: #FFFFFF;
		display: flex;
		justify-content: space-between;
	}

	.keyword-box .keyword-block .keyword-list-header image {
		width: 40upx;
		height: 40upx;
	}

	.keyword-box .keyword-block .keyword {
		width: 94%;
		padding: 3px 3%;
		display: flex;
		flex-flow: wrap;
		justify-content: flex-start;
	}

	.keyword-box .keyword-block .hide-hot-tis {
		display: flex;
		justify-content: center;
		font-size: 28upx;
		color: #FFFFFF;
	}

	.keyword-box .keyword-block .keyword>view {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 60upx;
		padding: 0 20upx;
		margin: 10upx 20upx 10upx 0;
		height: 60upx;
		font-size: 28upx;
		background-color: rgb(242, 242, 242);
		color: #FFFFFF;
	}
</style>
