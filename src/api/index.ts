import axios from "axios";
import * as data from "@/resource/api.json";

// 查询城市API密钥
const cityAPIKey: string = data.cityApiKey;
// 查询天气API密钥
const weatherAPIkey: string = data.weatherApiKey;

// 坐标查询axios
const aMap = axios.create({
    baseURL: "https://restapi.amap.com/v3",
    params: {
        output: "JSON"
    }
})

// 天气查询axios
const weather = axios.create({
    baseURL: "/weatherapi",
})

// 查询城市
export function searchResult(searchQuery: any) {
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
export function hourlyWeather(location: string, hourlysteps: number) {
    return weather.get(`/${weatherAPIkey}/${location}/hourly`, {
        params: {
            hourlysteps: hourlysteps
        }
    })
}

// 周天气预报
export function dailyWeather(location: string, dailysteps: number) {
    return weather.get(`/${weatherAPIkey}/${location}/daily`, {
        params: {
            dailysteps: dailysteps
        }
    })
}