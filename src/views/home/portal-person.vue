<template>
  <section id="portalPerson" class="portalPerson">
    <v-tabs 
      v-model="state.model" 
      slider-color="primary"
      color="primary" 
      height="64" 
      mandatory
    >
      <v-tab class="header-1" key="personal" value="personal">个人服务</v-tab>
      <v-tab class="header-1" key="legal" value="legal">法人服务</v-tab>
    </v-tabs>
    <a class="header-2 mt-6" href="/">
      <span>热门服务</span>
      <v-icon icon="mdi-arrow-right-thick" size="x-small" end></v-icon>
    </a>
    <v-window v-model="state.model" mandatory>
      <v-window-item key="personal" value="personal">
        <!--  -->
        <v-row>
          <v-col class="mt-6" v-for="service in state.person.service" cols="6" lg="3">
            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <v-sheet 
                  class="service-box" 
                  :class="isHovering ? 'bg-primary-darken-1 bg-hover' : undefined" 
                  v-bind="props"
                >
                  <v-icon class="float-left" :icon="service.icon" color="primary" size="48"></v-icon>
                  <div class="service-right">
                    <a class="service-title" href=" ">{{service.title}}</a>
                    <div class="mt-2">
                      <a class="service-text" href=" " v-for="link in service.links">{{link}}</a>
                    </div>
                  </div>
                </v-sheet>                
              </template>
            </v-hover>
          </v-col>
        </v-row>
        <!--  -->
        <div class="process">
          <a class="header-2" href=" ">
            <span>人生事件</span><v-icon icon="mdi-arrow-right-thick" size="x-small" end></v-icon>
          </a>
          <div class="process-item" v-for="event in state.person.life_event">
            <div class="process-item__line"></div>
            <a class="process-item__text" href=" ">{{ event }}</a>
          </div>
          <div class="process-item"><div class="process-item__line"></div></div>
        </div>
      </v-window-item>
      <v-window-item key="legal" value="legal">
        <!--  -->
        <v-row>
          <v-col class="mt-6"  v-for="service in state.legal.service" cols="6" lg="3">
            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <v-sheet 
                  class="service-box" 
                  :class="isHovering ? 'bg-primary-darken-1 bg-hover' : undefined" 
                  v-bind="props"
                >
                  <v-icon class="float-left" :icon="service.icon" color="primary" size="48"></v-icon>
                  <div class="service-right">
                    <a class="service-title" href=" ">{{service.title}}</a>
                    <div class="mt-2"><a class="service-text" href=" " v-for="link in service.links">{{link}}</a></div>
                  </div>
                </v-sheet>                
              </template>
            </v-hover>            
          </v-col>          
        </v-row>
        <!--  -->
        <div class="process">
          <a class="header-2" href=" ">
            <span>企业历程</span><v-icon icon="mdi-arrow-right-thick" size="x-small" end></v-icon>
          </a>
          <div class="process-item" v-for="history in state.legal.enterprise_history">
            <div class="process-item__line"></div>
            <a class="process-item__text" href=" ">{{ history }}</a>
          </div>
          <div class="process-item"><div class="process-item__line"></div></div>
        </div>        
      </v-window-item>
    </v-window>    
  </section>  
</template>
<script setup>
    import { request } from '@/util/request';
    import { reactive } from 'vue'
    const state = reactive({
      model: 'personal',
      person: {
        service: [],
        life_event: [],
      },
      legal: {
        service: [],
        enterprise_history: [],        
      }
    })
    const getPerson = async () => {
      const { service, life_event } = await request({ url: '/mock/portal/person', methods: 'get'});
      state.person.service = service;
      state.person.life_event = life_event;
    }
    getPerson()

    const getLegal = async () => {
      const { service, enterprise_history } = await request({ url: '/mock/portal/legal', methods: 'get'});
      state.legal.service = service;
      state.legal.enterprise_history = enterprise_history;
    }
    getLegal()
</script>
<style lang="sass" scoped>
  @import "@/styles/variable"
  .portalPerson
    padding-top: 1rem
    .service
      &-box
        width: 13.8rem
        height: 8.8rem
        padding: 1rem .8rem
        cursor: pointer
        transition: all .3s ease
      &-right
        margin-left: 64px
      &-title
        font-size: $header-6-font-size !important
        font-weight: $header-font-weight !important
        line-height: $header-6-line-height !important
        letter-spacing: normal
        font-family: $body-font-family
        text-transform: none
        display: block      
        text-align: baseline
        color: $header-color
      &-text
        display: block
        font-size: $body-1-font-size !important
        font-weight: normal
        line-height: normal
        letter-spacing: normal
        font-family: $body-font-family
        text-transform: none
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
        color: $body-1-color
        width: auto
        margin-top: .4rem
        &:hover
          text-decoration: underline
    .process
      display: flex
      padding-top: 40px
      padding-bottom: 56px  
      align-items: center
      justify-content: flex-start
      flex-wrap: wrap
      position: relative
      z-index: 10
      &-item
        display: flex
        align-items: center
        justify-content: flex-start
        flex-wrap: wrap
        @media screen and (max-width: 1279px)
          margin-top: 1rem
        &__line
          width: 1.4rem
          overflow: hidden
          margin: 0 auto
          height: .05rem
          border: .05rem #ccc
          border-style: dashed
        &:nth-child(2)
          .process-item__line
            width: 3rem
            margin-left: .4rem
            @media screen and (max-width: 1279px)
              width: 1.6rem
              margin-left: 0
        &:last-child
          .process-item__line
            width: 2.6rem
            @media screen and (max-width: 1279px)
              width: 1.6rem
        &__text
          font-size: $body-1-font-size !important
          font-weight: normal
          line-height: $body-1-line-height !important
          letter-spacing: normal
          font-family: $body-font-family
          text-transform: none
          color: $header-color
          align-items: center
          cursor: pointer
          padding: .6rem 1.1rem
          background: #fff
          box-shadow: 0 0 1.5rem 0 rgba(9,41,77,.12)
          border-radius: 1.2rem
          display: flex
          align-items: center
          &:before
            content: " "
            width: 8px
            height: 8px
            background: rgb(var(--v-theme-primary))      
            border-radius: 50%
            margin-right: 12px
          &:hover
            color: rgb(var(--v-theme-primary))  
</style>