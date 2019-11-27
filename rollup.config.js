import serve from 'rollup-plugin-serve';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'src/test.ts',
  output: {
    file: 'dist/bundle-1.js',
    format: 'esm',
    sourcemap: true,
  },
  external: [],
  plugins: [
    serve('dist'),
    typescript(),
    postcss({
      extract: true,
      minimize: true,
      sourceMap: true,
      plugins: []
    })
  ],
}
