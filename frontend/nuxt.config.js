module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Firebase App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyDfjmJrLXJ1LuliDZd5touL7tHe700oY7A",
          authDomain: "test-17cac.firebaseapp.com",
          projectId: "test-17cac",
          storageBucket: "test-17cac.appspot.com",
          messagingSenderId: "643787228730",
          appId: "1:643787228730:web:466aab4832670244b05703",
          // measurementId: '<measurementId>'
        },
        services: {
          firestore: {
            memoryOnly: false,
            enablePersistence: true,
            emulatorPort: 8080,
            emulatorHost: 'localhost',
          }
        }
      }
    ]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  
}

