import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Users from './components/Users.vue'
import VueRouter from 'vue-router'
import VueRessource from 'vue-resource'

Vue.use(VueRessource)
Vue.use(VueRouter)

let router = new VueRouter()

router.map({
    '/home': {
        component: Home
    },
    'users': {
        component: Users
    }
})

// Any invalid route will redirect to home
router.redirect({
    '*': '/home'
})

router.start(App, '#app')
