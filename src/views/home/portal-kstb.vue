<template>
  <section id="kstb" class="kstb">
    <v-tabs v-model="state.model" color="primary" slider-color="primary" height="64"  mandatory>
      <v-tab class="header-1" key="across_handle" value="across_handle">跨域通办</v-tab>
      <v-tab class="header-1" key="business_environment" value="business_environment">营商环境</v-tab>
      <v-tab class="header-1" key="convenient_service" value="convenient_service">便民服务</v-tab>
    </v-tabs>
    <!-- content -->
    <v-window class="kstb__content mt-6" v-model="state.model" mandatory>
      <v-window-item key="across_handle" value="across_handle">
        <!-- LeftBox -->
        <v-hover><template v-slot:default="{ isHovering, props }">
        <v-list 
          @click="onSkip('https://qykb.gdzwfw.gov.cn/qcdzhdj/', true)"
          class="kstb-leftbox" 
          :class="isHovering ? 'bg-primary bg-hover' : undefined"
          v-bind="props"
          lines="three"
          width="14rem"
        >
          <v-list-subheader class="kstb-leftbox-title" :class="isHovering ? 'text-white' : 'text-header-color'" >省内跨市通办<v-icon icon="mdi-arrow-right-thick" size="x-small" end></v-icon></v-list-subheader>
          <v-list-item :class="isHovering ? 'text-white' : 'text-body-1-color'">
            <v-icon icon="mdi-check-circle-outline" size="x-small" :color="isHovering ? 'white' : 'green'"></v-icon><br>
            <v-list-item-title class="kstb-leftbox-text font-weight-black">高频服务事项省内“一网通办”</v-list-item-title>
            <v-list-item-subtitle class="kstb-leftbox-text">已实现数据共享、业务系统、线上线下融合</v-list-item-subtitle>
          </v-list-item>
          <v-list-item :class="isHovering ? 'text-white' : 'text-body-1-color'">
            <v-icon icon="mdi-check-circle-outline" size="x-small" :color="isHovering ? 'white' : 'green'"></v-icon><br>
            <v-list-item-title class="kstb-leftbox-text font-weight-black">省内通办事项在线查询办理</v-list-item-title>
            <v-list-item-subtitle class="kstb-leftbox-text">已聚合全省各地市特色通办专栏</v-list-item-subtitle>
          </v-list-item>
        </v-list>
        </template></v-hover>
        <!-- RightBox -->
        <v-sheet class="kstb-rightbox px-8">
          <a class="header-2" href=" ">
            <span>跨省通办</span>
            <v-icon icon="mdi-arrow-right-thick" size="x-small" end></v-icon>
          </a>      
          <v-tabs v-model="state.acrossHandleModel" color="primary" slider-color="primary" mandatory>
            <v-tab class="kstb-rightbox-tab" v-for="(item, i) in state.across_handle" :key="i" :value="i">{{item.tab}}</v-tab>
          </v-tabs>          
          <v-window class="mt-6" v-model="state.acrossHandleModel" mandatory>
            <v-window-item v-for="(item, i) in state.across_handle" :key="i" :value="i">
              <v-img class="float-left" :src="item.src" width="14rem"></v-img>
              <div class="kstb-rightbox-info"><template v-for="(link, i) in item.links">
                <p v-if="i === 0"><a class="kstb-rightbox-info-title" href=" ">{{link}}</a></p>
                <p v-else-if="i === 1" class="my-1"><a class="kstb-rightbox-info-subtitle my-2" href="">以 <span class="font-weight-bold">{{link}}</span> 为例</a></p>
                <p v-else><a class="kstb-rightbox-info-text" href=" ">{{link}}</a></p>
              </template></div>
            </v-window-item>
          </v-window>
        </v-sheet>
      </v-window-item>
      <!-- 营商环境 -->
      <v-window-item key="business_environment" value="business_environment">
        <!-- LeftBox -->
        <v-hover><template v-slot:default="{ isHovering, props }">
        <v-list
          class="kstb-leftbox" 
          :class="isHovering ? 'bg-primary bg-hover' : undefined"
          @click="onSkip('https://qykb.gdzwfw.gov.cn/qcdzhdj/', true)"
          v-bind="props"
          width="268"
        >
          <v-list-subheader class="kstb-leftbox-title" :class="isHovering ? 'text-white' : 'text-header-color'">
            {{ state.business_environment_left.title }}
            <v-icon icon="mdi-arrow-right-thick" size="x-small" end></v-icon>
          </v-list-subheader>
          <v-list-item 
            class="kstb-leftbox-text" 
            :class="isHovering ? 'text-white' : 'text-body-1-color'" 
            v-for="item in state.business_environment_left.items"
          >
          {{ item }}</v-list-item>
        </v-list>
        </template></v-hover>
        <!-- RightBox -->
        <v-sheet class="kstb-rightbox">
          <v-row  class="kstb-rightbox__content">
          <v-col class="kstb-rightbox-column" v-for="column in state.business_environment_right" cols="4">
            <v-list lines="one">           
              <v-list-item-title class="kstb-rightbox-column-title">{{ column.title }}<v-icon icon="mdi-arrow-right-thick" size="x-small" end></v-icon></v-list-item-title>
              <v-list-item-title v-for="item in column.items"><a class="kstb-rightbox-column-item" href=" ">{{ item }}</a></v-list-item-title>
            </v-list>
          </v-col>
        </v-row>
      </v-sheet>
      </v-window-item>
      <!-- 便民服务 -->
      <v-window-item key="convenient_service" value="convenient_service">
        <v-row>
        <v-col v-for="item in state.convenient_service" cols="3">
          <v-hover><template v-slot:default="{ isHovering, props }">
          <a class="kstb-convenient_service-item" :class="isHovering ? 'bg-primary bg-hover text-white' : undefined" v-bind="props" href="">{{item}}</a>
          </template></v-hover>
        </v-col>
      </v-row></v-window-item>
    </v-window>
  </section>  
