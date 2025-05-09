<template>
  <div class="app">
    <header>
      <h1>Grumpy Anxious Planner</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/planner">Planner</RouterLink>
        <RouterLink to="/forecast">Forecast</RouterLink>
        <RouterLink to="/catastrophizer">🐈astrophizer</RouterLink>
        <RouterLink to="/reset">Reset</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}
nav a {
  text-decoration: none;
  color: #204ecf;
  font-weight: bold;
}
nav a.router-link-active {
  text-decoration: underline;
}
</style>
