import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [    {
  path: '/',
  redirect: () => {
    // the function receives the target route as the argument
    // we return a redirect path/location here.
    return { path: '/home'}
  },
},{
  path: '/home',
  name: 'home',
  component: HomeView
  },
  {path: '/bio',
  name: 'bio',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
},
{
  path: '/contact',
  name: 'contact',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
},
{
  path: '/blog',
  name: 'blog',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/BlogView.vue')
},
  {
    path: '/blog/:id',
    name: 'blog-post',
    component: () => import('../components/BlogPost.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {

  return next();
});
export default router
