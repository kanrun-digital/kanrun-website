import { defineConfig } from 'vite'
import { resolve } from 'path'

// base './' — собранный dist работает на любом хостинге и подпути
// (GitHub Pages project site, S3, subdirectory) без правок путей
export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        products: resolve(__dirname, 'products.html'),
        services: resolve(__dirname, 'services.html'),
        company: resolve(__dirname, 'company.html'),
        contacts: resolve(__dirname, 'contacts.html'),
      },
    },
  },
})
