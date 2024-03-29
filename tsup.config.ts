import { defineConfig } from 'tsup';

export default defineConfig({
	target: 'esnext',
  clean: true,
  dts: true,
  entry: ['src/cli.ts'],
	external: [],
	format: 'esm',
  minify: true,
	outDir: 'bin',
  treeshake: 'recommended'
});
