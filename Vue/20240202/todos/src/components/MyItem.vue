<script>
import pubSub from "pubsub-js";

  export default {
    props: ['todo'],
    methods: {
      handleCheck(id) {
        this.$bus.$emit('handleCheck', id)
      },
      handleDelete(todo) {
        pubSub.publish('handleDelete', todo)
      }
    }
  }
</script>

<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo)">删除</button>
  </li>
</template>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
  display: none;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #CCCCCC;
}

li:hover button {
  display: block;
}
</style>
