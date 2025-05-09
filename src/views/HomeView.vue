<template>
  <section class="home">
    <h1 class="home-title">Grumpy<br />Anxious<br />Planner</h1>
    <div class="cat-bubble-wrapper">
      <img
        src="/img/cat-bath.png"
        alt="grumpy cat in bath"
        class="cat-clickable"
        @click="generateBathWisdom"
      />
      <div
        v-if="bathQuote"
        class="bubble"
        :style="{ top: bubblePos.top + 'px', left: bubblePos.left + 'px' }"
      >
        {{ bathQuote }}
      </div>
    </div>

    <h3 class="home-subtitle">
      This planner is best filled while <br />in the bath. Mentally or literally
    </h3>
    <h3 class="home-subtitle">Anxious, but hydrated.<br />Grumpy, but bathed.</h3>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const bathQuote = ref('')
const bubblePos = ref({ top: -40, left: 120 }) // стартова позиція

const bathWisdoms = [
  'Submerge your expectations, not just your body.',
  'You can’t overthink underwater. Try it.',
  'Wash the dread. Rinse. Repeat.',
  'Hot water, soft silence, no notifications.',
  'Floating is still moving. Slowly.',
  'You are 70% water. Reunite with your people.',
  'This bath is not procrastination. It’s preservation.',
  'Let the bubbles handle it for now.',
  'Cancel your evening. Soak in instead.',
  'No one can email you in the tub. Legally.',
]

function generateBathWisdom() {
  const index = Math.floor(Math.random() * bathWisdoms.length)
  bathQuote.value = bathWisdoms[index]

  // Рандомізуємо позицію в межах розумного
  const top = Math.floor(Math.random() * 100) - 50 // між -50 і 50
  const left = Math.floor(Math.random() * 140) + 60 // між 60 і 200

  bubblePos.value = { top, left }
}
</script>

<style scoped>
.home-title {
  font-size: 3.5rem;
}
.home-subtitle {
  font-size: 1.25rem;
  text-transform: uppercase;
}

.hero-cat {
  max-width: 300px;
  margin: 1rem auto;
  display: block;
}
.home {
  text-align: center;
  color: #121888;
  background: #f2dcde;
  padding: 2rem;
  ul {
    margin-top: 1rem;
    padding: 0;
    list-style: none;
  }
  li {
    margin: 0.5rem 0;
  }
}
.cat-bubble-wrapper {
  position: relative;
  display: inline-block;
  text-align: center;
}

.cat-clickable {
  max-width: 300px;
  cursor: pointer;
  transition: transform 0.2s ease;
}
.cat-clickable:hover {
  transform: scale(1.03);
}

.bubble {
  z-index: 1;
  position: absolute;
  top: -2rem;
  left: 50%;
  transform: translateX(-50%);
  background: #fdf6f0;
  padding: 1rem;
  border-radius: 1.5rem;
  border: 2px solid #ccc;
  max-width: 280px;
  font-style: italic;
  font-size: 0.9rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
