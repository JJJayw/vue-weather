<template>
	<main class="container text-white">
		<div class="pt-4 mb-8  relative">
			<input type="text" v-model="searchQuery" @input="getSearchResults" placeholder="搜索城市"
				class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]">

			<ul v-if="mapSearchResults"
				class="absolute bg-weather-secondary text-white w-full shadow-md py-2 px-1 top-[66px]">
				<p v-if="searchError" class="py-2">
					抱歉，
				</p>
				<p v-if="!searchError && mapSearchResults.length === 0" class="py-2">
					没有您查询的结果，请重新输入
				</p>
				<li v-for="searchResult in  mapSearchResults" :key="searchResult.adcode" class="py-2 cursor-pointer"
					@click="previewCity(searchResult)">
					{{ searchResult.name }}
				</li>
			</ul>

		</div>
		<div class="flex flex-col gap-4">
			<Suspense>
				<CityList />
				<template #fallback>
					<CityCardSkeleton />
				</template>
			</Suspense>
		</div>
	</main>
</template>

<script setup lang="ts" name="HomeView">
import { ref } from "vue";
import { searchResult } from "@/api";
import { useRouter } from "vue-router";
import CityList from '@/components/CityList.vue'
import CityCardSkeleton from "@/components/skeleton/CityCardSkeleton.vue";
const router = useRouter();

// 查询关键字
const searchQuery = ref("");
// 懒搜索 时间
const queryTimeout = ref();
// 查询结果集
const mapSearchResults: any = ref();
// 查询失败判断
const searchError = ref();

// 查询方法
function getSearchResults(): void {
	clearTimeout(queryTimeout.value);
	queryTimeout.value = setTimeout(async () => {
		if (searchQuery.value !== "") {
			await searchResult(searchQuery).then((response) => {
				mapSearchResults.value = response.data.districts;
			}).catch(() => {
				searchError.value = true;
			})
			return
		}
		mapSearchResults.value = null;
	}, 300)
}

// 路由
function previewCity(searchResult: any) {
	router.push({
		name: "cityView",
		params: {
			city: searchResult.name,
		},
		query: {
			location: searchResult.center,
		}
	})
}
</script>
