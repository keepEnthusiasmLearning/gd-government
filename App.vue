<template>
  <v-app>
    <router-view #="{ Component }">
      <component :is="Component" />
    </router-view>    
  <Footer />
  </v-app>
</template>
<script setup lang="ts">
  import Footer from '@/components/footer.vue'  
</script>
