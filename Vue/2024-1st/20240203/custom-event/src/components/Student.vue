<script>
  export default {
    name: 'student-one',
    data() {
      return {
        name: 'lin',
        age: 20
      }
    },
    mounted() {
      this.$emit('sendName', this.name)
    }
  }
</script>

<template>
  <div>
    <h1>{{ name }}</h1>
    <h1>{{ age}}</h1>
  </div>
</template>

<style scoped>

</style>
