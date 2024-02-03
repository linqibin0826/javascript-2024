<script>
import {mixin} from "@/mixin";

export default {
  data() {
    return {
      name: 'lin',
      age: 18
    }
  },
  mixins: [mixin]
}
</script>

<template>
  <div @click="showInfo()">
    <h1>学生名字: {{ name }}</h1>
    <h1>学生年龄: {{ age }}</h1>
  </div>
</template>

<style scoped>

</style>
