import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// Import Vuetify theme (optional)
// import './assets/theme.css'

const app = createApp(App)

app.use(router)

// Use Vuetify
app.use(Vuetify)

app.mount('#app')
