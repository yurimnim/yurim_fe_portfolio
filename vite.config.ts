import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/yurim_fe_portfolio/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.woff2')) {
            return 'assets/fonts/[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  },

  server: {
    headers: {
      'Content-Type': 'text/javascript'
    }
  }
})