<template>
    <view style="line-height: 26px;padding: 32upx;background: #1c1b20;" class="home1">
		<view style="color: #FFFFFF;font-size: 28upx;" >省钱兄电竞是最近上线的一个电竞娱乐平台,省钱兄电竞平台报名参与游戏竞技比赛,有几率获得赏金奖励。比如报名参与和平精英比赛,游戏中击杀一人就能获得对应奖励。针对喜欢玩和平精英，王者荣耀的用户群体。本平台仅提供用户娱乐互动，平台不支持任何提现及兑换服务，如发现用户私下交易金币，平台将进行封号处理。</view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
				content:''
			}
        },
		onLoad() {
			// this.getGuize();
		},
        methods: {
			getGuize(){
				this.$Request.getT('/agreement/find?id=1').then(res =>{
					if(res.status === 0){
						this.content = res.data.content;
					}
				});
			}
		}
    }
</script>

<style>
	page{
		background: #1c1b20;
	}
</style>
