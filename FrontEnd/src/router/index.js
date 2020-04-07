import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutMe from '../views/AboutMe.vue'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Store from '../views/Store.vue'
import Instagram from '../views/Instagram.vue'
import Policy from '../views/Policy.vue'
import SignUp from '../views/SignUp.vue'


Vue.use(VueRouter)

const routes = [
    {path: '/home', name: 'Home', component: Home},
    {path: '/aboutme', name: 'AboutMe', component: AboutMe},
    {path: '/contact', name: 'Contact', component: Contact},
    {path: '/store', name: 'Store', component: Store},
    {path: '/instagram', name: 'Instagram', component: Instagram},
    {path: '/policy', name: 'Policy', component: Policy},
    {path: '/signup', name: 'SignUp', component: SignUp},
]


const router = new VueRouter({
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
})

export default router