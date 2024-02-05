<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<script setup>
import Navbar from '@/components/layout/NavbarSection.vue'
import Footer from '@/components/layout/FooterSection.vue'
</script>
