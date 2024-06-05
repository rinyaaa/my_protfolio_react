import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/my_protfolio_react',
  server:{
    host:true,
  },
  build: {
    outDir: 'dist'  // これがデフォルトですが、確認しておきます
  },
  plugins: [react()],
})
