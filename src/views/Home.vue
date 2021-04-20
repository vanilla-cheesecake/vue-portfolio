<template>
  <div class="container">
    <section class="flex mx-auto justify-center m-3">
      <h1 class="text-5xl">Homepage</h1>
    </section>

    <!-- <section class="relative flex mx-auto justify-center items-center flex-col mt-12">
    <qoutes />
  </section> -->
    <section class="relative flex mt-12 mx-auto justify-center">
      <div
        class="w-1/2 h-16 border b-blue-500 animate__animated animate__fadeInLeft animate__fast"
      ></div>
    </section>
    <section class="relative flex mt-12 mx-auto justify-center">
      <div
        class="w-1/2 h-16 border b-blue-500 animate__animated animate__fadeInRight animate__fast"
      ></div>
    </section>
    <section class="relative flex mt-12 mx-auto justify-center">
      <div
        class="w-1/2 h-16 border b-blue-500 animate__animated animate__bounceIn animate__delay-2s animate__fast"
      ></div>
    </section>
  </div>
</template>




<script>
import Qoutes from "../components/Qoutes";
export default {
  components: {
    qoutes: Qoutes,
  },
};
</script>

<style>
:root {
  --animate-delay: 0.5s;
}
</style>