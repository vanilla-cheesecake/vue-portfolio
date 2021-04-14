<template>
    <transition name="fade" :duration="{ enter: 500, leave: 800 }">
        <div v-if="showComponent">
    
        <div class="absolute fixed bg-cover">
            <img src="../assets/intro.jpg" alt="">
        </div>
            <div class="absolute flex w-full justify-center text-white text-9xl mt-48">   
                <h1>GOLEZ LLOYD</h1> 
            </div>  
          <div class="absolute flex w-full justify-center mt-96">
            <button v-on:click="showComponent = !showComponent" class="transition bg-white ease-out hover:bg-gray-900 hover:text-white hover:border-0 bg-teal-400 p-4 px-12 border rounded inline-block cursor-pointer">View Portfolio</button>
    
      </div>
   
    </div>
         </transition>
</template>

<script>
export default {
 data: () => {
        return {
            showComponent: true
        }
    },
}
</script>

<style>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>