<template>
<v-window-item key="heat" value="heat">
	<section v-for="chunk in chunks">
	<div class="text-h4 mt-6">{{chunk.title}}</div>
		<v-row><v-col v-for="card in chunk.cards" xl="3" lg="3" md="3" sm="3" xs="3" cols="3">
			<v-hover><template v-slot:default="{ isHovering, props }">
				<v-card 
					class="mx-auto" 
					width="400" 
					prepend-icon="mdi-home"
					:color="isHovering ? 'primary' : undefined"
					v-bind="props"								
				><v-card-item>
					<v-card-title>{{card.title}}</v-card-title>
					<v-card-subtitle><a class="d-block" :href="item.href" v-for="item in card.items">{{item.title}}</a></v-card-subtitle>
				</v-card-item></v-card>
			</template></v-hover>
		</v-col></v-row>				
	</section>
</v-window-item>		
</template>
<script setup>
	import { defineProps } from 'vue'
	const props = defineProps({ chunks: Object })
</script>