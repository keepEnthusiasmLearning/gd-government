<template>
<v-window-item key="subject" value="subject">
	<section>
		<v-btn-toggle v-model="btnToggleModel" selected-class="bg-primary" style="height: 500px;">
			<v-row><v-col v-for="traffic in traffics" cols="2">
				<v-btn>{{traffic}}</v-btn>
			</v-col></v-row>
		</v-btn-toggle>
	</section>
	<v-row>
		<v-col>
		<v-menu>
			<template v-slot:activator="{ props }"><a class="d-block" v-bind="props">广东省<v-icon icon="mdi-chevron-down"></v-icon></a></template>
			<v-sheet>
				<div class="text-h6">当前定位: 广州市</div>
				<v-row>
				<v-col v-for="area in areas" cols="2">{{area}}</v-col>
			</v-row></v-sheet>
		</v-menu>
		</v-col>
		<v-col>
		<v-menu>
			<template v-slot:activator="{ props }"><a class="d-block" v-bind="props">本级及以下全部部门<v-icon icon="mdi-chevron-down"></v-icon></a></template>
			<v-sheet>
				<div class="text-h6">当前定位: 广州市</div>
				<v-row>
				<v-col v-for="area in areas" cols="2">{{area}}</v-col>
			</v-row></v-sheet>
		</v-menu>
		</v-col>
		<v-col>
		<v-menu>
			<template v-slot:activator="{ props }"><a class="d-block" v-bind="props">全部类型<v-icon icon="mdi-chevron-down"></v-icon></a></template>
			<v-sheet>
				<div class="text-h6">当前定位: 广州市</div>
				<v-row>
				<v-col v-for="area in areas" cols="2">{{area}}</v-col>
			</v-row></v-sheet>
		</v-menu>
		</v-col>
		<v-col><v-checkbox label="仅显示本级"></v-checkbox></v-col>
		<v-col><v-checkbox label="可在线申办"></v-checkbox></v-col>
	</v-row>
	<v-table>
		<thead><tr>
		  <th class="text-left">实施清单事项名称</th>
		  <th class="text-left">主管部门</th>
		  <th class="text-left">行政区划</th>
		  <th class="text-left">操作</th>
		</tr></thead>
	</v-table>
	<v-list>
		<v-list-group v-for="(content, key) in contents" :value="key">
			<template v-slot:activator="{ props }">
			  <v-list-item v-bind="props" :title="content.title"></v-list-item>
			</template>	
			<v-table><tbody>
				<tr v-for="children in content.childrens" :key="children.title">
					<td>{{children.title}}</td>	
					<td>{{children.competentDepartment}}</td>
					<td>{{children.administrativeDivision}}</td>	
					<td><a href="">在线办理</a> <a href="">申请材料</a></td>	
				</tr>
			</tbody></v-table>	
		</v-list-group>
	</v-list>
<v-pagination v-model="pageModel" :total-visible="5"></v-pagination>
</v-window-item>	

</template>
<script setup>
	import { ref } from 'vue'	
	import { defineProps } from 'vue'
	const btnToggleModel = ref(null)	
	const pageModel = ref(null)
	const props = defineProps({ 
		traffics: Object,
		areas: Object,
		contents: Object,
		departments: Object,
		types: Object,
	})
</script>