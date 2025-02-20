<script setup>
import { onMounted, watch } from "vue";
import AOS from "aos";
import { useRoute } from "#app"; // Usa o helper de Nuxt
import initClipboard from "utils/initClipboard.js";
import initPrism from "utils/initPrism.js";
import { injectSvg } from "utils/injectSvg.js";

const route = useRoute();

onMounted(() => {
  if (typeof window !== "undefined") {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }

  AOS.init({
    duration: 1400,
    once: true,
  });
});

// Atualizar animações e funções ao mudar de página
watch(
  () => route.path,
  () => {
    setTimeout(() => {
      initPrism();
      initClipboard();
      injectSvg();
      AOS.refresh();
    }, 100);
  }
);
</script>

<template>
  <NuxtPage />
</template>

<style>
/* Correção: usar @/assets/ em vez de public/ */
@import "public/assets/css/plugins.css";
@import "public/assets/css/colors/colors.css";
@import "public/assets/css/style.css";
@import "public/assets/css/custom.css";
</style>
