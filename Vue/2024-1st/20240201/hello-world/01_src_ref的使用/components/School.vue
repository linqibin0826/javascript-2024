<script>
  export default {
    name: 'School',
    data() {
      return {
        name: '私立一中',
        address: 'putian'
      }
    },
    methods: {
      showInfo() {
        console.log(this.$refs);
      }
    }
  }
</script>

<template>
  <div>
    <h2 ref="school-name">学校名称: {{ name }}</h2>
    <h2 ref="school-address">学校地址: {{ address }}</h2>
    <button @click="showInfo()">显示信息</button>
  </div>
</template>

<style scoped>

</style>
