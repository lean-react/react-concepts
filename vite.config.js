import reactRefresh from '@vitejs/plugin-react-refresh';

export default {
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  plugins: [
    reactRefresh()
  ]
}
