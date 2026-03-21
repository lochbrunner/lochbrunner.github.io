import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import yaml from '@modyfi/vite-plugin-yaml';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    yaml(),
    viteStaticCopy({
      targets: [
        // Serve the Chop compiler sub-app at /chop
        {
          src: 'chop/*',
          dest: 'chop',
        },
      ],
    }),
  ],
  build: {
    outDir: 'out',
  },
});
