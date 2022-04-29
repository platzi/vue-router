<template>
  <div v-for="msg in messagesFiltered" :key="msg.id">
    {{ msg.text }}
  </div>
</template>

<script>
export default {
  props: {
    chatId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      messages: [
        { id: 1, text: 'Mensaje 1', author: 1 },
        { id: 2, text: 'Mensaje 2', author: 2 },
        { id: 3, text: 'Mensaje 3', author: 3 },
      ]
    }
  },
  computed: {
    messagesFiltered() {
      return this.messages.filter((msg) => {
        return `${msg.author}` === this.chatId
      })
    }
  }
}
</script>