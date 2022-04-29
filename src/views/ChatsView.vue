<template>
  <div>
    <aside>
      <div v-for="chat in chats" :key="chat.id">
        <router-link :to="`/chats/${chat.id}`">
          {{ chat.name }}
        </router-link>
      </div>
    </aside>
    <article>
      <router-view />
    </article>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const chats = ref()

const route = useRoute()

watch(
  () => route.params,
  (val) => {
  console.log('update params', val)
  chats.value = [
    { id: 1, name: 'Ximena' },
    { id: 2, name: 'Daniel' },
    { id: 3, name: 'Miguel' }
  ]
}, {
  immediate: true
})
</script>