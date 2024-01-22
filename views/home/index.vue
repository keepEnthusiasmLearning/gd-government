<template>
  <Header />
  <ServiceField /> 
  <v-container>
    <PortalGallery />
    <PortalPerson />
    <PortalKstb v-if="name !== 'xs'" />
  </v-container>
  <Rating />  
  <News />
</template>
<script setup>
import Header from '@/components/header.vue'
import ServiceField from './service-field.vue'
import PortalGallery from './portal-gallery.vue'
import PortalPerson from './portal-person.vue'
import PortalKstb from './portal-kstb.vue'
import Rating from './rating.vue'
import News from './news.vue'
import { useDisplay } from "vuetify"
const {name} = useDisplay()
</script>