import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './views/Home.vue'
import other from './views/Other.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/other',
      name: 'other',
      component: other,
    }
  ]
});
export default router;