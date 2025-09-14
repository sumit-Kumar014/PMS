import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/', // use './' if hosting on a subpath
  plugins: [
    tsconfigPaths(), // resolves tsconfig paths
    tailwindcss() // TailwindCSS integration
  ],
  build: {
    sourcemap: false, // disable sourcemaps in production to avoid errors
  },
  resolve: {
    alias: {
      // optional, if you want custom aliases
      '@components': '/src/components',
      '@utils': '/src/utils',
      '@routes': '/src/routes',
    },
  },
  server: {
    port: 5173, // default Vite port
    open: true, // automatically open in browser
  },
});
