<template>
  <div class="violet-theme urbanist-font">
    <div class="content-wrapper">
      <!-- HEADER -->
      <MyHeader />
      <!-- HERO -->
      <section
        class="wrapper image-wrapper bg-image bg-overlay bg-overlay-300"
        style="background-image: url(/assets/img/photos/bg20.png)"
      >
        <div class="container pt-17 pb-19 pt-md-18 pb-md-17 text-center">
          <div class="row">
            <div class="col-lg-8 col-xl-7 col-xxl-6 mx-auto">
              <br />
              <h1
                class="display-1 text-white fs-60 mb-4 px-md-15 px-lg-0"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay=""
              >
                <span class="underline-3 style-2 yellow">Webify</span>
                your business with us
              </h1>
              <p
                class="lead fs-24 text-white lh-sm mb-7 mx-md-13 mx-lg-10"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="200"
              >
                Simples. Acessível. Tecnológico.
              </p>
              <div data-aos="fade-up" data-aos-once="true" data-aos-delay="300">
                <router-link
                  class="btn btn-white rounded mb-10 mb-xxl-5"
                  to="/about"
                  >Sobre nós</router-link
                >
              </div>
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
        <div class="overflow-hidden">
          <div class="divider text-light mx-n2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
              <path
                fill="currentColor"
                d="M0,0V60H1440V0A5771,5771,0,0,1,0,0Z"
              />
            </svg>
          </div>
        </div>
      </section>

      <!-- SERVICES -->
      <section id="services" class="wrapper bg-light">
        <div class="container pb-15 pb-md-17">
          <div class="row gx-md-5 gy-5 mt-n19 mb-14 mb-md-17">
            <div
              class="col-md-6 col-xl-3"
              v-for="service in services4"
              :key="service.id"
            >
              <div class="card shadow-lg">
                <div class="card-body">
                  <img
                    :src="service.icon"
                    class="icon-svg icon-svg-sm solid-mono"
                    alt="photo"
                  />
                  <br />
                  <br />
                  <h4>{{ service.title }}</h4>
                  <p class="mb-2">{{ service.description }}</p>
                  <a
                    :href="service.learnMoreLink"
                    class="more hover"
                    :class="service.linkColorClass"
                    >Descobre Mais</a
                  >
                </div>
                <!--/.card-body -->
              </div>
              <!--/.card -->
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
          <div id="whyUs"></div>
          <div class="row">
            <div
              class="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center"
            >
              <h2 class="fs-16 text-uppercase text-muted mb-3">
                Porquê escolher-nos?
              </h2>
              <h3 class="display-3 mb-10 px-xl-10 px-xxl-15">
                Há várias
                <span class="underline-3 style-2 yellow">razões</span> pelas
                quais somos diferentes.
              </h3>
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
          <ul
            class="nav nav-tabs nav-tabs-bg nav-tabs-shadow-lg d-flex justify-content-between nav-justified flex-lg-row flex-column"
          >
            <li class="nav-item">
              <div
                :class="`nav-link d-flex flex-row cursor-pointer ${
                  activeTab == 1 ? 'active' : ''
                }`"
                @click="
                  () => {
                    activeTab = 1;
                  }
                "
              >
                <div>
                  <img
                    src="/assets/img/icons/solid/deal.svg"
                    class="icon-svg icon-svg-sm solid-mono text-fuchsia me-4"
                    alt="photo"
                  />
                </div>
                <div>
                  <h4>Processo autónomo</h4>
                  <p>Para que os nossos clientes se foquem no seu negócio.</p>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <div
                :class="`nav-link d-flex flex-row cursor-pointer ${
                  activeTab == 2 ? 'active' : ''
                }`"
                @click="
                  () => {
                    activeTab = 2;
                  }
                "
              >
                <div>
                  <img
                    src="/assets/img/icons/solid/script.svg"
                    class="icon-svg icon-svg-sm solid-mono text-violet me-4"
                    alt="photo"
                  />
                </div>
                <div>
                  <h4>Desenvolvimento com código</h4>
                  <p>
                    Não usamos atalhos (wix, wordpress, etc...) nem tecnologias
                    desatualizadas.
                  </p>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <div
                :class="`nav-link d-flex flex-row cursor-pointer ${
                  activeTab == 3 ? 'active' : ''
                }`"
                @click="
                  () => {
                    activeTab = 3;
                  }
                "
              >
                <div>
                  <img
                    src="/assets/img/icons/solid/touchscreen.svg"
                    class="icon-svg icon-svg-sm solid-mono text-yellow me-4"
                    alt="photo"
                  />
                </div>
                <div>
                  <h4>Software intuitivo</h4>
                  <p>É a nossa prioridade a experiência do utilizador.</p>
                </div>
              </div>
            </li>
          </ul>
          <!-- /.nav-tabs -->
          <div class="tab-content mt-6 mt-lg-8">
            <div
              :class="`tab-pane fade  ${activeTab == 1 ? 'show active' : ''}`"
            >
              <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                <div class="col-lg-6">
                  <figure class="rounded shadow-lg">
                    <img
                      src="/assets/img/hand-shake.jpg"
                      srcset="/assets/img/hand-shake.jpg"
                      alt="photo"
                    />
                  </figure>
                </div>
                <!--/column -->
                <div class="col-lg-6">
                  <h2 class="mb-3">Entrega chave na mão</h2>
                  <p>
                    Após a consultoria e o planeamento conjunto, desenhamos e
                    entregamos o projeto de modo que o cliente possa focar toda
                    a sua energia no seu negócio, e nós tratamos da tecnologia.
                  </p>
                  <ul class="icon-list bullet-bg bullet-soft-fuchsia">
                    <li
                      v-for="(item, index) in checklistItems1.slice(0, 3)"
                      :key="index"
                      :class="{ 'mt-3': index > 0 }"
                    >
                      <span><i class="uil uil-check"></i></span>
                      <span>{{ item.text }}</span>
                    </li>
                  </ul>
                  <a href="#" class="btn btn-fuchsia mt-2">Descobre Mais</a>
                </div>
                <!--/column -->
              </div>
              <!--/.row -->
            </div>
            <!--/.tab-pane -->
            <div
              :class="`tab-pane fade  ${activeTab == 2 ? 'show active' : ''}`"
            >
              <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                <div class="col-lg-6 order-lg-2">
                  <figure class="rounded shadow-lg">
                    <img src="/assets/img/code.jpg" alt="photo" />
                  </figure>
                </div>
                <!--/column -->
                <div class="col-lg-6">
                  <h2 class="mb-3">Uso de código puro</h2>
                  <p>
                    Todo o nosso desenvolvimento é feito em código, não usamos
                    as tecnologias "recentes" como o wix e o wordpress, na
                    verdade, por fazerem uso de tecnologia desatualizada (php),
                    lenta, pouco flexível, dificilmente personalizável, e
                    ultimamente cara. Muitos encontram essa solução como "mais
                    rápida", mas com a nossa expertise de engenharia informática
                    escrever código nunca será um problema.
                  </p>
                  <ul class="icon-list bullet-bg bullet-soft-violet">
                    <li
                      v-for="(item, index) in checklistItems2.slice(0, 4)"
                      :key="index"
                      :class="{ 'mt-3': index > 0 }"
                    >
                      <span><i class="uil uil-check"></i></span>
                      <span>{{ item.text }}</span>
                    </li>
                  </ul>
                  <a href="#" class="btn btn-violet mt-2">Descobre Mais</a>
                </div>
                <!--/column -->
              </div>
              <!--/.row -->
            </div>
            <!--/.tab-pane -->
            <div
              :class="`tab-pane fade  ${activeTab == 3 ? 'show active' : ''}`"
            >
              <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                <div class="col-lg-6">
                  <figure class="rounded shadow-lg">
                    <img src="/assets/img/ui-ux.jpg" alt="photo" />
                  </figure>
                </div>
                <!--/column -->
                <div class="col-lg-6">
                  <h2 class="mb-3">Experiência do utilizador</h2>
                  <p>
                    A nossa prioridade é a experiência do utilizador, e com as
                    nossas ferramentas e conhecimentos, temos a capacidade de
                    tornar qualquer software fácil e intutivo de usar. Para tal,
                    na fase de planemanto apresentamos ao cliente o desenho
                    final e certficamo-nos que o nosso software está utlizável
                    para não informáticos.
                  </p>
                  <ul class="icon-list bullet-bg bullet-soft-yellow">
                    <li
                      v-for="(item, index) in checklistItems3.slice(0, 3)"
                      :key="index"
                      :class="{ 'mt-3': index > 0 }"
                    >
                      <span><i class="uil uil-check"></i></span>
                      <span>{{ item.text }}</span>
                    </li>
                  </ul>
                  <a href="#" class="btn btn-yellow mt-2">Descobre Mais</a>
                </div>
                <!--/column -->
              </div>
              <!--/.row -->
            </div>
            <!--/.tab-pane -->
          </div>
          <!-- /.tab-content -->
        </div>
        <!-- /.container -->
      </section>

      <!-- FACTS -->
      <section class="wrapper bg-light wrapper-border">
        <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
          <h2 class="display-4 mb-3">Como fazemos?</h2>
          <p class="lead fs-lg mb-8">
            Utilizamos um worflow <span class="underline">sem peso</span> para a
            sua empresa.
          </p>
          <div class="row gx-lg-8 gx-xl-12 gy-6 process-wrapper line">
            <div
              v-for="(item, index) in steps0"
              class="col-md-6 col-lg-3"
              :key="index"
            >
              <span
                :class="[
                  'icon',
                  'btn',
                  'btn-circle',
                  'btn-lg',
                  item.number != 2 ? 'btn-soft-primary' : 'btn-primary',
                  'pe-none',
                  'mb-4',
                ]"
              >
                <span class="number">{{ item.number }}</span>
              </span>
              <h4 class="mb-1">{{ item.title }}</h4>
              <p class="mb-0">{{ item.description }}</p>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!-- /.container -->

        <!-- /.container -->
      </section>

      <!-- WHY US -->
      <section class="wrapper bg-gray">
        <div class="container py-10 py-md-12 pb-md-9">
          <div class="row align-items-center gy-8 mb-13">
            <div class="col-lg-7 text-center text-lg-start">
              <h2 class="fs-16 text-uppercase text-muted mb-3">
                Poupe dinheiro, tempo e recursos
              </h2>
              <h3 class="display-3 mb-0 pe-xl-10 pe-xxl-15">
                Poupe ao escolher a nossa equipa de
                <span class="underline-3 style-2 yellow">professionais</span>
                .
              </h3>
            </div>
            <!-- /column -->
            <div class="col-lg-5">
              <div class="row gy-6 text-center">
                <div
                  class="col-lg-5"
                  v-for="(item, index) in progressBars"
                  :key="index"
                >
                  <div class="col-md-6">
                    <div class="progressbar semi-circle" :class="item.color">
                      <CircleProgressBar :max="item.value" />
                    </div>
                    <h4 class="mb-0">{{ item.label }}</h4>
                  </div>
                  <!-- /column -->
                </div>
                <!-- /column -->
              </div>
              <!-- /.row -->
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
      </section>

      <!-- CLIENTS -->
      <section id="clients" class="wrapper bg-light wrapper-border">
        <div class="container pt-0 pt-md-0 pb-0 pb-md-0">
          <div class="swiper-container clients mb-0">
            <img src="/assets/img/logo-kweeder.png" style="max-width: 130px" />
            <img src="/assets/img/logo-com.png" style="max-width: 100px" />
            <img
              src="/assets/img/logo-blueshield.bw.png"
              style="max-width: 120px"
            />
            <img src="/assets/img/logo-b1.bw.png" style="max-width: 200px" />
          </div>
        </div>
      </section>

      <!-- CONTACT -->
      <section id="snippet-2" class="wrapper bg-light wrapper-border">
        <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
          <div class="row gx-md-8 gx-xl-12 gy-10 align-items-center">
            <div
              class="col-md-8 col-lg-6 offset-lg-0 col-xl-5 offset-xl-1 position-relative"
            >
              <div
                class="shape bg-dot primary rellax w-17 h-21"
                data-rellax-speed="1"
                style="top: -2rem; left: -1.4rem"
              ></div>
              <figure class="rounded">
                <img
                  src="/assets/img/contact.avif"
                  alt=""
                />
              </figure>
            </div>
            <!--/column -->
            <div class="col-lg-6">
              <img
                src="/assets/img/icons/lineal/telemarketer.svg"
                class="icon-svg icon-svg-md mb-4"
                alt=""
              />
              <h2 class="display-4 mb-8">
                Já estás convencido? Contacta-nos!.
              </h2>
              <div
                v-for="item in contactInfo"
                :key="item.id"
                class="d-flex flex-row"
              >
                <div>
                  <div class="icon text-primary fs-28 me-6 mt-n1">
                    <i :class="item.iconClass"></i>
                  </div>
                </div>
                <div>
                  <h5 class="mb-1">{{ item.title }}</h5>

                  <address v-if="item.address">
                    {{ item.address.line1 }}<br class="d-none d-md-block" />{{
                      item.address.line2
                    }}
                  </address>

                  <p v-if="item.content">{{ item.content }}</p>
                  <a v-if="item.mail" :href="item.mail" class="link-body">{{
                    item.mail
                  }}</a>
                </div>
              </div>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!-- /.container -->

        <!-- /.container -->
      </section>
    </div>
    <!-- FOOTER -->
    <MyFooter />
  </div>
</template>

<script setup>
import MyHeader from "@/components/MyHeader.vue";
import MyFooter from "@/components/MyFooter.vue";
import CircleProgressBar from "@/components/common/CircleProgressBar.vue";
import { onBeforeUnmount, onMounted, ref } from "vue";

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

const progressBars = [
  {
    value: 68,
    color: "fuchsia",
    label: "Tempo salvo",
  },
  {
    value: 79,
    color: "orange",
    label: "Dinheiro poupado",
  },
  {
    value: 99,
    color: "yellow",
    label: "Recursos evitados",
  },
];

const activeTab = ref(1);

const checklistItems1 = [
  { text: "Consultoria e planeamento conjunto." },
  { text: "Desenvolvimento autónomo." },
  { text: "Entrega chave na mão." },
];

const checklistItems2 = [
  { text: "Código puro." },
  { text: "Linguagens e frameworks recentes." },
  { text: "Rápido e eficiente." },
  { text: "Expertise de engenaria informática." },
];

const checklistItems3 = [
  { text: "Experiência do utilizador." },
  { text: "Construído à medida." },
  { text: "Usabilidade para não informáticos." },
];

const steps0 = [
  {
    number: "01",
    title: "Consultoria",
    description:
      "Analisamos e procuramos onde é que um software vai ajudar o seu negócio.",
  },
  {
    number: "02",
    title: "Proposta",
    description:
      "Após uma análise extensiva, propomos a nossa ideia de 'webificação' aos nossos clientes.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Com as nossas ferramentas e expertise técnica vamos desenvolver o projeto nas datas propostas.",
  },
  {
    number: "04",
    title: "Entrega",
    description:
      "Apresentamos ao cliente a nossa entrega final, e esperamos uma aprovação antes de fazer os toques finais.",
  },
];
const contactInfo = [
  {
    id: 1,
    iconClass: "uil uil-phone-volume",
    title: "Phone",
    content: "+351 914875742",
  },
  {
    id: 2,
    iconClass: "uil uil-envelope",
    title: "E-mail",
    mail: "contacto@webify-dev.pt",
  },
];

const services4 = [
  {
    id: 1,
    icon: "/assets/img/icons/solid/edit.svg",
    iconColorClass: "text-fuchsia",
    title: "Consutoria",
    description:
      " Gratuitamente consultamos a sua empresa e encontramos onde é que a implementação de um software maximiza o seu retorno.",
    learnMoreLink: "/home#whyUs",
    linkColorClass: "link-fuchsia",
  },
  {
    id: 2,
    icon: "/assets/img/icons/solid/code.svg",
    iconColorClass: "text-violet",
    title: "APIs",
    description:
      " Desenvolvemos APIs, desenhadas de raíz, ajustadas às suas necessidades e compatíveis com o vosso software existente.",
    learnMoreLink: "/home#whyUs",
    linkColorClass: "link-violet",
  },
  {
    id: 3,
    icon: "/assets/img/icons/solid/lamp.svg",
    iconColorClass: "text-orange",
    title: "Inteligência Artificial",
    description:
      "Implementamos inteligência artificial nos softwares dos nossos clientes para poderem gerir as suas equipas e recursos de forma otimizada.",
    learnMoreLink: "/home#whyUs",
    linkColorClass: "link-orange",
  },
  {
    id: 4,
    icon: "/assets/img/icons/solid/seo.svg",
    iconColorClass: "text-yellow",
    title: "Websites",
    description:
      " Num end-to-end service, consultamos a sua empresa e entregamos um site desenvolvido em código, usando linguagens e frameworks recentes.",
    learnMoreLink: "/home#whyUs",
    linkColorClass: "link-yellow",
  },
];
</script>

<style lang="scss" scoped>
.clients {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px; /* Espaçamento entre os logos */
  width: 70%;
  margin-left: 220px;
}

/* Responsividade para telas menores */
@media (max-width: 768px) {
  .clients {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  .clients img {
    max-width: 100px; /* Reduz o tamanho dos logos em mobile */
  }
}

.navbar-brand {
  display: block;
}

.logo-dark,
.logo-light {
  display: block; /* Exibe o logo em todas as resoluções */
  width: 150px; /* Defina um tamanho padrão */
  height: auto; /* Mantém a proporção */
}
</style>
˙
