<script setup>
import { onMounted, watch } from "vue";
import AOS from "aos";
import { useRoute } from "vue-router";
import initClipboard from "@/utlis/initClipboard";
import initPrism from "@/utlis/initPrism";
import initPlayer from "@/utlis/initVideoplayer";
import { injectSvg } from "./utlis/injextSvg";

const route = useRoute();

onMounted(() => {
  // Inicialização mais segura
  if (typeof window !== "undefined") {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }

  AOS.init({
    duration: 1400,
    once: true, // Recomendado para performance
  });
});

watch(
  () => route.path,
  () => {
    // Usar nextTick para garantir atualização do DOM
    setTimeout(() => {
      initPlayer();
      initPrism();
      initClipboard();
      injectSvg();
      AOS.refresh(); // Atualizar AOS após mudança de rota
    }, 100);
  }
);
</script>

<template>
  <RouterView />
</template>

<style lang="css"></style>
