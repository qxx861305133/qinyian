<template>
  <div id="app">
    <v-head />
    <router-view></router-view>
    <v-footer />
  </div>
</template>

<script>
import VHead from '@/components/Head.vue'
import VFooter from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    VHead,
    VFooter
  }
}
</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
    height: 100vh
  }
</style>
