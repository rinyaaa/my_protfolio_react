import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/my_protfolio_react',
  plugins:[react()],
  server:{
    host:true,
  },
  build: {
    outDir: 'dist',  // これがデフォルトですが、確認しておきます
    assetsInlineLimit: 0,
    manifest: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        // JavaScriptファイルのMIMEタイプを設定
        format: 'es', // ここで 'es' は "text/javascript" に相当します
      },
    },
  },
 
});
