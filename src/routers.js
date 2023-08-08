import HomePage from './components/HomePage.vue';
import SingUp from './components/SingUp.vue';
import LoginPage from './components/LoginPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    name:'Home',
    component: HomePage,
    path:'/'
  },
  {
    name:'SingUp',
    component: SingUp,
    path:'/sing-up'
  },
  {
    name:'LoginPage',
    component: LoginPage,
    path:'/login'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
