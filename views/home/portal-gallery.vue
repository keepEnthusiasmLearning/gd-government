<template>
  <section id="portalGallery" class="portalGallery">

    <a class="header-1" href=" ">
      <span>特色创新</span>
      <v-icon icon="mdi-arrow-right-thick" size="x-small" end></v-icon>
    </a>      
    <!-- content -->
    <v-slide-group class="mt-6" v-model="galleryModel">
      <template v-slot:next><v-btn icon='mdi-chevron-right'></v-btn></template>
      <template v-slot:prev><v-btn icon='mdi-chevron-left'></v-btn></template>      
      <v-slide-group-item v-for='gallery in gallerys' v-slot='{ isSelected, toggle, selectedClass }'>
        <v-hover><template v-slot:default="{ isHovering, props }">
        <v-card 
          class="gallery" 
          :class="isHovering ? 'bg-primary bg-hover' : undefined"
          :href="gallery.href"
          v-bind="props"
          elevation="2"
          :width="xs ? 460 : 280" 
          rounded="0" 
        >
          <v-img cover :src="gallery.src" :alt="gallery.title">
            <v-chip 
              v-if="gallery.chip" 
              class="ma-2 float-right"
              color="red" 
              variant="flat" 
              size="small" 
            >{{gallery.chip}}</v-chip>
          </v-img>
          <v-card-item>
            <div 
              class="gallery-title" 
              :class="isHovering ? 'text-white' : undefined"
            >
              {{gallery.title}}
            </div>
            <div 
              class="gallery-text" 
              :class="isHovering ? 'text-white' : undefined"
            >
              {{gallery.text}}
            </div>
          </v-card-item>
        </v-card>
        </template></v-hover>
      </v-slide-group-item>
    </v-slide-group>
  </section>
</template>
<script setup>
    import { request } from '@/util/request';
    import { ref } from 'vue'
    import { useDisplay } from 'vuetify'

    const { xs } = useDisplay()
    const gallerys = ref()
    const galleryModel = ref()
    const getGallerys = async () => {
     await request({ url: '/mock/portal/gallerys', methods: 'get'})
    .then((res) => { 
      gallerys.value = res 
    })
    .catch((err) => {console.log(err)})
    }
    getGallerys()
</script>
<style lang="sass" scoped>
@import "@/styles/variable"  
.portalGallery
  padding: 2rem 0 0
  .gallery
    margin-right: 24px
    margin-bottom: 4px
    transition: all .3s ease !important
    &-title
      font-size: $header-6-font-size !important
      font-weight: $header-font-weight !important
      line-height: $header-6-line-height !important
      letter-spacing: normal
      font-family: $body-font-family
      text-transform: none
      display: block      
      overflow: hidden
      text-overflow: ellipsis
      text-align: left
      color: $header-color
    &-text
      font-size: $body-1-font-size !important
      font-weight: normal
      line-height: $body-1-line-height !important
      letter-spacing: normal
      font-family: $body-font-family
      text-transform: none
      display: -webkit-box
      -webkit-box-orient: vertical
      -webkit-line-clamp: 2
      overflow: hidden
      text-overflow: ellipsis
      text-align: left
      height: auto
      color: $body-2-color
</style>