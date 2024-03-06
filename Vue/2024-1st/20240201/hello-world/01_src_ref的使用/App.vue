<template>
  <div id="app">
    <School ref="school"></School>
    <button @click="showInfoApp()">显示信息</button>
  </div>
</template>

<script>
import School from "@/components/School.vue";

export default {
  name: 'App',
  components: {
    School
  },
  methods: {
    showInfoApp() {
      console.log(this.$refs);
    }
  }
}
</script>

<style>
</style>
