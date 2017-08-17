<template>
  <div class="app page drawer drawer-right"> 
      <headNav></headNav>
         <transition name="slide-down">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
         </transition>
      <footNav></footNav>
  </div>
</template>

<script>
import headNav from './components/headNav.vue'    
import footNav from './components/footNav.vue'    
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components:{
      headNav,
      footNav  
  }
}
</script>

<style>
  .slide-down-enter-active, .slide-down-leave-active {
    transition: all .4s ease;
    opacity: .7;
   
  }
  .slide-down-enter,.slide-down-leave-active{
    opacity: .1;
    transform: translate3d(-50%, 0, 0);
  }
</style>
