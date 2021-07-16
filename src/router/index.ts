import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import PersonFormular from "@/views/PersonFormular.vue";
import PersonSpecialView from "@/views/PersonWiew/PersonSpecialView.vue";
import PersonViewPage from "@/views/PersonWiew/PersonViewPage.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/formular',
    name: 'Formular',
    component: PersonFormular,
  },
  {
    path: '/personview',
    name: 'PersonView',
    component: PersonViewPage,
  },
  {
    path: '/personspecialview',
    name: 'PersonSpecialView',
    component: PersonSpecialView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
