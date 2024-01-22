import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
              include: '**/*.{jsx, tsx}'
            }), 
  svgr(), eslint(), splitVendorChunkPlugin],

  test:{
    environment: 'jsdom',
    globals: true,              
    exclude: ['**/node_modules/**', 'automation'], // Exclude specific paths from tests
    setupFiles: './setupTest.js'
  },
  server: {
    host: true,
    port: 3000,
  }
})
