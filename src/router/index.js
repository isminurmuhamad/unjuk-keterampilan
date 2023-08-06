import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailNewsView from "../views/DetailNewsView.vue";
import DefaultTemplate from "../template/defaultTemplate.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: DefaultTemplate,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
      {
        path: ":slug",
        name: "DetailNews",
        component: DetailNewsView,
      },
    ],
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
