<template>

  <section class="flex mx-auto justify-center">
        <h1 class="text-5xl">Homepage</h1>
  </section>

  <!-- <qoutes /> -->
  <!-- <div class="container max-width mx-auto">
    <div class="">
      <h1 class="text-5xl">Homepage</h1>
    </div>
  </div> -->
  <section class="flex mx-auto justify-center items-center flex-col mt-12">
    <qoutes />
  </section>

</template>




<script>
import Qoutes from '../components/Qoutes'
export default {
  components: {
    'qoutes': Qoutes
  },
  
}
</script>