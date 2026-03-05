import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                escova: resolve(__dirname, 'escova-alisadora/index.html'),
                joelheira: resolve(__dirname, 'joelheira/index.html')
            }
        }
    }
});
