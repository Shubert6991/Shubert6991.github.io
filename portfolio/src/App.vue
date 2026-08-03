<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import './style.css'
</script>

<template>
  <div class="ctp-base">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>
