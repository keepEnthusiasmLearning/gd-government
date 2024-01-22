<template>
<ul class="g-characteristic-side">
	<li class="g-characteristic-side-item" v-for="serve in characteristic.list"><a href="">{{ serve.title }}</a></li>
</ul>
<div class="g-head">
  <v-container class="g-head__content">
		<div class="g-head-title">{{characteristic.head.title}}</div>
		<div class="g-head-subtitle">{{characteristic.head.subtitle}}</div>
  </v-container>
</div>
<v-container class="g-content">
	<section class="g-section" v-for="serve in characteristic.list">
		<div class="g-section-title">{{ serve.title }}</div>
		<v-row>
			<v-col class="g-item" v-for="item in serve.items" xl="3" lg="3" md="4" sm="6" xs="12" cols="12">
	      <v-card height="256" elevation="4" href="https://ygp.gdzwfw.gov.cn/ggzy-yhzx/">
	        <v-img :src="item.imgSrc" :alt="item.title">
	        	<!-- v-chip-group -->
	          <v-chip
	           class="g-chip"
	           v-for="chip in item.chips" 
	           color="red" 
	           variant="flat" 
	          >{{chip}}</v-chip>
	        </v-img>
	        <v-card-item>
	          <v-card-title class="g-card-title">{{item.title}}</v-card-title>
	          <v-card-subtitle class="g-card-subtitle">{{item.subtitle}}</v-card-subtitle>
	        </v-card-item>
	      </v-card>				
			</v-col>
		</v-row>
	</section>
</v-container>
</template>
<script setup>
	import { ref } from "vue"
	import datas from "../assets/datas.json"

	const tabs = ref(null)
	const characteristic = datas.characteristic
</script>
<style lang="sass" scoped>
	.g-content
		.g-section
			&:not(:last-child)
				border-bottom: 1px solid #e2e3e5
			&-title
				height: 52px
				font-size: 32px
				color: #0d1c28
				line-height: 52px
				font-weight: 600
				border-bottom: 0
			.g-item
					.g-chip
						float: right
						right: 8px
						top: 8px
					.g-card-title
						font-weight: 700
						display: block
						color: #0d1c28
						font-size: 20px
						line-height: 32px
						margin-bottom: 4px
						white-space: nowrap
					.g-card-subtitle
					color: #6e777e
					font-size: 16px
					line-height: 26px
					font-weight: 400
					display: -webkit-box
					-webkit-line-clamp: 2
					-webkit-box-orient: vertical
	.g-characteristic-side
		font-size: 14px
		color: rgba(13,28,40,.8)
		letter-spacing: 0
		text-align: right
		line-height: 22px
		font-weight: 500
		position: absolute
		top: 384px
		z-index: 3
		min-width: 6rem
		max-width: 9rem
		border-right: 1px solid #e2e2e2		
		&-item
			padding: .4rem 0
			text-align: right
			line-height: 1.2rem
			white-space: nowrap
			font-weight: 500
			a
				position: relative
				display: block
				padding: 0 1.2rem
				color: #777
				transition: all .3s ease
			a .active
				color: #2175db
</style>



