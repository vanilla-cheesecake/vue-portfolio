import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'


import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/tailwind.css'


createApp(App).use(VueAxios, axios).use(router).mount('#app')
