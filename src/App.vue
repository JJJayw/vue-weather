<template>
	<div class="flex flex-col min-h-screen font-yaHei  bg-weather-primary">
		<SiteNavigation></SiteNavigation>
		<router-view v-slot="{ Component }">
			<Transition name="page" mode="out-in">
				<component :is="Component" />
			</Transition>
		</router-view>
	</div>
</template>

<script setup lang="ts" name='App'>
import SiteNavigation from "@/components/SiteNavigation.vue";
</script>
<style>
.page-enter-active {
	transition: 600ms ease all;
}

.page-enter-from {
	opacity: 0;
}
</style>