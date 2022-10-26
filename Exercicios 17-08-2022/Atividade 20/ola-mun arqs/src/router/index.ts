import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CancoesView from '../views/CancoesView.vue';
import CosmoView from '../views/CosmoView.vue';
import PraiaView from '../views/PraiaView.vue';
import SabadoView from '../views/SabadoView.vue';
import CiceroAlbatrozView from '../views/CiceroAlbatrozView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/cancoes',
    name: 'Canções de apartamento',
    component: CancoesView,
  },
  {
    path: '/cosmo',
    name: 'Cosmo',
    component: CosmoView,
  },
  {
    path: '/praia',
    name: 'Praia',
    component: PraiaView,
  },
  {
    path: '/sabado',
    name: 'Sábado',
    component: SabadoView,
  },
  {
    path: '/ciceroAlbatroz',
    name: 'Cíero e Albatroz',
    component: CiceroAlbatrozView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
