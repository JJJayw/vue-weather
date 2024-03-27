<template>
	<div class="flex flex-col flex-1 items-center">
		<!--		Banner-->
		<div v-if="routes.query" class="text-white p-4 bg-weather-secondary w-full text-center ">
			<p>
				您当前正在预览此城市，请单击“+”图标开始跟踪此城市。
			</p>
		</div>
		<div class="flex flex-col items-center text-white py-12">
			<h1 class="text-4xl mb-2">{{ routes.params.city }}</h1>
			<p class="text-sm mb-12">
				{{ new Date().toLocaleDateString("zh-cn", { weekday: "short", day: "2-digit", month: "long", }) }}
				{{ new Date().toLocaleTimeString("zh-cn", { timeStyle: "short" }) }}
			</p>
			温度
			<p class="text-8xl mb-8">
				{{ Math.round(hourlyData.temperature[0].value) }}&deg
			</p>
			<p>
				体感温度
				{{ Math.round(parseInt(hourlyData.apparent_temperature[0].value)) }}&deg
			</p>
			<p class="capitalize">
				{{ hourlyData.description }}
			</p>

			<WeatherIcon :skycon="hourlyData.skycon[0].value" class="text-7xl" />
		</div>
		<hr class="border-white border-opacity-10 border w-full" />
		<!--		24小时预报-->
		<div class="max-w-screen-md w-full py-12">
			<div class="mx-8 text-white">
				<h2 class="mb-4">小时天气</h2>
				<!--				滚动条<div class="flex gap-10 overflow-x-scroll">-->
				<div class="flex gap-10">
					<div v-for="hourData in hourlyList" :key="hourData.date" class="flex flex-col gap-4 items-center">
						<p class="whitespace-nowrap text-md">
							{{ new Date(hourData.date).toLocaleTimeString("en-us", { hour: "numeric" }) }}
						</p>
						<WeatherIcon :skycon="hourData.skycon" class="text-3xl" />
						<p class="text-xl">
							{{ Math.round(hourData.value) }}&deg;
						</p>
					</div>
				</div>
			</div>
		</div>
		<hr class="border-white border-opacity-10 border w-full">


		<div class="max-w-screen-md w-full py-12">
			<div class="mx-8 text-white">
				<h2 class="mb-4">周预报</h2>
				<div v-for="day in dailyList" :key="day.date" class="flex items-center">
					<p class="flex-1">
						{{ new Date(day.date).toLocaleDateString("zh-cn", { weekday: "long" }) }}
					</p>
					<WeatherIcon :skycon="day.skycon" class="text-3xl" />
					<div class="flex gap-5 flex-1 justify-end">
						<p>最高: {{ Math.round(day.max) }}</p>
						<p>最低: {{ Math.round(day.min) }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script setup lang="ts">
import { useRoute } from "vue-router";
import { hourlyWeather, dailyWeather } from "@/api";
import { computed, ref } from "vue";
import WeatherIcon from '@/components/WeatherIcon.vue'

const routes = useRoute()

const hourlyList = ref();
const dailyList = ref();
// 城市的中心坐标
const location = computed(() => {
	return routes.query.location as string;
})

const getHourlyWeatherData = async () => {
	try {
		const response = await hourlyWeather(location.value);
		return response.data.result.hourly;
	} catch (err) {
		console.log(err);
	}
};

// 获取周数据  
const getDailyWeatherData = async () => {
	try {
		const response = await dailyWeather(location.value);
		return response.data.result.daily;
	} catch (err) {
		console.log(err);

	}
};

const [hourlyData, dailyData] = await Promise.all([
	getHourlyWeatherData(),
	getDailyWeatherData()
]);


(async () => {
	const list = new Array();
	for (let i = 0; i < hourlyData.temperature.length; i++) {
		const obj = {
			date: hourlyData.temperature[i].datetime,
			value: hourlyData.temperature[i].value,
			skycon: hourlyData.skycon[i].value
		}
		list.push(obj)
	}

	hourlyList.value = list;
})();

(async () => {
	const list = new Array();
	for (let i = 0; i < dailyData.temperature.length; i++) {
		const obj = {
			date: dailyData.temperature[i].date,
			max: dailyData.temperature[i].max,
			min: dailyData.temperature[i].min,
			skycon: dailyData.skycon[i].value
		}
		list.push(obj)
	}
	console.log(list);
	dailyList.value = list;
})();

</script>