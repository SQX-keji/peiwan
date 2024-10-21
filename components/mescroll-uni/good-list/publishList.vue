<template>
	<view>
		<view class="bg-white" v-for="(item, index) in list" :key='index' @click="goNavList(item.id)">
			<view class="flex justify-around padding-sm  ">
				<img :src="item.titleImg" alt="" style="width: 100px;height: 100px;" >
				<view class="margin-left-sm">
					<view class="text-lg text-bold text-black" style="height: 42px;overflow: hidden;text-overflow: ellipsis;width: 225px;">{{item.address}}</view>
					<view v-if="item.price" class="text-orange text-bold text-lg margin-tb-sm">¥ {{item.price}}</view>
					<view>浏览6/联系1</view>
				</view>
			</view>
			<view class="flex justify-end padding-tb-sm padding-right-sm">
				<button class="cu-btn round margin-right-sm" v-if="item.status == 1" @click="editStatus(item)" >上架</button>
				<button class="cu-btn round margin-right-sm" v-if="item.status == 2" @click="editStatus(item)" >下架</button>
				<button class="cu-btn round margin-right-sm" v-if="item.status == 3" >已驳回</button>
				<button class="cu-btn round margin-right-sm">删除</button>
				<button class="cu-btn round ">编辑</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props:{
			list: {
				type: Array,
				default(){
					return []
				}
			}
		},
		methods: {
			
			editStatus(e) {
				let data = {
					id: e.id
				}
				this.$Request.postT('/information/updateInformationStatus', data).then(res => {
					
				})
			}
		}
	}
</script>

<style>
</style>
