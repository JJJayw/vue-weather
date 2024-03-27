<template>
	<div>
		<Suspense>
			<AsyncCityView/>
			<template #fallback>
				<p>加载中...</p>
			</template>
		</Suspense>
	</div>
</template>

<script setup lang="ts">
import AsyncCityView from "@/components/AsyncCityView.vue";
</script>

<style scoped>

</style>