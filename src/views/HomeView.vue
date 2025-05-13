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
        v-for="bubble in bubbles"
        :key="bubble.id"
        class="bubble"
        :style="{ top: bubble.top + 'px', left: bubble.left + 'px' }"
      >
        {{ bubble.text }}
      </div>
    </div>

    <h3 class="home-subtitle">
      This planner is best filled while <br />in the bath. Mentally or literally
    </h3>
    <h3 class="home-subtitle">Anxious, but hydrated.<br />Grumpy, but bathed.</h3>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const bubbles = ref([])

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
function spawnBubble() {
  const isMini = Math.random() < 0.3 // 30% шанс на emoji-only

  const text = isMini ? '🫧' : bathWisdoms[Math.floor(Math.random() * bathWisdoms.length)]

  const id = Date.now() + Math.random()
  const top = Math.random() * 100 - 40
  const left = Math.random() * 200 + 50

  bubbles.value.push({ id, text, top, left })

  setTimeout(() => {
    bubbles.value = bubbles.value.filter((b) => b.id !== id)
  }, 9000)
}

onMounted(() => {
  setInterval(spawnBubble, 5000) // every 5s
})
</script>

<style scoped>
.home-title {
  font-size: 3.5rem;
  margin-bottom: 0;
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
  color: #045e66;
  background: #ffd4bb;
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
  margin-top: 2rem;
}

.cat-clickable {
  max-width: 300px;
  display: block;
  margin: auto;
}

.bubble {
  position: absolute;
  width: 120px;
  height: 120px;
  background: rgba(255, 255, 255, 0.35);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-style: italic;
  font-size: 0.75rem;
  backdrop-filter: blur(4px);
  pointer-events: none;
  animation: floatUp 9s ease forwards;
  opacity: 0;
  padding: 0.5rem;
}

@keyframes floatUp {
  0% {
    opacity: 0;
    transform: scale(0.3) translateY(0px);
  }
  15% {
    opacity: 1;
    transform: scale(0.4) translateY(-20px);
  }
  30% {
    opacity: 1;
    transform: scale(0.6) translateY(-35px);
  }
  50% {
    transform: scale(1) translateY(-50px);
  }
  70% {
    transform: scale(1.1) translateY(-70px);
  }
  100% {
    opacity: 0;
    transform: scale(1.25) translateY(-90px);
  }
}

.bubble:only-child {
  animation: fadePopBig 9s ease forwards;
}

@keyframes fadePopBig {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  20% {
    transform: scale(1.05);
    opacity: 1;
  }
  80% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}
</style>
