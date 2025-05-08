<template>
  <div class="bg-[#F8F2EC] border-l-4 border-[#FFB85F] rounded-lg p-4 mb-6">
    <h2 class="text-xl font-bold mb-3">✅ Bare Minimum Achievements</h2>
    <ul>
      <li v-for="(item, index) in items" :key="index" class="flex items-center gap-2 mb-2">
        <input type="checkbox" v-model="item.done" @change="save" />
        <span :class="{ 'line-through text-gray-400': item.done }">{{ item.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CheckList',
  data() {
    return {
      items: [
        { text: 'Drank water (or at least thought about it)', done: false },
        { text: 'Got out of bed (physically or spiritually)', done: false },
        { text: 'Answered one message like a functioning person', done: false },
        { text: 'Stepped outside (no matter how briefly)', done: false },
        { text: 'Refrained from rolling eyes obviously', done: false },
      ],
    }
  },
  mounted() {
    const saved = localStorage.getItem('grumpy-checklist')
    if (saved) {
      this.items = JSON.parse(saved)
    }
  },
  methods: {
    save() {
      localStorage.setItem('grumpy-checklist', JSON.stringify(this.items))
    },
  },
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>
