import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';



export default defineConfig({
  // github pages
  base: process.env.GITHUB_PAGES ? "my_portfolio_react" : "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        // ここに外部リソースとして扱いたくないファイルやパスを指定
        main: './index.html'
      }
    }
  }
});
