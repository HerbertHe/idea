import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Unocss from "unocss/vite"
import presetUno from '@unocss/preset-uno'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Unocss({
    presets: [
      presetUno()
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup()
    ]
  })],
})
