import vue from '@vitejs/plugin-vue'

export default {
  build: {
    base: '/near-vue-tailwind/',
  },
  plugins: [vue()],
  optimizeDeps: {
    exclude: [
      'graphql',
    ],
  },
}
