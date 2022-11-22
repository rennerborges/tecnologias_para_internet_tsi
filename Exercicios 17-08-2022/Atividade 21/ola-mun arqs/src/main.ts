import { createApp } from 'vue'
import App from './views/App.vue'
import './registerServiceWorker'
import router from './router/index'
import '@fortawesome/fontawesome-free/css/all.css'

createApp(App).use(router).mount('#app')