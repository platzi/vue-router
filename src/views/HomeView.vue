<script>
export default {
  data() {
    return {
      username: ''
    }
  },
  methods: {
    iniciar() {
      this.$router.go(-1)
    }
  }
}
</script>

<template>
  <main>
    <h3>Introduce tu nombre de usuario</h3>
    <input placeholder="username" v-model="username" />
    <button @click="iniciar">Iniciar sesion</button>
  </main>
</template>
