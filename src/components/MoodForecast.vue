<template>
  <section class="mood-forecast">
    <h2>🌥 Mood Forecast <span class="grump">😾</span></h2>
    <p>This is not science. It’s just vibes.</p>

    <ul class="mood-week">
      <li v-for="(day, index) in week" :key="index">
        <label>
          <span>{{ day.name }}</span>
          <select v-model="day.mood">
            <option disabled value="">-- select a mood --</option>
            <option v-for="m in moods" :key="m.icon">{{ m.icon }} {{ m.label }}</option>
          </select>
        </label>
      </li>
    </ul>

    <div class="cat-wrapper">
      <img :src="moodCat" alt="grumpy cat" class="cat-img" />
      <p class="cat-caption">Grumpy Mood Avatar™</p>
    </div>
  </section>
</template>

<script setup>
import { reactive, computed, onMounted, watch } from 'vue'

const STORAGE_KEY = 'grumpy-mood-forecast'

const week = reactive([
  { name: 'Mon', mood: '' },
  { name: 'Tue', mood: '' },
  { name: 'Wed', mood: '' },
  { name: 'Thu', mood: '' },
  { name: 'Fri', mood: '' },
  { name: 'Sat', mood: '' },
  { name: 'Sun', mood: '' },
])

const moods = [
  { icon: '🌥', label: 'meh with a chance of tears' },
  { icon: '😵‍💫', label: 'spinning internally' },
  { icon: '😐', label: 'emotionally neutralized' },
  { icon: '🧃', label: 'low energy juicebox' },
  { icon: '🔥', label: 'chaotic but functional' },
  { icon: '💤', label: 'everything is optional' },
  { icon: '🌈', label: '??!? feeling suspiciously okay' },
]

onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    const data = JSON.parse(saved)
    data.forEach((entry, i) => {
      week[i].mood = entry.mood
    })
  }
})

watch(
  week,
  () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(week))
  },
  { deep: true },
)

const moodCat = computed(() => {
  const selected = [...week].reverse().find((d) => d.mood)
  if (!selected) return '/img/cat-neutral.png'

  if (selected.mood.includes('🌥')) return '/img/cat-meh.png'
  if (selected.mood.includes('😵‍💫')) return '/img/cat-dizzy.png'
  if (selected.mood.includes('😐')) return '/img/cat-neutral.png'
  if (selected.mood.includes('🧃')) return '/img/cat-juice.png'
  if (selected.mood.includes('🔥')) return '/img/cat-chaos.png'
  if (selected.mood.includes('💤')) return '/img/cat-sleepy.png'
  if (selected.mood.includes('🌈')) return '/img/cat-rainbow.png'

  return '/img/cat-neutral.png'
})
</script>

<style scoped>
.mood-forecast {
  padding: 1rem;
  background: #fcfafa;
  border: 1px solid #e2e2e2;
  border-radius: 0.5rem;
  max-width: 600px;
  margin: 2rem auto;
  text-align: center;
}
.mood-week {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}
.mood-week li {
  margin: 0.5rem 0;
}
label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
select {
  padding: 0.4rem;
  font-size: 1rem;
  border-radius: 0.3rem;
}
.cat-wrapper {
  margin-top: 1.5rem;
}
.cat-img {
  width: 150px;
  height: auto;
  border-radius: 0.5rem;
}
.cat-caption {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #555;
}
.grump {
  font-size: 1.5rem;
  margin-left: 0.25rem;
}
</style>
