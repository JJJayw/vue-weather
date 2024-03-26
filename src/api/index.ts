import axios from "axios";
import * as data from "@/resource/api.json";

// API密钥
const APIKey = data.apiKey;

// 查询axios
export const searchResult = function (searchQuery: any) {
    return axios.get(
        // API URL
        "https://restapi.amap.com/v3/config/district",
        {
            params: {
                keywords: searchQuery.value,
                subdistrict: 0,
                key: APIKey,
                extensions: "base",
                offset: 10
            }
        }
    );
}