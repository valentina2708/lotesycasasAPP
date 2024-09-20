import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		chunkSizeWarningLimit: 1600,
	},
	optimizeDeps: {
		include: [
			'@mui/material/Tooltip',
			'@emotion/styled',
			'@mui/material/Box',
			'@mui/material/Unstable_Grid2',
		],
	},
});
