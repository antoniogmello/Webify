<template>
  <footer class="bg-light">
    <div class="container pb-13 pb-md-15">
      <div
        class="card image-wrapper bg-full bg-image bg-overlay bg-overlay-300 mb-14"
        style="background-image: url(/assets/img/photos/bg16.png)"
      >
        <div class="card-body p-10 p-xl-12">
          <div class="row text-center">
            <div class="col-xl-11 col-xxl-9 mx-auto">
              <h2 class="fs-16 text-uppercase text-white mb-3">
                Junta-te à nossa equipa!
              </h2>
              <h3 class="display-3 mb-8 px-lg-8 text-white">
                Somos
                <span class="underline-3 style-2 yellow">inovadores</span> na
                área do web developing.
              </h3>
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
          <div class="d-flex justify-content-center">
            <span><a class="btn btn-white rounded" href="#contact">Contacta-nos</a></span>
          </div>
        </div>
        <!--/.card-body -->
      </div>
      <!--/.card -->
      <div class="row gy-6 gy-lg-0 align-items-center justify-content-between">
        <!-- Coluna 1: Logo e redes sociais -->
        <div class="col-md-4 col-lg-4">
          <div class="widget text-center text-md-start">
            <img
              class="mb-3"
              src="/assets/img/logo-webify.dark-bg.png"
              style="width: 120px; height: auto; border-radius: 60px"
              alt="photo"
            />
            <p class="mb-3">
              © 2025 Webify.
              <br class="d-none d-lg-block" />
            </p>
            <nav
              class="nav social justify-content-center justify-content-md-start"
            >
              <FootersComponentsSocials />
            </nav>
          </div>
        </div>
        <!-- /column -->

        <!-- Coluna 2: Contactos -->
        <div class="col-md-4 col-lg-4">
          <div class="widget text-center text-md-start">
            <h4 class="widget-title mb-3">Contacta-nos</h4>
            <a href="mailto:contacto@webify-dev.pt" class="link-body">contacto@webify-dev.pt</a
            ><br />
            +351 914875742
          </div>
        </div>
        <!-- /column -->

        <!-- Coluna 3: Links -->
        <div class="col-md-4 col-lg-4">
          <div class="widget text-center text-md-start">
            <h4 class="widget-title mb-3">Descobre mais</h4>
            <ul class="list-unstyled text-reset mb-0">
              <!-- <router-link :to="item.link">{{ item.text }}</router-link>
                  <router-link :to="item.link">{{ item.text }}</router-link>
                  <router-link :to="item.link">{{ item.text }}</router-link> -->
            </ul>
          </div>
        </div>
        <!-- /column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </footer>
  <CommonScrolltop />
</template>
<script setup>
import CommonScrolltop from "@/components/common/Scrolltop.vue";
</script>
