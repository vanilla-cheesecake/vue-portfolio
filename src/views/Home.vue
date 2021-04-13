<template>
  <div class="home">
    <h1>Homepage</h1>
    <qoutes></qoutes>
  </div>
</template>



<script>
import Qoutes from '../components/Qoutes'

export default {
  name: "Home",
  components: {
    'qoutes': Qoutes
  }
}
</script>