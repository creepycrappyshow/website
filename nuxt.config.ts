export default defineNuxtConfig({
  app: {
    head: {
      title: 'CreepyCrappyShow',
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, height=device-height, user-scalable=no, initial-scale=1'
        },
        {
          name: 'format-detection', content: 'telephone=no'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Yet another streaming channel.'
        },
        {
          hid: 'og:type', property: 'og:type', content: 'website'
        },
        {
          hid: 'og:title', property: 'og:title', content: 'CreepyCrappyShow'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Yet another streaming channel.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://creepycrappy.show/share.png'
        },
        {
          hid: 'og:url', property: 'og:url', content: 'https://creepycrappy.show'
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:title', name: 'twitter:title', content: 'CreepyCrappyShow'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Yet another streaming channel.'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://creepycrappy.show/share.png'
        },
      ],
      script: [
      ],
      link: [
        { rel: 'icon', href: '/favicon.png' }
      ],
      style: [
      ],
      noscript: [
        { children: 'Javascript is required' }
      ],
      bodyAttrs: {
        class: 'bg-zinc-900 font-sans pattern select-none'
      }
    }
  },
  css: [
    '~/assets/css/application.scss'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
