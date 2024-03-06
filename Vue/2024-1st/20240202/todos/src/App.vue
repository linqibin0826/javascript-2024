<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo"/>
        <MyList :todoList="todos"/>
        <MyFooter :todo-list="todos" @checkAll="checkAll"  @clearDone="clearDone"/>
      </div>
    </div>
  </div>
</template>

<script>
import pubSub from 'pubsub-js'

import MyHeader from "@/components/MyHeader.vue";
import MyList from "@/components/MyList.vue";
import MyFooter from "@/components/MyFooter.vue";

export default {
  name: 'App',
  components: {MyFooter, MyList, MyHeader},
  data() {
    return {
      pid: '',
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(val) {
        localStorage.setItem("todos", JSON.stringify(val))
      }
    }
  },
  methods: {
    // 数据写在哪里, 修改数据的方法就应该出现在哪里
    addTodo(todo) {
      this.todos.unshift(todo)
    },
    checkTodo(id) {
      this.todos.forEach(todo => {
        if (todo.id === id) todo.done = !todo.done
      })
    },
    deleteTodo(todo) {
      console.log(todo)
      const index = this.todos.indexOf(todo)
      this.todos.splice(index, 1)
    },
    clearDone() {
      this.todos = this.todos.filter(todo => !todo.done)
    },
    checkAll(check) {
      this.todos.map(todo => todo.done=check)
    }
  },
  mounted() {
    // 绑定事件
    this.$bus.$on('handleCheck', this.checkTodo)
    // this.$bus.$on('handleDelete', this.deleteTodo)
    this.pid = pubSub.subscribe('handleDelete', this.deleteTodo)
    console.log(`subscribe success, pid: ${this.pid}`)
  },
  beforeDestroy() {
    pubSub.unsubscribe(this.pid)
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}




</style>
