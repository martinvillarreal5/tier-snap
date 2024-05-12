import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';

interface ResolveConfig {
  alias: { find: string; replacement: string }[];
}

const resolveConfig: ResolveConfig = {
  alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: resolveConfig,
});
