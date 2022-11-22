import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import App1 from '../views/App1.vue'
import App2 from '../views/App2.vue'
import App from '../views/App.vue'
import Index from '../views/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {    path: '/',        component: App  },
  {    path: '/app1',    component: App1  },
  {    path: '/app2',    component: App2  },
  {    path: '/index',   component: Index  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
