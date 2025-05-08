<template>
  <section class="todo-section">
    <h2>📝 To-Do List</h2>
    <form @submit.prevent="addTask">
      <input v-model="newTask" placeholder="What needs doing?" />
      <button type="submit">Add</button>
    </form>

    <ul class="todo-list">
      <li v-for="(task, index) in tasks" :key="index">
        <input type="checkbox" v-model="task.done" />
        <span :class="{ done: task.done }">{{ task.text }}</span>
        <button @click="removeTask(index)">✖</button>
      </li>
    </ul>

    <button @click="clearTasks" class="reset-btn">Finish This Day</button>
  </section>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const STORAGE_KEY = 'grumpy-todolist'

const tasks = ref([])
const newTask = ref('')

onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) tasks.value = JSON.parse(saved)
})

watch(
  tasks,
  () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks.value))
  },
  { deep: true },
)

function addTask() {
  if (!newTask.value.trim()) return
  tasks.value.push({ text: newTask.value.trim(), done: false })
  newTask.value = ''
}

function removeTask(index) {
  tasks.value.splice(index, 1)
}

function clearTasks() {
  tasks.value = []
}
</script>

<style scoped>
.todo-section {
  padding: 1rem;
  background: #fefefe;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
}
.todo-list {
  list-style: none;
  padding: 0;
}
.todo-list li {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
.todo-list input[type='checkbox'] {
  margin-right: 0.5rem;
}
.todo-list span.done {
  text-decoration: line-through;
  color: #999;
}
.reset-btn {
  margin-top: 1rem;
  background: #eab308;
  border: none;
  padding: 0.5rem 1rem;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}
</style>
