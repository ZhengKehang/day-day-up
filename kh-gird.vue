<template>
	<view class="kh-gird">
		<view class="gird" :class"" v-for="(item,index) in list" :key="item">
			<slot></slot>
		</view>
	</view>
	<div data-v-34e776f5="" background="" class="cover" style="width: 100%; height: 100%; background-size: cover; object-fit: cover; position: absolute; top: 0px; left: 0px;"></div>
	<div class="component" style="width: 420px; height: 390px; position: absolute; left: 0px; top: 0px;" type="image">
		<div class="outer" style="width:100%;height:100%;overflow: hidden;box-sizing: border-box;position:relative;">
			<img src="http://specimen.oss-cn-hangzhou.aliyuncs.com/cover/128_323889.jpg" alt="" style="position: absolute; width: 693.333px; height: 390px; left: -136.667px; top: 0px;"
			 linktoid="529414601562050328197" linkid="">
		</div>
	</div>
	<div class="component" style="background-image: url(&quot;http://hunt-static.oss-cn-hangzhou.aliyuncs.com/images/coupon-bg-1.png&quot;); background-size: contain; background-repeat: no-repeat; display: flex; align-items: center; width: 308px; height: 98px; padding: 0px 20px; box-sizing: border-box; position: absolute; left: 60px; top: 430px;"
	 type="coupon" active="true" couponid="307759">
		<div class="condition" style="flex:1;display: flex;flex-direction: column;">
			<div class="desc" style="font-size:16px;font-weight: bold;color:#fff">即可领取优惠券</div>
			<div class="valid-date" style="font-size:10px;margin-top:10px;color:#fff">2019/07/02-2019/07/05</div>
			<div class="cond" style="font-size:16px;color:#634913;">满100使用</div>
		</div>
		<div class="coupon-val" style="flex:1;display: flex;align-items: center;flex-direction: column;">
			<div class="money" style="text-align:center;display: flex;align-items:flex-end;line-height:1em;color:#fff">
				<div class="unit" style="font-size:30px;line-height:1em;">¥</div><span style="font-size:50px;font-weight:bold;line-height:1em"
				 class="money-val">50</span>
			</div>
			<div class="tip" style="text-align:center;font-size:16px;color:#fff">优惠券</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				activity: {
					start_time: 1561103634000,
					end_time: 1569103634000,
					mkt_name: '测试展会',
					join_total: 1000,
					joiners: [{
						avatar: 'http://res.500mi.com/shop/E3A6E1E73B823F1330A94E0C54581721.jpg'
					}],
					mkt_data: {
						image: ['http://res.500mi.com/shop/E3A6E1E73B823F1330A94E0C54581721.jpg'],
						data: {
							area: '杭州',
							address: '西城博司12楼',
							join_exhibit_money: 10000,
							attend_exhibit_money: 1000
						}
					}
				}
			}
		},
		computed: {

		},
		props: {
			itemWidth: {
				type: Number,
				default: 200
			},
			betwwen: {

			}

		}
	}
</script>

<style>
	.kh-grid {
		width: 100%;
	}
</style>
