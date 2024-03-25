<template>
	<main class="container text-white">
		<div class="pt-4 mb-8  relative">
			<input type="text"
			       v-model="searchQuery"
			       @input="getSearchResults"
			       placeholder="Search for a city or state"
			       class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]">
			<ul class="absolute bg-weather-secondary text-white w-full shadow-md py-2 px-1 top-[66px]">
				<li v-for="searchResult in  mapSearchResults" :key="searchResult.id"
				    class="py-2 cursor-pointer">
					{{ searchResult.place_name }}
				</li>
			</ul>

		</div>
	</main>
</template>

<script setup lang="ts" name="HomeView">
import {ref} from "vue";
import axios from "axios";

// API密钥
const APIKey = null;

const searchQuery = ref("");

const queryTimeout = ref();

const mapSearchResults: any = ref();

const getSearchResults = () => {
	clearTimeout(queryTimeout.value);
	queryTimeout.value = setTimeout(async () => {
		if (searchQuery.value !== "") {
			const result = await axios.get(
				// API URL
				``
			);
			mapSearchResults.value = result.data.features;
			return
		}
		mapSearchResults.value = null;
	}, 300)
}
</script>

