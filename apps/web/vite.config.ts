import react from '@vitejs/plugin-react';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8000,
    open: false,
    cors: true,
  },
  preview: {
    port: 8001,
    open: true,
    cors: true,
  },
  build: {
    outDir: '../../dist/web',
    rollupOptions: {
      output: {
        dir: '../../dist/web',
        compact: true,
      },
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'styled-components',
            {
              ssr: false,
              displayName: true,
              fileName: true,
              meaninglessFileNames: ['index', 'styles'],
              minify: false,
              transpileTemplateLiterals: false,
              pure: true,
            },
          ],
        ],
        env: {
          production: {
            plugins: [
              [
                'styled-components',
                {
                  ssr: false,
                  displayName: false,
                  fileName: false,
                  minify: true,
                  transpileTemplateLiterals: true,
                  pure: true,
                },
              ],
            ],
          },
        },
      },
    }),
    tsconfigPaths(),
    splitVendorChunkPlugin(),
  ],
});
