<template>
<div class="g-head">
  <v-container class="g-head__content">
		<div class="g-head-title">{{govPeopleInteract.head.title}}</div>
		<div class="g-head-subtitle">{{govPeopleInteract.head.subtitle}}</div>
  </v-container>
</div>
<v-container class="g-content">
	<section class="g-section">
	<v-row>
		<v-col class="g-item" v-for="sheet in govPeopleInteract.sheets">
			<a 
			 class="g-link" 
			 :href="sheet.href" 
			:style="sheet.bgImageUrl"
			>
				<div class="g-link-title">{{sheet.title}}</div>
				<div class="g-link-subtitle">{{sheet.subtitle}}</div>
			</a>
		</v-col>
	</v-row>
	</section>
</v-container>
</template>
<script setup>
	import { ref } from "vue"
	import datas from "../assets/datas.json"
	const govPeopleInteract = datas.govPeopleInteract
</script>
<style lang="sass" scoped>
	.g-content
		.g-section
			.g-item
				.g-link
					display: block
					background-color: #fff
					box-shadow: 0 0 1.5rem rgba(9,41,77,.12)
					text-align: center
					height: 292px
					line-height: 1
					padding: 176px 20px 20px
					background-repeat: no-repeat
					background-position: center 1.2rem
					background-size: 7.5rem 7.5rem
					margin-top: 1.5rem
					&-title
						color: #0d1c28
						font-size: 1rem
						margin-bottom: .75rem
						display: block
						font-size: 1.17em
						margin-block-start: 1em
						margin-block-end: 1em
						margin-inline-start: 0px
						margin-inline-end: 0px
						font-weight: bold
					&-subtitle
						font-size: .8rem
						color: #45484b
						display: block
						margin-block-start: 1em
						margin-block-end: 1em
						margin-inline-start: 0px
						margin-inline-end: 0px
</style>

