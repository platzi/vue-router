<script setup>
</script>

<template>
  <div>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link to="/session">Session</router-link>
    <router-link to="/chats">Chats</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
  </div>
  <router-view/>
</template>

<style></style>
