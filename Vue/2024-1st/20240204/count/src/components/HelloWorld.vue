<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <select v-model.number="step">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add()">+</button>
    <button @click="minus()">-</button>
    <button @click="oddAdd()">当前和为奇数再加</button>
    <button @click="waitAdd()">等一等再加</button>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: 'HelloWorld',
  data() {
    return {
      step: 1
    }
  },
  methods: {
    add() {
      this.$store.commit('ADD', this.step)
    },
    minus() {
      this.$store.commit('MINUS', this.step)
    },
    oddAdd() {
      this.$store.dispatch('oddAdd', this.step)
    },
    waitAdd() {
      this.$store.dispatch('waitAdd', this.step)
    }
  },
  computed: {

    // ...mapState({ sum:'sum'})
    // 展开
    ...mapState(['sum'])
  },
  mounted() {
    console.log(this.$store);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button {
    margin-right: 5px;
  }
</style>
