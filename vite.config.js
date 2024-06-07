import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';



export default defineConfig({
  // github pages
  base: process.env.GITHUB_PAGES ? "my_portfolio_react" : "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        // ここに外部リソースとして扱いたくないファイルやパスを指定
        '/my_protfolio_react/assets/index-53lfyRL8.css',
      ]
    }
  }
});
