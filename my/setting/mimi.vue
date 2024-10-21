<template>
	<view style="font-size: 14px;line-height: 26px;padding: 32upx;background: #1c1b20;color: #FFFFFF;" class="home1">
		<view style="color: #FFFFFF;font-size: 28upx;" >1.本《省钱兄电竞隐私政策》（以下称“本隐私政策”）适用于省钱兄电竞的全部产品和服务，包括省钱兄电竞网站、iOS端应用程序、安卓端应用程序等全部终端客户端。</view>
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
				this.$Request.getT('/agreement/find?id=2').then(res =>{
					if(res.status === 0){
						this.content = res.data.content;
					}
				});
			}
		}
	}
</script>

<style>
	page {
		background: #1c1b20;
	}
</style>
