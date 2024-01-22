<template><v-footer class="d-flex flex-column pa-0">
  <div class="bg-background-color w-100 py-4">
    <v-container>
      <v-row>
        <v-col class="pa-lg-3 pa-1" cols="6" lg="3">
          <v-sheet class="information">
            <div class="information-title">网站信息</div>
            <v-row class="information-items">
              <v-col v-for="info in state.website_information" cols="6">
                <a href="">{{info}}</a>
              </v-col>
            </v-row>        
          </v-sheet>
        </v-col>
        <v-col class="pa-lg-3 pa-1" cols="6" lg="3">
          <v-sheet class="contactUS">
            <div class="contactUS-title">联系我们</div>
            <div class="contactUS-content">
              <a class="contactUS-ysx" href="">
                <v-avatar class="mr-2" size="24" image="https://www.gdzwfw.gov.cn/portal/assets/img/ysx-logo.2a07f64.png"></v-avatar>
                <span>扫一扫 进入 12345 掌上服务</span>
              </a>                        
              <div  class="mt-4">
                <span class="mr-12">热线：12345</span>
                <a class="text-black" href="">联系信息</a>
              </div>
            </div>
          </v-sheet>
        </v-col>

        <v-col class="pa-lg-3 pa-1" cols="6" lg="3">
          <a href="" class="quickMark-item" v-for="item in state.quickMark.list">
            <v-avatar size="24" rounded="0" :image="state.quickMark.icon"></v-avatar>
            <span class="pl-4">{{item.title}}</span>            
          </a>
        </v-col>

        <v-col class="pa-lg-3 pa-1" cols="6" lg="3">
          <a  class="support-left" href=""></a>
          <a  class="support-right" href=""></a>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div class="copyright">
    <div class="d-flex justify-center" :class="name === 'xs' || name === 'sm' ? 'flex-column' : 'flex-row'">
      <div class="copyright-item" v-for="copyright in state.copyright">
        {{copyright.title}}: <a href="">{{copyright.value}}</a>
      </div>
    </div>
    <div class="d-flex justify-center" :class="name === 'xs' || name === 'sm' ? 'flex-column' : 'flex-row'">
      <div class="copyright-item" v-for="licence in state.licence">
        <img
          src="https://www.gdzwfw.gov.cn/portal/assets/img/beian.e6f2938.png" 
          alt="粤公网安备 44010402001768号" 
          class="beian-img"
        >
        {{licence.title}}: <a href="">{{licence.value}}</a>
      </div>
    </div>
  </div>
</v-footer></template>
<script setup>
    import { request } from '@/util/request';
    import { reactive } from 'vue'
    import { useDisplay } from 'vuetify'
    const { name } = useDisplay()
    const state = reactive({
      website_information: [],
      quickMark: {
        icon: '',
        list: []
      },
      copyright: [],
      licence: []
    })
    const getFooterData = async () => {
      const { 
        website_information, 
        quickMark,
        copyright,
        licence 
      } = await request({ url: '/mock/footer', methods: 'get'});
      state.website_information = website_information;
      state.quickMark = quickMark;
      state.copyright = copyright;
      state.licence = licence;
    }
    getFooterData()

</script>
<style lang="sass" scoped>
  @import "@/styles/variable"  
  .information
    font-size: $body-1-font-size !important
    line-height: $body-1-line-height !important
    font-family: $body-font-family
    background: $sheet-color
    height: 100%
    &-title
      display: block
      font-weight: $header-font-weight !important
      line-height: $body-1-line-height !important
      color: black
      padding: 1.2rem
    &-items
      line-height: $body-2-line-height !important
      padding: 0px 1.2rem
      margin-bottom: .4rem
      a
        color: black

  .contactUS
    font-size: $body-1-font-size !important
    background: $sheet-color
    height: 100%
    &-title
      display: block
      font-weight: $header-font-weight !important
      line-height: $body-1-line-height !important
      color: black
      padding: 1.2rem
    &-content
      padding: 0px 1.2rem
    &-ysx
      display: block
      color: black
      padding-bottom: .8rem
      border-bottom: 1px dashed #cfd2d4

  .quickMark-item
    display: block
    background: $sheet-color
    color: black
    font-size: $body-1-font-size !important
    height: 60px
    line-height: 60px
    padding-left: 1.2rem
    &:not(:last-child)
      margin-bottom: 4px

  .support-left
    display: inline-block
    height: 100%
    width: 59%
    background: url(https://www.gdzwfw.gov.cn/portal/assets/img/cavil.501536e.jpg) no-repeat 50% #eaebeb
    background-size: 4.8rem 2.4rem
    color: transparent
    text-indent: 100%

  .support-right
    display: inline-block
    height: 100%
    width: 40%
    background: url(https://www.gdzwfw.gov.cn/portal/assets/img/red.19c24b7.png) no-repeat 50% #eaebeb
    background-size: 1.4rem auto
    white-space: nowrap
    overflow: hidden
    text-indent: 100%
    float: right

  .copyright
    padding: .4rem 0px
    text-align: center
    width: 100%
    background: $sheet-color
    &-item
      padding-right: .4rem
      font-size: $body-1-font-size !important      
      a
        color: black
      .beian-img 
        width: 1rem
        height: 1rem
        vertical-align: text-bottom
</style>