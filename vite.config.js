import vue from '@vitejs/plugin-vue'

export default {
  base: '/near-vue-tailwind',
  plugins: [vue()],
  optimizeDeps: {
    exclude: [
      'graphql',
    ],
  },
}
