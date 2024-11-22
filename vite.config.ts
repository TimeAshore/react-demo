import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // 定义一些全局配置
  define: {
    // 'process.env.VITE_BackendAddress': JSON.stringify('http://52.156.53.178')
    'process.env.VITE_BackendAddress': JSON.stringify('https://dt01.azure-api.net')
  },
})
