import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'auth',
        children: [
          { path: 'login', name: 'login', component: () => import('pages/LoginPage.vue') },
          { path: 'register', name: 'register', component: () => import('pages/RegisterPage.vue') },
          {
            path: 'new-verification',
            name: 'new-verification',
            component: () => import('pages/VerificationPage.vue'),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
