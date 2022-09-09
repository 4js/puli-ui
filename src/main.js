import { createApp } from 'vue'
import PUI from './packages'
import App from './App.vue'
import './style.css'

const app = createApp(App)

app.use(PUI)
app.mount('#app')
