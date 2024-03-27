import axios from "axios";
import * as data from "@/resource/api.json";
import type {ComputedRef} from "vue";

// 查询城市API密钥
const cityAPIKey: string = data.cityApiKey;
// 查询天气API密钥
const weatherAPIkey: string = data.weatherApiKey;

// axios默认配置
const aMap = axios.create({
    baseURL: "https://restapi.amap.com/v3",
    params: {
        output: "JSON"
    }
})

const weather = axios.create({
    baseURL: "/weatherapi",
})

// 查询城市
export const searchResult = (searchQuery: any) => {
    return aMap.get(
        // API URL
        "/config/district",
        {
            params: {
                keywords: searchQuery.value,
                subdistrict: 0,
                key: cityAPIKey,
                extensions: "base",
                offset: 10
            }
        }
    );
}

// 24小时天气预报
export const hourlyWeather = (location: string) => {
    return weather.get(`/${weatherAPIkey}/${location}/hourly`, {
        params: {
            hourlysteps: 9
        }
    })
}

// 周天气预报
export const dailyWeather = (location: string) => {
    return weather.get(`/${weatherAPIkey}/${location}/daily`, {
        params: {
            dailysteps: 7
        }
    })
}