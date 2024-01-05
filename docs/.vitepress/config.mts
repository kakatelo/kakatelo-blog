import { defineConfig } from 'vitepress'
import { navbar } from './config/navbar'
import { sidebar } from './config/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: process.env.BSAE || '/2024-viteprss-blog/',
  title: 'kakatelo-blog',
  description: 'A VitePress Site',
  themeConfig: {
    nav: navbar,
    sidebar: sidebar,

    socialLinks: [{ icon: 'github', link: 'https://github.com/kakatelo/2024-viteprss-blog' }]
  }
})
