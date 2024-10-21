<template>
	<view class="padding">
		<view class="text-white padding bg radius">
			<u-form :model="form" ref="uForm" label-position="top" :label-style='lableStyle'>
				<u-form-item label="真实姓名"><u-input v-model="form.name" /></u-form-item>
				<u-form-item label="证件号码" :border-bottom='false'><u-input v-model="form.IDcard" /></u-form-item>
			</u-form>
		</view>
		<u-button class="margin-top" :custom-style="customStyle" shape="circle" :hair-line="false" >提交认证</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					IDcard: ''
				},
				lableStyle: {
					color: '#FFFFFF',
					fontSize: '36upx'
				},
				customStyle: {
					backgroundColor: '#2087FE',
					color: '#FFFFFF',
					border: 0
				}
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
.bg {
		background-color: #1E1F31;
	}
</style>
