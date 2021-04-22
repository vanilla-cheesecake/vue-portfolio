<template>
  <div class="" id="home">
    <!-- NAVBAR -->
    <div id="nav" class="flex justify-end relative w-full z-40">
      <div class="fixed mt-9 top-0 pr-16">
        <nav class="font-medium">
          <ul class="block font-medium">
            <a class="m-3 btn-active" @click="scrollTo('home')">Home</a>
            <a class="m-3 btn-active" @click="scrollTo('about')">about</a>
            <a class="m-3 btn-active" @click="scrollTo('projects')">projects</a>
            <a class="m-3 btn-active" @click="scrollTo('contact')">contact</a>
          </ul>
        </nav>
      </div>
    </div>
    <!-- END NABVAR -->
    <div class="container mx-auto mt-32 mb-64">
      <!-- HOME SECTIION -->
      <div class="flex flex-col">
        <section class="mx-auto justify-center">
          <p class="text-6xl font-black animate__animated animate__fadeInDown">
            Hello, I'm <span class="text-blue-500">Golez Lloyd.</span>
          </p>
          <p
            class="text-3xl font-medium animate__animated animate__fadeInDown animate__delay-1s"
          >
            I'm a full-stack
            <span class="font-bold text-blue-500">web developer.</span>
          </p>
        </section>
        <div
          class="mx-auto flex block space-x-2 text-center mt-12 mb-12 animate__animated animate__fadeInUp"
        >
          <div
            class="transform border p-2 w-28 rounded-xl transition duration-100 hover:scale-105"
          >
            <button class="focus:outline-none" @click="scrollTo('about')">
              About me
            </button>
          </div>
          <div
            class="transform border p-2 w-28 rounded-xl transition duration-100 hover:scale-105"
          >
            <button class="focus:outline-none">My work</button>
          </div>
        </div>
        <div
          class="flex justify-start absolute p-16 animate__animated animate__fadeInLeft animate__delay-2s"
        >
          <Social class="space-y-6 animate-pulse" />
        </div>
      </div>
    </div>
    <!-- END HOME SECTIION -->

    <!-- ABOUT SECTIION -->
    <div id="about" class="relative flex bg-gray-500 w-full h-screen">
      <div class="row">
        <div class="flex flex-col">
          <section class="mx-auto flex w-full">
            <div class="">
              <h1 class="text-9xl justify-center font-black">ABOUT ME</h1>
              <div class="justify-center flex-wrap">
                <p>
                  GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                  GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                  GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                  GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                  GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                  GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                  GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                  GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                  GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                  GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                  GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                  GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <!-- END ABOUT SECTION -->
    <!-- PROJECTS SECTIION -->
    <div id="projects" class="relative bg-black">
      <div class="row justify-center">
        <div class="container h-screen w-full">
          <section class="">
            <div class="flex flex-col mx-auto">
              <h1 class="text-9xl font-black text-blue-500 justify-center">
                MY PROJECTS
              </h1>
            </div>
            <div class="">
              <p>
                GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
    <!-- END PROJECTS SECTION -->
    <!-- CONTACS SECTIION -->
    <div id="contact" class="relative bg-gray-500">
      <div class="row">
        <div class="container h-screen">
          <section class="w-full">
            <div class="flex flex-col mx-auto justify-center">
              <h1 class="text-9xl text-9xl font-black justify-center">
                CONTACT ME
              </h1>
              <div class="justify-center">
                <p>
                  GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                  GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                  GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                  GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                  GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                  GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                  GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                  GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                  GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                  GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                  GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                  GOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZGOLEZ
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <!-- END CONTACTS SECTION -->
  </div>
  <Footer />
</template>


<script>
import Qoutes from "../components/Qoutes";
import Social from "../components/Social";
import Footer from "../components/Footer";

export default {
  components: {
    qoutes: Qoutes,
    Social,
    Footer,
  },
  data() {
    return {
      view: {
        atTopOfPage: true,
      },
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    // SCROLL MAGIC SLIDE, I'm stupid and noob so it took me 2 solid days to figure this out
    // nah took me 2 days to find on google
    scrollTo(element) {
      const el = document.querySelector("#" + element);
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.view.atTopOfPage) this.view.atTopOfPage = false;
      } else {
        // user is at top of page
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true;
      }
    },
  },
};
</script>

<style>
:root {
  --animate-delay: 0.5s;
}
</style>