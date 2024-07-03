import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';

interface ResolveConfig {
  alias: { find: string; replacement: string }[];
}

const resolveConfig: ResolveConfig = {
  alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env.SPOTIFY_API_CLIENT_ID': JSON.stringify(env.SPOTIFY_API_CLIENT_ID),
      'process.env.SPOTIFY_API_CLIENT_SECRET': JSON.stringify(env.SPOTIFY_API_CLIENT_SECRET),
    },
    plugins: [react()],
    resolve: resolveConfig,
  };
});
