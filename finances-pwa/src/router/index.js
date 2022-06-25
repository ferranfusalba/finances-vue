import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/LogIn.vue'
import Budget from '../views/Budget.vue'
import Accounts from '../views/Accounts.vue'
import Account_BBVA from '../views/Accounts_Children/BBVA.vue'
import Account_Andbank from '../views/Accounts_Children/Andbank.vue'
import Account_N26 from '../views/Accounts_Children/N26.vue'
import Account_Revolut from '../views/Accounts_Children/Revolut.vue'
import Account_Bankinter from '../views/Accounts_Children/Bankinter.vue'
import Data from '../views/Data.vue'
import Global from '../views/Data_Children/Global.vue'
import MonthByMonth from '../views/Data_Children/MonthByMonth.vue'
import YearByYear from '../views/Data_Children/YearByYear.vue'
import Balance from '../views/Data_Children/Balance.vue'
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
    path: '/budget',
    name: 'Budget',
    component: Budget
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
      {
        path: 'n26',
        name: 'N26',
        component: Account_N26,
      },
      {
        path: 'revolut',
        name: 'Revolut',
        component: Account_Revolut,
      },
      {
        path: 'bankinter',
        name: 'Bankinter',
        component: Account_Bankinter,
      },
    ]
  },
  {
    path: '/data',
    name: 'Data',
    component: Data,
    children: [
      {
        path: 'global',
        name: 'Global',
        component: Global
      },
      {
        path: 'month-by-month',
        name: 'MonthByMonth',
        component: MonthByMonth
      },
      {
        path: 'year-by-year',
        name: 'YearByYear',
        component: YearByYear
      },
      {
        path: 'balance',
        name: 'Balance',
        component: Balance
      },
    ]
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
