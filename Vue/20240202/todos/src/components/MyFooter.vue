<script>
  export default {
    props: ['delAll', 'todoList', 'checkAll'],
    computed: {
      doneCount() {
        return this.todoList.filter(item => item.done).length
      },
      isAll: {
        get() {
          return this.doneCount === this.todoList.length
        },
        set(val) {
          this.checkAll(val)
        }
      }
    }
  }
</script>

<template>
  <div class="todo-footer" v-show="todoList.length > 0">
    <label>9
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
          <span>已完成 {{ doneCount }}</span> / 全部{{ todoList.length }}
        </span>
    <button class="btn btn-danger" @click="delAll">清除已完成任务</button>
  </div>
</template>

<style scoped>

/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>
