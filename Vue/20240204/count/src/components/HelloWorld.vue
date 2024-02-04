<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <select v-model.number="step">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="sum += step">+</button>
    <button @click="sum -= step">-</button>
    <button @click="oddAdd()">当前和为奇数再加</button>
    <button @click="waitAdd()">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      sum: 0,
      step: 1
    }
  },
  methods: {
    oddAdd() {
      if (this.sum % 2 !== 0) this.sum += this.step
    },
    waitAdd() {
      setTimeout(() => {
        this.sum += this.step
      }, 500)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button {
    margin-right: 5px;
  }
</style>
