<template>
  <!-- <div class="absolute bg-fixed">
    <img
      class="h-screen w-screen home-img"
      src="../src/assets/background.jpg"
      alt=""
    />
  </div> -->

  <router-view />
</template>
      
<script>
export default {
  name: "App",
  components: {},
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
*/
/* .home-img {
} */
body {
}
/* #nav {
  padding: 30px;
}

#nav a {
  color: white;
} */

/* #nav a.router-link-exact-active {
  color: #3b82f6;
  padding-bottom: 1px;
  border-bottom: 2px solid #3b82f6;
} */
::-webkit-scrollbar {
  width: 0 !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  overflow: hidden;
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden; /* Hide horizontal scrollbar */
}
</style>
