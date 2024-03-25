<template>
	<div class="flex flex-col min-h-screen font-Roboto bg-weather-primary">
		<SiteNavigation></SiteNavigation>
		<router-view></router-view>
	</div>

</template>

<script setup lang="ts" name='App'>
import SiteNavigation from "@/components/SiteNavigation.vue";
</script>
