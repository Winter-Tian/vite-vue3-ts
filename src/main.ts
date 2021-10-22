import { createApp } from 'vue'
import App from './App.vue'
import store, { key } from './store'
import router from './router'
import element3 from './plugins/element3'

createApp(App).use(store, key).use(router).use(element3).mount('#app')
