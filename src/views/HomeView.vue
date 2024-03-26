<template>
	<main class="container text-white">
		<div class="pt-4 mb-8  relative">
			<input type="text"
			       v-model="searchQuery"
			       @input="getSearchResults"
			       placeholder="搜索城市"
			       class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]">

			<ul class="absolute bg-weather-secondary text-white w-full shadow-md py-2 px-1 top-[66px]"
			    v-if="mapSearchResults">
				<li v-if="searchError" class="py-2 list-none">抱歉，</li>
				<li v-if="!searchError && mapSearchResults.length === 0" class="py-2 list-none">
					没有您查询的结果，请重新输入
				</li>
				<li v-for="searchResult in  mapSearchResults" :key="searchResult.adcode"
				    class="py-2 cursor-pointer">
					{{ searchResult.name }}
				</li>
			</ul>

		</div>
	</main>
</template>

<script setup lang="ts" name="HomeView">
import {ref} from "vue";
import {searchResult} from "@/api";


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
			searchResult(searchQuery).then((response) => {
				mapSearchResults.value = response.data.districts;
			}).catch(() => {
				searchError.value = true
			})
			return
		}
		mapSearchResults.value = null;
	}, 300)
}
</script>

