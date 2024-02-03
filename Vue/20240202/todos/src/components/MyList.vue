<script>
import MyItem from "@/components/MyItem.vue";

export default {
  components: {MyItem},
  props: ['todoList']
}

</script>

<template>
  <ul class="todo-main">
    <MyItem
        :todo="item"
        v-for="item in todoList"
        :key="item.id"
    />
  </ul>
</template>

<style scoped>

/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
