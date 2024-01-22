<template>
  <section id="rating" class="rating">
  <v-container>
    <a class="header-1 text-white" href=" ">
      <span>政务服务好差评</span>
      <v-icon icon="mdi-arrow-right-thick" size="x-small" end></v-icon>
    </a>      
    <!-- content -->
    <v-row class="rating__content mt-6">
      <v-col v-for="rating in ratingData" cols="6" lg="3">
        <div  class="rating-item" :class="mdAndDown ? 'ma-n3' : undefined" >
          <a class="rating-item-tip" href=" ">{{rating.title}}</a>        
          <div class="rating-item-data">
            <a href=" ">{{rating.value}}</a>{{rating.unit}}
            <v-rating class="rating-star" v-if="rating.rate" v-model="ratingModel" color="orange" size="24" readonly></v-rating>
          </div>          
        </div>
      </v-col>
    </v-row>
  </v-container>  
  </section>  
</template>
<script setup>
  import { request } from '@/util/request';
  import { ref } from 'vue'  
  import { useDisplay } from 'vuetify';
  const { mdAndDown } = useDisplay()   
  const ratingModel = ref() 
  const ratingData = ref()
  const getRating = async () => {
    await request({ url: '/mock/rating', methods: 'get'})
    .then((res) => { 
      ratingData.value = res 
    })
    .catch((err) => {console.log(err)})
  }
  getRating()  
</script>
<style lang="sass">
@import "@/styles/variable"

.rating
  margin: 3.2rem 0 0
  padding: 2.8rem 0 3.2rem
  width: 100%
  background-image: url(https://www.gdzwfw.gov.cn/portal/index-assets/img/bg-rate.d8e7ac6.jpg)
  background-size: 100%
  background-size: 100% 100%
  background-position: 50%

  &__content
    display: flex
    align-items: center
    justify-content: space-between
    @media screen and (max-width: 1279px)
      >
        :nth-child(1)
          border-right: 1px solid #e1e4e8
        :nth-child(2)
          border-bottom: 1px solid #e1e4e8      
        :nth-child(3)
          border-top: 1px solid #e1e4e8
        :nth-child(4)
          border-left: 1px solid #e1e4e8
  &-star
    vertical-align: bottom
    padding-bottom: 6px
  &-item
    background: hsla(0,0%,100%,.15)
    padding: 1.5rem 1.3rem 1.5rem 1.4rem !important
    color: white 
    &-tip
      font-size: $body-1-font-size
      line-height: $body-1-line-height
      color: inherit
    &-data
      font-size: $body-1-font-size
      line-height: $body-1-line-height
      color: inherit
      margin-top: .8rem
      white-space: nowrap
      a
        font-size: 2.4rem
        line-height: 2.8rem
        color: inherit
        margin-right: .3rem
        &:hover
          color: rgb(var(--v-theme-primary))  
</style>