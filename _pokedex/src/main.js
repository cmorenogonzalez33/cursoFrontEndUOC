import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import GlobalFunctions from './js/views'
import store from './js/store'
import pokemons_cl from './models/pokemons_cl'

const globalFunctions = new GlobalFunctions()
const your_pokemons = new pokemons_cl()
const oponent_pokemons = new pokemons_cl()

store.commit('setTheme', globalFunctions.theme)

const app = createApp(App)
app.use(store)

app.config.globalProperties.$global_functions = globalFunctions
app.config.globalProperties.$store = store
app.config.globalProperties.$your_pokemons = your_pokemons
app.config.globalProperties.$oponent_pokemons = oponent_pokemons

app.use(createPinia())
app.use(router)

app.mount('#app')
