import { defineConfig } from 'vite';

export default defineConfig({
    optimizeDeps: {
        rolldownOptions: {
            transform: { jsx: { runtime: 'classic' } },
        },
    },
    oxc: {
        jsx: { runtime: 'classic' },
    },
});
