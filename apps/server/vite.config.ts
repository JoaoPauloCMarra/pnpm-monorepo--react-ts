import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
  preview: {
    port: 3001,
    open: true,
    cors: true,
  },
  build: {
    outDir: '../../dist/server',
    rollupOptions: {
      output: {
        dir: '../../dist/server',
        compact: true,
      },
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'nest',
      appPath: './src/main.ts',
      tsCompiler: 'swc',
    }),
  ],
  optimizeDeps: {
    // Vite does not work well with optionnal dependencies, mark them as ignored for now
    exclude: [
      '@nestjs/platform-socket.io',
      '@nestjs/websockets',
      '@nestjs/microservices',
      'amqp-connection-manager',
      'amqplib',
      'nats',
      '@grpc/proto-loader',
      '@grpc/grpc-js',
      'redis',
      'kafkajs',
      'mqtt',
      'cache-manager',
    ],
  },
});
