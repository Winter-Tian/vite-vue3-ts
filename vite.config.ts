import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000
  },
  plugins: [vue(), viteMockServe({})]
})
