import MyHeader from "@/components/MyHeader.vue";
import MyMenu from "@/components/MyMenu.vue";
import MyFooter from "@/components/MyFooter.vue";

export const globalRegisTrationComponents = (app) => {
  // Registro mais organizado
  const components = {
    MyHeader,
    MyMenu,
    MyFooter,
  };

  Object.entries(components).forEach(([name, component]) => {
    app.component(name, component);
  });
};
