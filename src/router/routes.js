const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/roomOne", component: () => import("pages/roomOnePage.vue") },
      { path: "/roomTwo", component: () => import("pages/roomTwoPage.vue") },
      {
        path: "/roomThree",
        component: () => import("pages/roomThreePage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
