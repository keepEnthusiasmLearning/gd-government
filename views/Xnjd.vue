<template>
<div class="g-head">
  <v-container class="g-head__content">
		<div class="g-head-title">{{xnjd.head.title}}</div>
		<div class="g-head-subtitle">{{xnjd.head.subtitle}}</div>
  </v-container>
</div>
<v-container class="g-content">
	<section class="g-section"><v-row>
		<v-col class="g-item" v-for="panel in xnjd.panels" cols="6">
			<v-sheet class="g-panel" elevation="8">
				<div class="g-panel-title">{{panel.title}}</div>
				<v-row class="g-panel-items">
					<v-col class="g-panel-item" v-for="item in panel.items">
						<div class="g-panel-item-title">{{item.title}}</div>
						<div class="g-panel-item-value">{{item.value}}</div>
					</v-col>
				</v-row>
				<v-divider></v-divider>
				<div class="g-panel-footer">{{xnjd.panelfoot}}</div>
		</v-sheet></v-col>
	</v-row></section>
</v-container>	
</template>
<script setup>
	import datas from "../assets/datas.json"
	const xnjd = datas.xnjd	
</script>
<style lang="sass" scoped>
	.g-content
		.g-section
			.g-item
				.g-panel
					position: relative
					height: 100%
					widows: 100%
					max-width: 100%
					max-height: 100%
					padding-top: 24px
					padding-left: 24px
					padding-right: 24px
					margin-left: 20px
					margin-right: 20px
					background: white
					&-title
						line-height: 1rem
						margin-bottom: .25rem
						// margin: 0
						font-size: 20px
						color: #0d1c28
						text-align: left
						line-height: 32px
					&-items
						padding-top: 12px
					&-item
						height: 148px
						float: left
						&-title
							font-family: PingFangSC-Regular
							font-size: 14px
							color: #3c4852
							line-height: 24px
							text-align: left
							padding: 8px 0
						&-value
							font-size: 34px
							color: #0d1c28
							line-height: 54px
							margin-bottom: 12px
					&-footer
						padding: .43rem 0
						color: #9ea4a9
						font-size: 14px
						text-align: center
						line-height: 22px
						box-shadow: inset 0 1px 0 0 #dfe1e2
</style>
