import Layout from './Layout.vue'
// import Vue from 'vue'
// import AsyncComputed from 'vue-async-computed'
// import Theme from 'awesome-vitepress-theme'
import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'

export default {
    ...DefaultTheme,

    // root component to wrap each page
    Layout: Layout,
    // Theme,

    // this is a Vue 3 functional component
    NotFound: () => 'custom 404',

    enhanceApp({ app, router, siteDate }) {
        // app is the Vue 3 app instance from `createApp()`.
        // router is VitePress' custom router.
        // `siteData` is a `ref` of current site-level metadata.

        // register global components
        app.component('MyGlobalComponent', /* ... */)
    }
}
