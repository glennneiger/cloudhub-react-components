import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';

import pkg from './package.json';

export default {
  input: ['src/CheckBox.js'],
  experimentalCodeSplitting: true,
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      dir: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      dire: 'es'
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs()
  ]
};
