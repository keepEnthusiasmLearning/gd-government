<template>
<div class="g-head">
  <v-container class="g-head__content">
		<div class="g-head-title">{{govPublic.head.title}}</div>
		<div class="g-head-subtitle">{{govPublic.head.subtitle}}</div>
  </v-container>
</div>
<v-container class="g-content">
	<section class="g-section" v-for="pubilc in govPublic.list">
		<div class="g-section-title">{{ pubilc.title }}</div>
		<v-row>
			<v-col class="g-item" v-for="item in pubilc.items" xl="4" lg="4" md="6" sm="12" xs="12" cols="12">
			<v-hover><template v-slot:default="{ isHovering, props }">
					<v-card 
						class="px-4 py-1"  
						v-bind="props" 
						:href="item.href" 
						:color="isHovering ? 'primary' : 'grey-lighten-4'"
						rounded="0"
					><v-card-item class="g-item-title" prepend-icon="mdi-format-list-group">{{item.title}}</v-card-item>
					</v-card>
			</template></v-hover>
			</v-col>
		</v-row>
	</section>	
</v-container>
</template>
<script setup>
	import { ref } from "vue"
	import datas from "../assets/datas.json"
	const govPublic = datas.govPublic	
</script>
<style lang="sass" scoped>
	.g-content
		.g-section
			&-title
				height: 52px
				font-size: 24px
				color: #0d1c28
				line-height: 1
				border-bottom: .2rem solid #0d1c28
				margin: 8px 0
				padding: 12px 0
				font-weight: 600
			.g-item
				padding: 0 24px
				margin-top: 16px
				&-title
					font-size: 1.2rem
					font-weight: 700
					white-space: nowrap
					overflow: hidden
					text-overflow: ellipsis
</style>
