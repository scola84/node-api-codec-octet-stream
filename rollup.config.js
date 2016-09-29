import buble from 'rollup-plugin-buble';

export default {
  dest: './dist/api-codec-octet-stream.js',
  entry: 'index.js',
  format: 'cjs',
  external: [
    'stream'
  ],
  plugins: [
    buble()
  ]
};
