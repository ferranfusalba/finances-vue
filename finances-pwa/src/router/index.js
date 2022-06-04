import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/LogIn.vue'
import Global from '../views/Global.vue'
import Accounts from '../views/Accounts.vue'
import Account_BBVA from '../views/BBVA.vue'
import Account_Andbank from '../views/Andbank.vue'
import Data from '../views/Data.vue'
import Settings from '../views/Settings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Log In',
    component: Login
  },
  {
    path: '/global',
    name: 'Global',
    component: Global
  },
  {
    path: '/bbva',
    name: 'Account_BBVA',
    component: Account_BBVA
  },
  {
    path: '/accounts',
    name: 'Accounts',
    component: Accounts,
    children: [
      {
        path: 'bbva',
        name: 'BBVA',
        component: Account_BBVA,
      },
      {
        path: 'andbank',
        name: 'Andbank',
        component: Account_Andbank,
      },
    ]
  },
  {
    path: '/data',
    name: 'Data',
    component: Data
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
