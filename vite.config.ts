import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';

interface ResolveConfig {
  alias: { find: string; replacement: string }[];
}

const resolveConfig: ResolveConfig = {
  alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
};

const cherryPickedKeys = ['SPOTIFY_API_CLIENT_ID', 'SPOTIFY_API_CLIENT_SECRET'];

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  try {
    const env = loadEnv(mode, process.cwd(), '');

    return {
      define: {
        'process.env.SPOTIFY_API_CLIENT_ID': JSON.stringify(env.SPOTIFY_API_CLIENT_ID),
        'process.env.SPOTIFY_API_CLIENT_SECRET': JSON.stringify(env.SPOTIFY_API_CLIENT_SECRET),
      },
      plugins: [react()],
      resolve: resolveConfig,
    };
  } catch (error) {
    console.log(error);
  }
  return {
    plugins: [react()],
    resolve: resolveConfig,
  };
});
