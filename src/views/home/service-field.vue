<template>
  <div class="service-field">
    <v-container>
      <v-row>
        <v-banner class="bg-transparent" border="none">
          <template v-slot:prepend>
            <v-avatar icon="mdi-room-service-outline"></v-avatar>
          </template>       
          <template v-slot:text>
            <p class="service-field-title">一日之计在于晨，越早预约办理，越早通过！</p>
            <p class="service-field-text">2023年06月08日 星期四</p>            
          </template>          
        </v-banner>
        <v-col class="d-none d-md-flex align-center">
          <v-hover v-for="link in outLinks"><template v-slot:default="{ isHovering, props }">
            <v-btn
              v-bind="props"
              :class="isHovering ? 'bg-primary' : undefined"
              class="service-field-item mr-2" 
              variant="flat" 
              rounded="0" 
              density="comfortable">{{link}}</v-btn>
          </template></v-hover>
          
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn class="service-field-item" size="x-small" height="28" width="28" rounded="0" variant="flat" density="comfortable" v-bind="props">
                <v-icon icon="mdi-chevron-down"></v-icon>        
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(link, index) in innerLinks" :key="index" :value="index">
                <v-list-item-title class="service-field-item">{{ link }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>          
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
  const outLinks = ["政府网站工作年度报表", "粤公平", "市场主体诉求响应", "省内通办"]
  const innerLinks = ["工程建设项目", "粤港澳大湾区门户网", "在线支付"]
</script>
<style lang="sass" scoped>
  @import "@/styles/variable"
  .service-field
    background: $background-color
    &-title
      font-size: $body-1-font-size !important
      font-weight: $header-font-weight !important
      line-height: $body-1-line-height !important
      letter-spacing: normal
      font-family: $body-font-family
      color: $header-color
    &-text
      font-size: $body-2-font-size !important
      font-weight: normal
      line-height: $body-2-line-height !important
      letter-spacing: normal
      font-family: $body-font-family
      color: $body-2-color
    &-item
      font-size: $body-1-font-size !important
      font-weight: $header-font-weight !important
      line-height: $body-1-line-height !important
      letter-spacing: normal
      font-family: $body-font-family
      color: $header-color
</style>




