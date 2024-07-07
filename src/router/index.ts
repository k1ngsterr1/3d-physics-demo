// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../App.vue";
import ThreeDPage from "../pages/3D/index.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/3d",
    name: "3d",
    component: ThreeDPage,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
