export const routes = [
  {
    path: "/home", // Adicionada vírgula faltando
    name: "home",
    component: () => import("@/views/index.vue"),
    meta: {
      title: "Webify - Home",
    },
  },
  {
    path: "/about-us",
    name: "about-us",
    component: () => import("@/views/AboutUs.vue"),
    meta: {
      title: "Webify - Sobre Nós",
    },
  },
  // Adicione um redirecionamento para a raiz
  {
    path: "/",
    redirect: "/home",
  },
];
