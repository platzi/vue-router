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

<script>
export default {
  data() {
    return {
      chats: [
        { id: 1, name: 'Ximena' },
        { id: 2, name: 'Daniel' },
        { id: 3, name: 'Miguel' }
      ]
    }
  }
}
</script>