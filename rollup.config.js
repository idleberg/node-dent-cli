import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';

const defaults = {
  external: [ 'crypto' ],
  output: {
    file: 'bin/cli.mjs',
    format: 'esm'
  },
  plugins: [
    json(),
    typescript()
  ]
};

export default {
  ...defaults,
  input: 'src/main.ts'
};
