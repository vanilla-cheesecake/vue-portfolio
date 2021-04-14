<template>  
 

  <div id="app">
  <div class="">
    <Nav />
      <div class="absolute flex w-full justify-center mt-52">
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>       
      </div>
  </div>
  </div>
      <Intro/>
</template>

<script>
import Nav from './components/Nav'
import Intro from './components/Intro'

export default{
  name: 'App',
  components: { 
    Nav, 
    Intro
  },
 
  
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
*/
#nav a.router-link-exact-active {
  color: #42b983;
} 
::-webkit-scrollbar {
  width: 0 !important
}
#app {
  overflow: hidden;
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden; /* Hide horizontal scrollbar */

}

.fade-enter-from, fade-leave-to {
  opacity: 0;
  transform: translateX(2em);
}
.fade-enter-active, .fade-leave-active {
  transition: all .3s ease;
}

</style>
