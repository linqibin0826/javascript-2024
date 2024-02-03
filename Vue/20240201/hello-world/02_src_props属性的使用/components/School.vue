<script>
  export default {
    data() {
      return {
        msg: 'PuTian'
      }
    },
    props: ['name', 'age']
  }
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ name }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<style scoped>

</style>
