import importCSSPlugin from '@react-scoped-css-reset/esbuild-plugins/import-css'
import esbuild from 'esbuild'

await esbuild.build({
  bundle: true,
  outfile: './dist/index.js',
  external: ['react'],
  entryPoints: ['./src/index.tsx'],
  plugins: [importCSSPlugin],
  format: 'esm',
  minify: true,
})
