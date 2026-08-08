import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    watch: {
      ignored: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.webp', '**/*.mp4', '**/*.log', '**/*.crdownload', '**/*.tmp']
    }
  }
});
