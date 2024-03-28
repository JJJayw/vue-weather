<template>
    <div class="flex py-6 px-3 bg-weather-secondary rounded-md shadow-md cursor-pointer">
        <div class="flex flex-col flex-1 ">
            <h2 class="text-xl">{{ city.city }}</h2>
            <WeatherIcon :skycon="city.weather.result.daily.skycon[0].value" class="text-3xl" />
        </div>

        <div class="flex flex-col gap-2">
            <p class="text-3xl self-end">
                <!-- 当前温度 -->
                {{ Math.round(city.weather.result.daily.temperature[0].avg) }}&deg;
            </p>
            <div class="flex gap-2">
                <span class="text-base">
                    最高气温：{{ Math.round(city.weather.result.daily.temperature[0].max)
                    }}&deg;
                </span>
                <span class="text-base">
                    最低气温：{{ Math.round(city.weather.result.daily.temperature[0].min) }}&deg;
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import WeatherIcon from "@/components/WeatherIcon.vue";
defineProps<{ city: any }>();

</script>