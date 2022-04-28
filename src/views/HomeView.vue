<script>
export default {
  data() {
    return {
      username: ''
    }
  }
}
</script>

<template>
  <main>
    <h3>Introduce tu nombre de usuario</h3>
    <input placeholder="username" v-model="username" />
  </main>
</template>
