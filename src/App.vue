<template>  
 
  <div id="app">
    <!-- <transition name="fade" :duration="{ enter: 500, leave: 800 }"> -->
        <div v-if="showComponent">
            <div class="absolute fixed bg-cover" >
                <img src="../src/assets/intro.jpg" alt="">
            </div>
            <div class="absolute w-full">
             
                <div class="flex text-white text-9xl mt-48 justify-center"> 
                   <transition name="fade" mode="out-in">  
                    <h1>GOLEZ LLOYD</h1> 
                            </transition>
                </div>  
    
              <div class="flex mt-52 justify-center">
                <button v-on:click="showComponent = !showComponent" class="transition bg-white ease-out hover:bg-gray-900 hover:text-white hover:border-0 bg-teal-400 p-4 px-12 border rounded inline-block cursor-pointer">View Portfolio</button>
              </div>
            </div>
        </div>
    <!-- </transition> -->

    <div class="" v-if="!showComponent">
      <Nav />
        <div class="relative flex w-full justify-center">
          <div class="">
            <transition name="fade" mode="out-in">
              <router-view/>
            </transition>       
          </div>
        </div>
    </div>
  </div>
   
</template>
      
<script>
import Nav from './components/Nav'

export default{
  name: 'App',
  components: { 
    Nav
  },
   data: () => {
        return {
            showComponent: true,
        }
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
