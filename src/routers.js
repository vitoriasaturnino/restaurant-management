import HomePage from './components/HomePage.vue';
import SingUp from './components/SingUp.vue';
import LoginPage from './components/LoginPage.vue';
import AddNewRestaurant from './components/AddNewRestaurant.vue';
import UpdateRestaurant from './components/UpdateRestaurant.vue';
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
  },
  {
    name: 'AddNewRestaurant',
    component: AddNewRestaurant,
    path: '/add-new-restaurant'
  },
  {
    name: 'UpdateRestaurant',
    component: UpdateRestaurant,
    path: '/update-restaurant/:id'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