</template>
<script setup>
    import { request } from '@/util/request';
    import { reactive } from 'vue'
    const state = reactive({
      model: 'across_handle',
      acrossHandleModel: 0,
      across_handle: [], 
      business_environment_left: [],
      business_environment_right: [],
      convenient_service: [] 
    })
    const getKstbData = async () => {
      const {
        across_handle, 
        business_environment, 
        convenient_service 
      } = await request({ url: '/mock/kstb', methods: 'get'});
      state.across_handle = across_handle;
      state.business_environment_left = business_environment[0];
      state.business_environment_right = business_environment.splice(1, 3)
      state.convenient_service = convenient_service;
    }
    getKstbData()
    function onSkip(href, self) {
      if (self) { open(href, '_self')
      } else { open(href) }
    } 
</script>
<style lang="sass" scoped>
  @import "@/styles/variable"
  .kstb
    margin: 3.2rem 0 0
    &__content
      height: 17.9rem
      padding: 8px
    &-leftbox
      display: block
      float: left
      padding-top: 24px !important
      box-sizing: border-box
      cursor: pointer
      box-shadow: 0 0 1.5rem 0 rgba(9,41,77,.12) !important
      transition: all .3s ease
      &-title
        font-size: $header-6-font-size !important
        font-weight: $header-font-weight !important 
        line-height: $header-6-line-height !important
        font-family: $body-font-family
        letter-spacing: normal
        text-transform: none
      &-text
        font-family: PingFangSC-Regular
        font-size: $body-1-font-size !important
        line-height: $body-1-line-height !important
    &-rightbox
      margin-left: 300px
      border: 1px solid #dfe1e2 !important
      overflow: hidden
      padding-top: 1.6rem
      padding-bottom: 1.6rem      
      &-tab
        font-size: $body-1-font-size !important
        font-weight: $header-font-weight !important 
        line-height: $body-1-line-height !important
        font-family: $body-font-family
        letter-spacing: normal
        text-transform: none
        &:hover
          color: rgb(var(--v-theme-primary)) !important
      &-column
        padding: 0 .8rem 1.5rem 1.6rem !important
        box-sizing: border-box
        position: relative
        &:before
          position: absolute
          content: ""
          height: 10.5rem
          border-left: 1px solid #dfe1e2
          left: 0
        &-title
          font-size: $header-6-font-size !important
          font-weight: $header-font-weight !important 
          line-height: $header-6-line-height !important
          font-family: $body-font-family
          letter-spacing: normal
          text-transform: none
          color: $header-color
          margin-bottom: 1.2rem
        &-item
          font-size: $body-1-font-size !important
          font-weight: normal 
          line-height: $body-1-line-height !important
          font-family: $body-font-family
          letter-spacing: normal
          text-transform: none
          color: $body-1-color
          margin-top: .8rem
          &:hover
            color: rgb(var(--v-theme-primary))
          &:before
            content: "●"
            margin-right: .5rem
      &-info
        margin-left: 15rem
        &-title
          font-size: $header-6-font-size !important
          font-weight: $header-font-weight !important
          line-height: $header-6-line-height !important
          letter-spacing: normal
          font-family: $body-font-family
          text-transform: none
          color: $header-color
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap        
        &-subtitle
          font-size: $body-1-font-size !important
          font-weight: normal
          line-height: normal
          letter-spacing: normal
          font-family: $body-font-family
          text-transform: none
          color: $header-color
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap        
        &-text
          font-size: $body-2-font-size !important
          font-weight: normal
          line-height: $body-2-line-height !important
          letter-spacing: normal
          font-family: $body-font-family
          text-transform: none
          color: $body-1-color
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 6
          -webkit-box-orient: vertical
    &-convenient_service
      &-item
        font-size: $body-1-font-size !important
        font-weight: normal
        line-height: 3rem
        letter-spacing: normal
        font-family: $body-font-family
        text-transform: none
        height: 3rem
        white-space: nowrap
        overflow: hidden
        transition: all .3s ease
        display: block
        text-overflow: ellipsis
        padding: 0 1rem
        color: $header-color
        background: #f1f2f3  
</style>