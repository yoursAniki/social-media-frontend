import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: { name: 'login' } },
      {
        path: 'auth',
        meta: { requiresGuest: true },
        children: [
          { path: 'login', name: 'login', component: () => import('src/pages/auth/LoginPage.vue') },
          {
            path: 'register',
            name: 'register',
            component: () => import('src/pages/auth/RegisterPage.vue'),
          },
          {
            path: 'new-verification',
            name: 'new-verification',
            component: () => import('src/pages/auth/VerificationPage.vue'),
          },
        ],
      },

      {
        path: 'profile',
        name: 'profile',
        meta: { requiresAuth: true },
        component: () => import('src/pages/profile/ProfilePage.vue'),
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
