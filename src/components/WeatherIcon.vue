<template>
    <div v-if="skycon === weather.CLEAR_DAY">
        <ClearDay />
    </div>
    <div v-else-if="skycon === weather.CLEAR_NIGHT">
        <ClearNight />
    </div>
    <div v-else-if="skycon === weather.PARTLY_CLOUDY_DAY">
        <PartlyCludyDay />
    </div>
    <div v-else-if="skycon === weather.PARTLY_CLOUDY_NIGHT">
        <PartlyCloudyNight />
    </div>
    <div v-else-if="skycon === weather.CLOUDY">
        <Cloudy />
    </div>
    <div v-else-if="skycon === weather.LIGHT_HAZE">
        <LightHaze />
    </div>

    <div v-else-if="skycon === weather.MODERATE_HAZE">
        <ModerateHaze />
    </div>

    <div v-else-if="skycon === weather.HEAVY_HAZE">
        <HeavyHaze />
    </div>
    <div v-else-if="skycon === weather.LIGHT_RAIN">
        <LightRain />
    </div>
    <div v-else-if="skycon === weather.MODERATE_RAIN">
        <ModerateRain />
    </div>
    <div v-else-if="skycon === weather.HEAVY_RAIN">
        <HeavyRain />
    </div>
    <div v-else-if="skycon === weather.STORM_RAIN">
        <StormRain />
    </div>
    <div v-else-if="skycon === weather.FOG">
        <Fog />
    </div>
    <div v-else-if="skycon === weather.LIGHT_SNOW">
        <LightSnow />
    </div>
    <div v-else-if="skycon === weather.MODERATE_SNOW">
        <ModerateSnow />
    </div>
    <div v-else-if="skycon === weather.HEAVY_SNOW">
        <HeavySnow />
    </div>
    <div v-else-if="skycon === weather.STORM_SNOW">
        <StormSnow />
    </div>
    <div v-else-if="skycon === weather.DUST">
        <Dust />
    </div>
    <div v-else-if="skycon === weather.SAND">
        <Sand />
    </div>
    <div v-else-if="skycon === weather.WIND">
        <Wind />
    </div>
</template>

<script setup lang="ts">

import { weather } from '@/types/'
import ClearDay from '@/components/weather/ClearDay.vue';
import ClearNight from '@/components/weather/ClearNight.vue';
import PartlyCludyDay from '@/components/weather/PartlyCloudyDay.vue';
import PartlyCloudyNight from '@/components/weather/PartlyCloudyNight.vue';
import Cloudy from '@/components/weather/Cloudy.vue'
import LightHaze from '@/components/weather/LightHaze.vue';
import ModerateHaze from "@/components/weather/ModerateHaze.vue";
import HeavyHaze from '@/components/weather/HeavyHaze.vue';
import LightRain from '@/components/weather/LightRain.vue';
import ModerateRain from '@/components/weather/ModerateRain.vue';
import HeavyRain from '@/components/weather/HeavyRain.vue';
import StormRain from '@/components/weather/StormRain.vue';
import Fog from '@/components/weather/Fog.vue';
import LightSnow from '@/components/weather/LightSnow.vue';
import ModerateSnow from '@/components/weather/ModerateSnow.vue';
import HeavySnow from '@/components/weather/HeavySnow.vue';
import StormSnow from '@/components/weather/StormSnow.vue';
import Dust from '@/components/weather/Dust.vue';
import Sand from '@/components/weather/Sand.vue';
import Wind from '@/components/weather/Wind.vue';

defineProps<{ skycon: string }>()

</script>