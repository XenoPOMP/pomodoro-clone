import react from '@vitejs/plugin-react';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import VitePluginFonts from 'vite-plugin-fonts';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePluginFonts({
      custom: {
        families: [
          {
            name: 'Open Sans',
            src: './src/assets/fonts/Open Sans/OpenSans*',
            local: 'Open Sans',
          },
        ],
        preload: true,
      },
    }),
  ],

  // prevent vite from obscuring rust errors
  clearScreen: false,

  // to access the Tauri environment variables set by the CLI with information about the current target
  envPrefix: [
    'VITE_',
    'TAURI_PLATFORM',
    'TAURI_ARCH',
    'TAURI_FAMILY',
    'TAURI_PLATFORM_VERSION',
    'TAURI_PLATFORM_TYPE',
    'TAURI_DEBUG',
  ],

  build: {
    // Tauri uses Chromium on Windows and WebKit on macOS and Linux
    target: process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
    // don't minify for debug builds
    minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
  },

  server: {
    // Tauri expects a fixed port, fail if that port is not available
    strictPort: true,
  },

  // @ts-ignore
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
