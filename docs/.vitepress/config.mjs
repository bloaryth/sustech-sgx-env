import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SUSTECH SGX ENV",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Enclyzer', link: '/running-enclyzer-with-docker'},
      { text: 'SpeechMiner', link: '/running-speechminer-with-docker'}
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Enclyzer',
        items: [
          { text: 'Running Enclyzer with Docker', link: '/running-enclyzer-with-docker'}
        ]
      },
      {
        text: 'SpeechMiner',
        items: [
          { text: 'Running SpeechMiner with Docker', link: '/running-speechminer-with-docker'}
        ]
      }
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bloaryth/enclyzer' },
    ]
  },
  base: "/sustech-sgx-env/"
})