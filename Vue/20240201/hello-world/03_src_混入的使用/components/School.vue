<script>
import {mixin} from "@/mixin";
export default {
  data() {
    return {
      name: '私立一中',
      address: 'XianYou'
    }
  },
  mixins: [mixin]
}
</script>

<template>
  <div @click="showInfo">
    <h1>学校名称: {{ name }}</h1>
    <h1>学校地址: {{ address }}</h1>
  </div>
</template>

<style scoped>

</style>
