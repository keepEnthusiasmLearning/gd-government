<template>
  <section id="news" class="news">
  <v-container>
    <a class="header-1" href=" ">
      <span>政策新闻</span>
      <v-icon icon="mdi-arrow-right-thick" size="x-small" end></v-icon>
    </a>      
    <!-- content -->
    <v-row>        
      <v-col v-for="news in newsData" cols="12" lg="4">
        <v-hover><template v-slot:default="{ isHovering, props }">
        <div class="news-item" v-bind="props" :class="isHovering ? 'bg-primary bg-hover' : undefined">
          <div class="news-item-title" :class="isHovering ? 'text-white' : undefined">{{news.title}}</div>
          <div class="news-item-text" :class="isHovering ? 'text-white' : undefined">{{news.text}}</div>
          <div class="news-item-date" :class="isHovering ? 'text-white' : undefined">{{news.date}}</div>                
        </div>
        </template></v-hover>
      </v-col>
    </v-row>
  </v-container>
  </section>
</template>
<script setup>
  import { request } from '@/util/request';
  import { ref } from 'vue'  
  const newsData = ref()
  const getNews = async () => {
    await request({ url: '/mock/news', methods: 'get'})
    .then((res) => { 
      newsData.value = res 
    })
    .catch((err) => {console.log(err)})
  }
  getNews()  
</script>
<style lang="sass">
@import "@/styles/variable"
.news
  margin-top: 2.5rem
  &-item
    display: block
    height: 12rem
    padding: 1.75rem 1.75rem 2rem 2rem
    margin-top: 1.2rem
    background-color: #fff
    transition: all .3s ease
    box-shadow: 0 0 1.5rem rgba(9,41,77,.12)
    cursor: pointer
    transition: all .3s ease !important
    &-title
      font-size: $header-6-font-size !important
      font-weight: $header-font-weight !important 
      line-height: $header-6-line-height !important
      font-family: $body-font-family
      letter-spacing: normal
      text-transform: none
      margin-bottom: .7rem
      color: $header-color    
      overflow: hidden
      text-overflow: ellipsis
      display: -webkit-box
      -webkit-line-clamp: 2
      -webkit-box-orient: vertical
    &-text
      font-size: $body-2-font-size !important
      line-height: $body-2-line-height !important
      font-family: $body-font-family
      letter-spacing: normal
      text-transform: none
      color: $body-1-color
      margin-bottom: 1.9rem
      height: 2.2rem
    &-date
      font-size: $body-2-font-size
      color: $body-2-color
      white-space: nowrap  
</style>