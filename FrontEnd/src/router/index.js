import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutMe from '../views/AboutMe.vue'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Store from '../views/Store.vue'
import Instagram from '../views/Instagram.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import Item from '../views/Item.vue'
import Launch from '../views/Launch.vue'
import Checkout from '../views/Checkout.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/home', name: 'Home', component: Home},
    {path: '/aboutme', name: 'AboutMe', component: AboutMe},
    {path: '/contact', name: 'Contact', component: Contact},
    {path: '/store', name: 'Store', component: Store},
    {path: '/instagram', name: 'Instagram', component: Instagram},
    {path: '/signup', name: 'SignUp', component: SignUp},
    {path: '/login', name: 'Login', component: Login},
    {path: '/shoppingcart', name: 'ShoppingCart', component: ShoppingCart},
    {path: '/item', name: 'Item', component: Item},
    {path: '/launch', name: 'Launch', component: Launch,},
    {path: '/checkout', name: 'Checkout', component: Checkout}
]


const router = new VueRouter({
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
})

router.replace("Home");

export default router;