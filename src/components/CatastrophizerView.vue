<template>
  <section class="astro">
    <h2>Catastrophizer</h2>
    <p>Organize your spirals. Gently.</p>

    <form @submit.prevent="addEntry">
      <div class="entry">
        <input v-model="newFear" placeholder="What I think will happen..." />
        <input v-model="newReality" placeholder="...what will probably happen" />
        <button type="submit">Add</button>
      </div>
    </form>

    <ul class="entries">
      <li v-for="(entry, index) in fears" :key="index">
        <div class="text">
          <span class="fear">😱 {{ entry.fear }}</span>
          <span class="reality">→ {{ entry.reality || '90% chance nothing' }}</span>
        </div>
        <button @click="removeEntry(index)">✖</button>
      </li>
    </ul>
  </section>
</template>

/** @TODO: Evidence Against My Brain (we will also make a section “what has already happened and was
not a disaster” — for real experience that destroys scary scenarios) */

<script setup>
import { ref, watch, onMounted } from 'vue'

const STORAGE_KEY = 'grumpy-catastrophizer'
const fears = ref([])
const newFear = ref('')
const newReality = ref('')

const fallbackRealities = [
  '90% chance nothing',
  "Probably nothing. You're just tired.",
  'It will pass. Like last time.',
  "Might be awkward. You'll survive.",
  'Nobody noticed. Literally nobody.',
  "They won't remember it tomorrow.",
  "You'll laugh at this in a week. Maybe.",
  "You are catastrophizing. And that's okay.",
  "You've survived worse. With less sleep.",
  "You're imagining a movie. This is real life, and it's quieter.",
  'That outcome requires 12 unlikely things. Chill.',
  "You're not a mind reader. Stop casting yourself in their disappointment.",
  "If it happens, you'll deal with it. You always do.",
  'This is just your brain trying to protect you. Badly.',
  "They're probably too busy overthinking their own thing.",
  "Even if it's weird, it's not the end. It's just Tuesday.",
  "You're not behind. You're just not sprinting.",
  'That feeling? Temporary. Like pop-up ads.',
  "You don't need to solve it right now. Or at all.",
]

onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) fears.value = JSON.parse(saved)
})

watch(
  fears,
  () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fears.value))
  },
  { deep: true },
)

function addEntry() {
  if (!newFear.value.trim()) return
  const randomReality = fallbackRealities[Math.floor(Math.random() * fallbackRealities.length)]

  fears.value.push({
    fear: newFear.value.trim(),
    reality: newReality.value.trim() || randomReality,
  })
  newFear.value = ''
  newReality.value = ''
}

function removeEntry(index) {
  fears.value.splice(index, 1)
}
</script>

<style scoped>
.astro {
  padding: 1rem;
  background: #fdf6f0;
  border-radius: 0.5rem;
}
.entry input {
  margin: 0.5rem 0.5rem 0.5rem 0;
  padding: 0.5rem;
}
.entries {
  list-style: none;
  padding: 0;
}
.entries li {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text {
  max-width: 80%;
}
.fear {
  font-weight: bold;
  color: #b91c1c;
}
.reality {
  color: #475569;
  margin-left: 0.5rem;
}
</style>
