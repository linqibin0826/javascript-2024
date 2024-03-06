<script>
  import {mapState} from "vuex";
  export default {
    computed: {
      ...mapState(['sum'])
    }
  }
</script>

<template>
  <div>
    <h1>和是: {{ sum }}</h1>
  </div>
</template>

<style scoped>

</style>
