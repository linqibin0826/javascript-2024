<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <studentOne @sendName="handleStudentName"></studentOne>
  </div>
</template>

<script>
import studentOne from "@/components/Student.vue";

export default {
  name: 'App',
  components: {
    studentOne
  },
  data() {
    return {
      studentName: ''
    }
  },
  methods: {
    handleStudentName(name) {
      console.log('...')
      this.studentName = name
    }
  }
}
</script>

<style>

</style>
