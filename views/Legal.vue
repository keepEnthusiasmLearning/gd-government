<template>
<section class="section-head-bg text-white">
  <v-container class="h-100">
		<div class="section-head-title text-h4">个人服务</div>
	  <v-tabs 
	   v-model="tabsModel"
	   density="default"
	   align-tabs="center" 
	   bg-color="blue" 
	   comfortable="horizontal" 
	   grow 
	   mandatory
	  ><v-tab v-for="(tab, key) in tabs" :key="key" :value="key">{{ tab }}</v-tab>
	  </v-tabs>		
  </v-container>
</section>	
<v-window v-model="tabsModel"></v-window>
</template>
<script setup>
	import { ref } from "vue"
	import SectionHead from "../components/SectionHead"	
	const tabs = {
		classificationByHeat: "按热度分类",
		classificationBySubject: "按主题分类",
		classificationByDepartments: "按部门分类",
		onceForAll: "最多跑一次"
	}
	const classificationByHeats = {
		common: { 
			title: "群众常用",
			items: {}
		},
		population: { 
			title: "群体专区",
			items: {}
		},
		life: { 
			title: "人生事件", 
			items: {}
		},
		public: { 
			title: "公共服务", 
			items: {}
		},
	}
	const tabsModel = ref(null)
	const classificationBySubject = {
		itemGroup: {
			all: "全部业务",
			birthAndAdoption: "生育收养",
			educationAndScientificResearch: "教育与科研",
			cultureAndSports: "文化体育",
			enlistment: "入伍服役",
			employmentAndEntrepreneurship: "就业创业",
			registrationOfMarriage: "婚姻登记",
			payTaxes: "纳税",
			housingSecurity: "住房保障",
			professionalQualification: "职业资格",
			socialSecurity: "社会保障（社会保险、社会救助）",
			medicineAndHygiene: "医疗卫生",
			householdRegistration: "户籍办理",
			transportation: "交通出行",
			exitAndEntry: "出境入境",
			justiceAndNotarization: "司法公证",
		},
	}
</script>
<style scoped>
	.section-head-bg {
    background: url(https://www.gdzwfw.gov.cn/portal/assets/img/matters-enterprise.25c6c05.jpg) no-repeat 50% transparent;
    background-size: cover;
	 	height: 200px;
	}
	.section-head-title {
		height: 100%;
		padding-top: 48px;
		margin: 0px 0px -32px 0px;
	}
</style>