<template>
  <div class="">
    <div class="container mx-auto mt-32 mb-12">
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
            <button class="focus:outline-none">About me</button>
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
    <div id="about" class="relative">
      <section class="w-full mt-96 mb-12">
        <div class="bg-blue-500">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non porro
            excepturi veniam quisquam reprehenderit obcaecati corporis vero
            repellendus est laboriosam, labore saepe! Expedita necessitatibus,
            dolorem minima optio repudiandae officia quos? Saepe, totam enim
            nisi necessitatibus nihil sit animi, minima eius provident dicta
            accusantium tempora corporis blanditiis deserunt quos recusandae
            fugit voluptatem quia delectus, odit consequuntur eos. Aliquam
            accusamus expedita voluptate quibusdam unde corrupti? Repellendus
            dolor beatae porro doloribus, illo excepturi. Dolor, hic cupiditate.
            Eveniet illum, dicta esse quam amet fugiat velit voluptates
            repudiandae voluptatem. Architecto voluptatem reprehenderit adipisci
            quibusdam? Possimus soluta illo, omnis pariatur tempora voluptatem
            quidem perspiciatis. Ex, perferendis!
          </p>
        </div>
      </section>
    </div>
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
};
</script>

<style>
:root {
  --animate-delay: 0.5s;
}
</style>