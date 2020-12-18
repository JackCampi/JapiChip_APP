import vueRouter from 'vue-router'
import DocsEdit from './components/DocsEdit'
import App from './App'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import LogOut from './components/LogOut'
import ContactUs from './components/ContactUs'
import DocsVisualize from './components/DocsVisualize'//nuevo

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
            path: '/',
            name: "root",
            component: Login
        },
        {
            path: '/home/:email',
            name: "home",
            component: Home
        },
        {
            path: '/edit',
            name: "DocsEdit",
            component: DocsEdit
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        /*{
            path: '/login',
            name: 'Login',
            component: Login
        },*/
        {
            path: '/logout',
            name: 'LogOut',
            component: LogOut
        },
        {
            path: '/contact',
            name: 'ContactUs',
            component: ContactUs
        },
        {//nuevo
            path: '/visualize',
            name: "DocsVisualize",
            component: DocsVisualize
        }
    ]
})

export default router