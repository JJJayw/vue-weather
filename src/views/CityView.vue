<template>
	<div>
		<Suspense>
			<AsyncCityView />
			<template #fallback>
				<CityViewSkeleton />
			</template>
		</Suspense>
	</div>
</template>

<script setup lang="ts">
import AsyncCityView from "@/components/AsyncCityView.vue";
import CityViewSkeleton from "@/components/skeleton/CityViewSkeleton.vue";


</script>

<style scoped></style>