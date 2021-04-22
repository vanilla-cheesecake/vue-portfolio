<template>
  <div class="" id="home">
    <!-- NAVBAR -->
    <div class="home-bg h-screen">
      <div id="nav" class="flex block justify-end relative w-full z-40">
        <div class="fixed block mt-56 top-0 pr-16">
          <nav id="nav" class="">
            <ul class="space-y-6">
              <li class="m-3">
                <a @click="scrollTo('home')">home</a>
              </li>
              <li class="m-3">
                <a @click="scrollTo('about')">about</a>
              </li>
              <li class="m-3">
                <a @click="scrollTo('projects')">projects</a>
              </li>
              <li class="m-3">
                <a @click="scrollTo('contact')">contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <!-- END NABVAR -->
      <div class="">
        <div class="container mx-auto mt-32 mb-64">
          <!-- HOME SECTIION -->
          <div class="flex flex-col">
            <section class="mx-auto justify-center">
              <p
                class="text-6xl font-black animate__animated animate__fadeInDown"
              >
                Hello, I'm <span class="text-blue-500">Golez Lloyd.</span>
              </p>
              <p
                class="text-3xl font-medium mt-4 animate__animated animate__fadeInDown animate__delay-1s"
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
      </div>
    </div>
    <!-- END HOME SECTIION -->

    <!-- ABOUT SECTIION -->
    <div class="about-bg">
      <div id="about" class="relative flex border w-full h-screen">
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
    </div>
    <!-- END ABOUT SECTION -->
    <!-- PROJECTS SECTIION -->
    <div class="home-bg">
      <div id="projects" class="relative border">
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
    </div>
    <!-- END PROJECTS SECTION -->
    <!-- CONTACS SECTIION -->
    <div class="home-bg">
      <div id="contact" class="relative">
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
    </div>
    <!-- END CONTACTS SECTION -->
  </div>
  <Footer />
</template>


<script>
import Social from "../components/Social";
import Footer from "../components/Footer";

export default {
  components: {
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
#nav a:active {
  color: #3b82f6;
  padding-bottom: 1px;
  border-bottom: 2px solid #3b82f6;
}
.home-bg {
  background-image: linear-gradient(
    to bottom,
    #0c0c11,
    #121221,
    #141630,
    #16193f,
    #191c4f,
    #23245a,
    #2e2c65,
    #383570,
    #494678,
    #595880,
    #6a6a87,
    #7c7c8e
  );
}
.about-bg {
  background-image: linear-gradient(
    to bottom,
    #0c0c11,
    #121221,
    #141630,
    #16193f,
    #191c4f,
    #23245a,
    #2e2c65,
    #383570,
    #494678,
    #595880,
    #6a6a87,
    #7c7c8e
  );
}
</style>