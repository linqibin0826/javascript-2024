<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <YouMi></YouMi>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import store from "@/store";
import YouMi from "@/components/YouMi.vue";

export default {
  name: 'App',
  components: {
    HelloWorld,
    YouMi
  },
  store
}
</script>

<style>

</style>
