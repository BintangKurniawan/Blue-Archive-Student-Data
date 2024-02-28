import { RouteRecordRaw } from 'vue-router';

const paths = [
  '/home',
  '/abydos',
  '/arius',
  '/gehenna',
  '/hyakkiyako',
  '/millennium',
  '/redwinter',
  '/shanhaijing',
  '/srt',
  '/trinity',
  '/valkyrie',
];

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  {
    path: '/detail/:name',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/DetailPage.vue') }],
  },

  {
    path: '/abydos',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/HomePage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

paths.forEach((path) => {
  routes.push({
    path: path,
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/HomePage.vue') }],
  });
});

export default routes;
