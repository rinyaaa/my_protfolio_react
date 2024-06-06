import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my_protfolio_react/',
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '/my_protfolio_react/assets/index-53lfyRL8.css'
      ]
    }
  }
});
