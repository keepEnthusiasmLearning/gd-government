<template>
<div class="header">
  <v-container>

    <!-- Toolbar -->

    <v-toolbar class="toolbar" color="transparent">
      <template v-slot:default>
        <a class="toolbar-logo" href="//www.gd.gov.cn/" target="_blank">广东省人民政府</a>
        <span class="toolbar-title">广东省</span>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn 
              class="ml-1" 
              variant="tonal" 
              rounded="0" 
              color="white" 
              v-bind="props" 
              size="small"
            >切换</v-btn>
          </template>
          <v-list>
            <v-list-item><v-list-item-title>广东省</v-list-item-title></v-list-item>
            <v-list-item><v-list-item-title>政务服务部门</v-list-item-title></v-list-item>
            <v-list-item><v-list-item-title>其他公共服务部门</v-list-item-title></v-list-item>            
          </v-list>
        </v-menu>
        <v-spacer></v-spacer>
        <a class="toolbar-link d-none d-md-flex" v-for="link in links" :href="link.href">{{ link.name }}</a>
      </template>
      <template v-slot:extension v-if="!(name === 'xs')">
        <v-tabs
          color="white"
          mandatory 
          align-tabs="center" 
          fixed-tabs
          height="48"
          ><v-tab  v-for="route in routes" :to="route.path">{{ route.name }}</v-tab>
        </v-tabs>                
      </template>
    </v-toolbar>

    <!-- Hero -->

    <v-row class="hero">
      <v-col>
        <a class="zwfw" href="//www.gd.gov.cn/" target="_blank">广东政务服务网</a>
        <p class="hero-title">欢迎来到广东省</p>
        <v-text-field 
          class="mb-2"
          label="请输入您要办理的事项" 
          variant="solo" 
          single-line
          hide-details
          append-inner-icon="mdi-magnify"
        >
        </v-text-field>
        <div class="popular">
          <span class="popular-title">热门搜索：</span>
          <v-chip 
            v-for="popular in populars" 
            class="ma-1" 
            href="/" 
            color="black"
            size="small" 
            label
          >{{popular}}</v-chip>             
        </div>
      </v-col>

      <v-sheet class="hero-rightbox d-none d-sm-flex flex-column" color="white">
        <v-banner class="pa-5" lines="two">
          <template v-slot:prepend>
            <v-avatar color="primary" icon="mdi-account"></v-avatar>
          </template>
          <v-banner-text class="px-0">
            <a class="text-blue" href="">登录账户</a>
            ，查看个人信息和个性化推荐服务
          </v-banner-text>
        </v-banner>                       
        <v-tabs color="primary" bg-color="white" v-model="universalModel">
          <v-tab class="font-weight-black" value="personal">个人常用</v-tab>
          <v-tab class="font-weight-black" value="legal">法人常用</v-tab>
        </v-tabs>
        <v-window v-model="universalModel" class="pb-6">
          <v-window-item class="universal" v-for="(universal, key) in universals" :value="key">          
            <v-row class="mt-2">
              <v-col  v-for="item in universal" cols="6" sm="12" md="12" lg="6" class="py-0">
                <v-list-item class="universal-item" href="/">{{item}}</v-list-item>
              </v-col>            
            </v-row>
          </v-window-item>
        </v-window>
      </v-sheet>  
    </v-row>
  </v-container>
</div>
</template>
<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { useDisplay } from 'vuetify';
  import { ref, onBeforeMount } from 'vue';
  import { request } from '@/util/request';
  const router = useRouter();
  const routes = router.options.routes
  const { name } = useDisplay()  
  const isEditing = false
  const links = [
    {name: '长者助手', href: '/'},
    {name: '国家政务服务平台', href: '/'},
    {name: '无障碍阅读', href: '/'},
    {name: '繁体', href: '/'},
    {name: '网站支持IPv6', href: '/'},
    {name: '登录', href: '/'},
  ]
  const universalModel = ref()
  const populars = ref()
  const universals = ref()
  const getPopulars = async () => {
   await request({ url: '/mock/popular', methods: 'get'})
    .then((res) => { populars.value = res })
    .catch((err) => {console.log(err)})
  }
  const getUniversals = async () => {
   await request({ url: '/mock/universals', methods: 'get'})
    .then((res) => { universals.value = res })
    .catch((err) => {console.log(err)})
  }
  onBeforeMount(()=>{
    getPopulars()
    getUniversals()
  })
</script>
<style lang="sass" scoped>
  @import "@/styles/variable"
  .header
    background: url("@/assets/5682749a-6995-4da5-9056-38fed2e487bb.jpg") no-repeat bottom
    background-origin: padding-box
    background-position: 100% 100%
    background-size: cover
    .toolbar
      &-logo
        display: inline-block
        color: transparent !important
        background: url("@/assets/logo@white.dc0b212.png") no-repeat transparent !important
        background-size: contain !important
        height: 3rem
        width: 13rem
      &-title
        color: white
        margin-right: .25rem
        // font
        font-size: $header-6-font-size !important
        font-weight: $header-font-weight
        line-height: $header-6-line-height !important
        &:before
          content: ""
          display: inline-block
          position: relative
          top: .2rem
          margin-right: 0.7rem
          width: .05rem
          height: .7rem
          background-color: white    
      &-link
        display: inline-block
        padding-left: 16px
        color: white
        // font
        font-size: $body-1-font-size
        font-family: $body-font-family
        &:not(:last-child):after
          content: ""
          display: inline-block
          position: relative
          background-color: #c5c8ca
          height: 16px
          width: 1px
          left: 8px
          top: 2px
    .hero
      padding: 2rem 0rem 2rem 0rem
      @media(min-width: 1280px)
        padding: 4rem 6rem 2rem 6rem
      &-title
        margin-bottom: 1.4rem
        line-height: 1
        overflow: hidden
        color: white
        // font
        font-size: 2.3rem
        font-family: $body-font-family
        text-overflow: ellipsis
        text-align: left
      .zwfw
        display: block
        vertical-align: bottom
        color: transparent 
        background: url("@/assets/logo2x_index.2557bec.png") no-repeat 0 transparent
        background-size: 180px 36px
        // box
        height: 36px
        width: 180px
        margin-bottom: 16px
      .popular
        &-title
          color: white
          // font
          font-size: $body-1-font-size !important
          line-height: $body-1-line-height !important
          font-weight: 500
      &-rightbox
        width: 18rem
        margin-left: 2rem
        .universal
          max-height: 156px
          &-item
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap 
            color: $body-1-color
            // font
            font-family: $body-font-family
            font-size: $body-1-font-size !important
            line-height: $body-1-line-height !important
            &:before
              content: "●"
              margin-right: .5rem
</style>