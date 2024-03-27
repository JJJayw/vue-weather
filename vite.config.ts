import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig({
        plugins: [
            vue(),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        server: {
            hmr: true,     //启动热更新，就是更改了代码自动刷新页面
            proxy: {
                '/weatherapi': {
                    target: 'https://api.caiyunapp.com/v2.6',
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/weatherapi/, '')
                }
            }
        }
    }
)
