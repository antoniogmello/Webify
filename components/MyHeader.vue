<template>
    <!-- HEADER -->
    <header class="wrapper bg-soft-primary">
      <nav
        :class="`navbar navbar-expand-lg center-logo transparent position-absolute ${
          addClass2 ? 'fixed navbar-clone' : ''
        } ${
          addClass
            ? 'navbar-clone navbar-stick navbar-light'
            : ' navbar-unstick navbar-dark'
        } `"
      >
        <div class="container justify-content-between align-items-center">
          <div
            class="d-flex flex-row w-100 justify-content-between align-items-center d-lg-none"
          >
            <div class="navbar-brand">
              <router-link to="/home" class="navbar-brand">
                <img
                  class="logo-dark"
                  src="/assets/img/logo-webify.light.png"
                  alt="photo"
                  style="width: 120px; height: auto"
                />
                <img
                  class="logo-light"
                  src="/assets/img/logo-webify.dark.png"
                  alt="photo"
                  style="width: 120px; height: auto"
                />
              </router-link>
            </div>
          </div>
          <!-- /.d-flex -->
          <div
            class="navbar-collapse-wrapper d-flex flex-row align-items-center w-100"
          >
            <div
              id="ofCanvasBody"
              class="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
            >
              <div
                class="offcanvas-header mx-lg-auto order-0 order-lg-1 d-lg-flex px-lg-15"
              >
                <router-link to="/home" class="navbar-brand">
                  <img
                    class="logo-dark"
                    src="/assets/img/logo-webify.light.png"
                    alt="photo"
                    style="width: 150px; height: auto"
                  />
                  <img
                    class="logo-light"
                    src="/assets/img/logo-webify.dark.png"
                    alt="photo"
                    style="width: 180px; height: auto"
                  />
                </router-link>
              </div>
              <MyMenu />
            </div>
            <!-- /.navbar-collapse -->
          </div>
          <!-- /.navbar-collapse-wrapper -->
        </div>
        <!-- /.container -->
      </nav>
      <!-- /.navbar -->
    </header>
  </template>
  
  <script setup>
  import { onBeforeUnmount, onMounted, ref } from "vue";
  import MyMenu from "./MyMenu.vue";
  
  const addClass = ref(false);
  const addClass2 = ref(false);
  
  const handleScroll = () => {
    addClass2.value = window.scrollY >= 200;
    addClass.value = window.scrollY >= 300;
  };
  
  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
  });
  </script>
  
  <style lang="scss" scoped>
  .logo-dark,
  .logo-light {
    display: block; /* Exibe o logo em todas as resoluções */
    width: 150px; /* Defina um tamanho padrão */
    height: auto; /* Mantém a proporção */
  }
  </style>
  