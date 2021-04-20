<template>
  <div class="app">
    <Nav />
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <router-view />
    </transition>
  </div>
</template>
      
<script>
import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>


<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
*/
#nav a.router-link-exact-active {
  color: #42b983;
}
::-webkit-scrollbar {
  width: 0 !important;
}
#app {
  overflow: hidden;
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden; /* Hide horizontal scrollbar */
}
</style>
