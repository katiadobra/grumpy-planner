/* eslint-disable rule-name */ /* Project Structure: - App.vue - components - Checklist.vue -
TodoList.vue - MoodForecast.vue - Catastrophizer.vue - EmergencyReset.vue - AppHeader.vue -
AppFooter.vue Core logic: localStorage-based persistence, component-based layout, reset/day-complete
button */ /* eslint-enable rule-name */

<template>
  <main class="bg-[#FCF9F5] min-h-screen font-sans text-[#1F1F1F]">
    <AppHeader />

    <section class="max-w-2xl mx-auto px-4 py-6">
      <CheckList />
      <TodoList />
      <MoodForecast />
      <Catastrophizer />
      <EmergencyReset />
      <div class="text-center mt-10">
        <button @click="resetAll" class="bg-[#204ECF] text-white px-6 py-3 rounded-md text-lg">
          Finish This Day
        </button>
      </div>
    </section>

    <AppFooter />
  </main>
</template>

<script>
import CheckList from './components/Checklist.vue'
import TodoList from './components/TodoList.vue'
import MoodForecast from './components/MoodForecast.vue'
import Catastrophizer from './components/CatastrophizerView.vue'
import EmergencyReset from './components/EmergencyReset.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    CheckList,
    TodoList,
    MoodForecast,
    Catastrophizer,
    EmergencyReset,
    AppHeader,
    AppFooter,
  },
  methods: {
    resetAll() {
      localStorage.clear()
      location.reload()
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Playfair+Display:wght@700&display=swap');
body {
  font-family: 'Inter', sans-serif;
}
</style>
