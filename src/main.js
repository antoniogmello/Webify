import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { globalRegisTrationComponents } from "./components";

const app = createApp(App);

app.use(router);
globalRegisTrationComponents(app);

// Correção: O mount deve apontar para um seletor CSS, não para uma rota
app.mount("#app"); // Altere para o seletor correto do seu HTML
