<template>
    <div v-for="city in savedCities" :key="city.server_time">
        <CityCard :city="city" @click="goTocityView(city.city, city.location)">
        </CityCard>
    </div>
    <p v-if="savedCities.length === 0">
        未添加位置。若要开始跟踪位置，请在上面搜索城市天气。
    </p>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { dailyWeather } from '@/api';
import CityCard from "@/components/CityCard.vue";
const router = useRouter();

const savedCities: any = ref([]);

// TODO从本地存储获取城市列表
async function getCities() {
    if (localStorage.getItem("savedCities")) {
        savedCities.value = JSON.parse(localStorage.getItem("savedCities") as string);
        const request: any = [];
        savedCities.value.forEach((city: any) => {
            request.push(
                dailyWeather(city.location, 1)
            )
        })

        // 异步获取本地存储城市的数据
        const weatherData = await Promise.all(request);
        weatherData.forEach((value, index) => {
            savedCities.value[index].weather = value.data
        })
    }
    // 闪烁延迟
    // await new Promise(res => setTimeout(res, 1000))
}

await getCities();


function goTocityView(city: string, location: string) {
    router.push({
        name: "cityView",
        params: {
            city: city,
        },
        query: {
            location: location,
        }
    })
}

</script>
