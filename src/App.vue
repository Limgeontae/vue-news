<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
    <router-view></router-view>
    </transition>
   <Spinner :loading="loadingStatus"></Spinner>

  </div>
</template>

<script>

import ToolBar from '@/components/ToolBar.vue'
import Spinner from '@/components/SpinNer.vue'
import bus from '@/utils/bus'
export default {
  components:{
    Spinner,
    ToolBar,
  },
  data(){
    return{
      loadingStatus : false
    }
  },
  methods: {
    startSpinner(){
      this.loadingStatus = true
    },
    endSpinner(){
      this.loadingStatus = false
    },
  },
  created () {
    bus.$on('start:spinner', this.startSpinner)
    bus.$on('end:spinner' , this.endSpinner)

  }
}
</script>

<style>
  body{
    padding: 0;
    margin: 0;
  }

  a{
    color : #34495e;
    text-decoration: none;
  }
  a:hover{
    color: #42b883;
    text-decoration: underline;
  }
  a.router-link-exact-active{
    text-decoration: underline;
  }
  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.5s ease;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 0;
  }
</style>

