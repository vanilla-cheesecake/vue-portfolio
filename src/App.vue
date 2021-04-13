<template>  
  <div id="app">
    <Nav />
    <div class="absolute flex w-full justify-center mt-52">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav'


export default{
  name: 'App',
  components: { Nav }
}

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

#nav a.router-link-exact-active {
  color: #42b983;
} */
#app {
  overflow: hidden;
  width: 100vw;
}
.fade-enter-from, fade-leave-to {
  opacity: 0;
  transform: translateX(2em);
}
.fade-enter-active, .fade-leave-active {
  transition: all .3s ease;
}
</style>
