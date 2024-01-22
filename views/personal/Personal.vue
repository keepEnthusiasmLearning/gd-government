<template>
<section class="section-head-bg text-white">
  <v-container class="h-100">
		<div class="text-h4 mt-6">{{personal.title}}</div>
	  <v-tabs 
	   v-model="tabModel"
	   density="default"
	   align-tabs="center" 
	   bg-color="blue" 
	   comfortable="horizontal" 
	   grow 
	   mandatory
	  ><v-tab v-for="(tab, key) in personal.tabs" :key="key" :value="key">{{ tab }}</v-tab></v-tabs>		
  </v-container>
</section>
<v-container><v-window v-model="tabModel">
	<PerHeat :chunks="personal.chunks" />
	<PerSubject :traffics="personal.traffics" :areas="personal.areas" :contents="personal.contents" :types="personal.types" :departments="personal.departments" />
	<PerDepartments :departments="personal.departments" :contents="personal.contents" :types="personal.types" />
	<PerBusiness/>
</v-window></v-container>
</template>
<script setup>
import { ref } from 'vue'	
import PerHeat from './heat.vue'
import PerSubject from './subject.vue'
import PerBusiness from './business.vue'
import PerDepartments from './departments.vue'
const tabModel = ref(null)
const personal = {
	title: "个人服务",
	tabs: {	
		heat: "按热度分类",
		subject: "按主题分类",
		departments: "按部门分类",
		business: "最多跑一次"
	},
	chunks: {
		common: {
			title: "群众常用",
			cards: {
				housingProvidentFund: {
					title: "住房公积金",
					href: "",
					icon: "",
					items: {
						rental: { title: "租房提取（公积金）", href: "" },
						purchase: { title: "购房自住房贷款", href: "" }, 
					},
				},
				Passport: {
					title: "护照、通行证",
					href: "",
					icon: "",
					items: {
						generalPassport: { title: "办理及加注普通护照", href: "" },
						hkAndMacaoPassport: { title: "办理往来港澳通行证", href: "" }, 
						taiwanPassport: { title: "办理往来台湾通行证", href: "" }, 
					},
				},
				drivingLicense: {
					title: "驾照、行驶",
					href: "",
					icon: "",
					items: {
						driverPaidIllegally: { title: "驾驶人违法缴费", href: "" },
						carLottery: { title: "小汽车摇号/竞价", href: "" }, 
						carAnnualVerification: { title: "车辆年审预约", href: "" }, 
					},
				},
				censusRegister: {
					title: "户政",
					href: "",
					icon: "",
					items: {
						censusRegisterCertificate: { title: "开具户籍证明", href: "" },
						talentIntroduction: { title: "人才引进（市外迁入）", href: "" }, 
						birthRegistration: { title: "出生登记", href: "" }, 
					},
				},
				socialSecurity: {
					title: "社保",
					href: "",
					icon: "",
					items: {
						socialSecurityInquiry: { title: "社保查询", href: "" },
						onceUnemploymentInsuranceClaim: { title: "一次性失业保险金申领", href: "" }, 
						applyPensionBenefits: { title: "养老保险待遇申领", href: "" }, 
					},
				},
				rent: {
					title: "租房购房置业",
					href: "",
					icon: "",
					items: {
						housingLeaseRecord: { title: "房屋租赁备案", href: "" },
						publicRentalHousing: { title: "公租房租赁", href: "" },
						loanCalculator: { title: "贷款计算器", href: "" }, 
					},
				},
				employment: {
					title: "就业创业",
					href: "",
					icon: "",
					items: {
						onceStartUpGrant: { title: "一次性创业资助", href: "" },
						subsidizedWorks: { title: "灵活就业社保补贴申领", href: "" },
						startUpSubsidy: { title: "创业租金补贴", href: "" }, 
					},
				},
				occupationalQualifications: {
					title: "职业资格",
					href: "",
					icon: "",
					items: {
						lawOfficePracticeRegistration: { title: "律师事务所设立许可", href: "" },
						teacherPracticeRegistration: { title: "高等学校教师资格认定", href: "" },
						TCMPracticeRegistration: { title: "中医医疗机构医师执业注册", href: "" }, 
					},
				},
				educationServices: {
					title: "教育服务",
					href: "",
					icon: "",
					items: {
						schoolEnquiriesProvince: { title: "省内学校查询", href: "" },
						higherEducationStatusInquiry: { title: "高等教育学籍查询", href: "" },
						cet4or6ResultsQuery: { title: "四六级成绩查询", href: "" }, 
					},
				},
				legalNotarization: {
					title: "法律公证",
					href: "",
					icon: "",
					items: {
						complaintsHotline: { title: "投诉热线", href: "" },
						reconciliationPlatform: { title: "和解平台", href: "" }, 
					},
				},
				taxAdministration: {
					title: "税务",
					href: "",
					icon: "",
					items: {
						invoiceInquiry: { title: "发票查询", href: "" },
						governmentTaxFillings: { title: "开具个人所得税纳税记录", href: "" },
						reportRecordInquiry: { title: "个人所得税申报记录查询", href: "" }, 
					},
				},
				utilities: {
					title: "水电气",
					href: "",
					icon: "",
					items: {
						waterApplication: { title: "用水报装/变更", href: "" },
						telegraphing: { title: "用电报装/变更", href: "" },
						GasReporting: { title: "燃气报装/变更", href: "" }, 
					},
				},
			},
		},
		popZone: {
			title: "群体专区",
			cards: {
				unemployment: {
					title: "失业",
					href: "",
					icon: "",
					items: {
						employmentRegistration: { title: "失业登记", href: "" },
						unemploymentInsuranceBenefits: { title: "失业保险金申领", href: "" }, 
					},
				},
				distressRelief: {
					title: "困难救助",
					href: "",
					icon: "",
					items: {
						LowIncomeAssistance: { title: "低收入家庭救助", href: "" },
						exceptionalPovertyAssistance: { title: "特困人员救助", href: "" }, 
						livingSecurity: { title: "最低生活保障申请", href: "" }, 
					},
				},
				lawyer: {
					title: "律师",
					href: "",
					icon: "",
					items: {
						lawFirmAccountBinding: { title: "律师律所账号绑定", href: "" },
					},
				},
				womenAndChildren: {
					title: "妇幼",
					href: "",
					icon: "",
					items: {
						NewbornHealthInsurance: { title: "新生儿参加城乡居民医保", href: "" },
						birthInsurance: { title: "生育保险待遇核准支付", href: "" }, 
					},
				},
				religion: {
					title: "民族宗教",
					href: "",
					icon: "",
					items: {
						nationalChange: { title: "公民民族成份变更", href: "" },
						ethnicMinorityBursary: { title: "广东省少数民族聚居区少数民族大学生助学金审核", href: "" }, 
					},
				},
				aged: {
					title: "老年人",
					href: "",
					icon: "",
					items: {
						agedCourtesy: { title: "老年人优待证（卡）", href: "" },
						maintenanceGrant: { title: "定期生活补助金", href: "" },
						stopAgedSubsidy: { title: "停止发放高龄老人补（津）贴", href: "" }, 
					},
				},
				disabilityService: {
					title: "助残服务",
					href: "",
					icon: "",
					items: {
						disabilityCorrectionSurgery: { title: "残疾矫治手术", href: "" },
						mentalDisability: { title: "精神残疾人专科治疗资助", href: "" },
						disabilityCertificate: { title: "残疾人证类别/等级变更", href: "" }, 
					},
				},
				noMainland: {
					title: "港澳台/华侨/外国人",
					href: "",
					icon: "",
					items: {
						hkAMacaoRegister: { title: "港澳居民居住登记", href: "" },
						macaoSettlement: { title: "台湾居民定居", href: "" },
					},
				},				
			},
		},
		events: {
			title: "人生事件",
			cards: {
				employment: {
					title: "就业",
					href: "",
					icon: "",
					items: {
						employmentRegister: { title: "就业登记", href: "" },
					},
				},
				car: {
					title: "车辆",
					href: "",
					icon: "",
					items: {
						carBidding: { title: "小汽车竞价", href: "" },
					},
				},
				housing: {
					title: "住房",
					href: "",
					icon: "",
					items: {
						accumulationFundGain: { title: "公积金租房提取", href: "" },
					},
				},
				matrimony: {
					title: "婚姻",
					href: "",
					icon: "",
					items: {
						matrimonyBook: { title: "结婚登记预约", href: "" },
						matrimonyRegister: { title: "内地居民结婚登记", href: "" }, 
					},
				},
				bear: {
					title: "生育",
					href: "",
					icon: "",
					items: {
						bearRegister: { title: "国（境）内出生登记", href: "" },
						bearSubsidy: { title: "生育津贴待遇申领", href: "" }, 
					},
				},
				retire: {
					title: "退休",
					href: "",
					icon: "",
					items: {
						retireGain: { title: "公积金离休、退休提取", href: "" },
					},
				},
				other: {
					title: "其他人生事",
					href: "",
					icon: "",
					items: {
						militaryRegisterM : { title: "兵役登记 男兵", href: "" },
						militaryApplyM: { title: "应征报名 男兵", href: "" },
						militaryApplyW: { title: "应征报名 女兵", href: "" }, 
					},
				},				
			},
		},
		serve: {
			title: "公共服务",
			cards: {
				publicServe: {
					title: "公共设施",
					href: "",
					icon: "",
					items: {
						kulturhuset: { title: "市文化馆", href: "" },
						library: { title: "图书馆", href: "" },
						sports: { title: "体育设施电子地图查询", href: "" }, 
					},
				},	
				special: {
					title: "特色服务",
					href: "",
					icon: "",
					items: {
						observatoryOpenDay: { title: "天文台公众开放日预约", href: "" },
					},
				},									
			},
		},
	},
	// 类型
	types: [
		"全部类型", "套餐服务", "行政许可", "公共服务", "行政处罚",
		"行政强制", "行政征收", "行政给付", "行政检查", "行政确认",
		"行政奖励", "行政裁决", "其他类别",
	],
	// 业务
	traffics: [
		"全部业务", "生育收养", "教育科研", "文化体育", "入伍服役", "就业创业", "婚姻登记", "纳税", 
		"住房保障", "职业资格", "社会保障（社会保险、社会救助）", "医疗卫生", "户籍办理", "交通出行", "出境入境", "司法公证", 
		"死亡殡葬", "其他", "民族宗教", "社会救助", "消费维权", "知识产权", "行政缴费", "优待抚恤", 
		"规划建设", "证件办理", "旅游观光", "公共安全", "公用事业", "城市综合执法", "养老服务", "涉农补贴", 
		"义务教育", "准营准办", "设立变更", "环保绿化", "抵押质押", "离职退休", "地方特色分类", 
	],
	// 地区
	areas: [
		"广东省", "广州市", "深圳市", "珠海市", "汕头市", 
		"佛山市", "韶关市", "河源市", "梅州市", "惠州市", 
		"汕尾市", "东莞市", "中山市", "江门市", "阳江市", 
		"湛江市", "茂名市", "肇庆市", "清远市", "潮州市", 
		"揭阳市", "云浮市",
	],
	// 部门
	departments: [
		"本级及以下部门", "中共广东省委宣传部", "中共广东省委机构编制委员会办公室", "广东省发展和改革委员会", 
		"广东省教育厅", "广东省科学技术厅", "广东省工业和信息化厅", "广东省民族宗教事务委员会", 
		"广东省公安厅", "广东省民主厅", "广东省司法厅", "广东省财政厅", 
		"广东省人力资源和社会保障厅", "广东省自然资源厅", "广东省生态环境厅", "广东省住房和城乡建设厅", 
		"广东省交通运输厅", "广东省水利厅", "广东省农业农村厅", "广东省商务厅", 
		"广东省文化和旅游厅", "广东省卫生健康委员会", "广东省退役军人事务厅", "广东省应急管理厅", 
		"广东省审计厅", "广东省市场监督管理局", "广东省广播电视剧", "广东省体育局", 
		"广东省统计局", "广东省地方金融监督管理局", "广东省国家保密局", "广东省档案局", 
		"广东省粮食和物资储备局", "广东省能源局", "广东省社会组织管理局", "广东省戒毒管理局", 
		"广东省林业局", "广东省中医药局", "广东省药品监督管理局", "广东省妇女联合会", 
		"广东省残疾人联合会", "广东省人民政府地方志办公室", "广东省国家安全厅", "国家税务总局广东省税局",
	],
	// 内容
	contents: {
		item_1: { 
			title: "临时价格干预范围事项提价申报", 
			childrens: {
				i_1: { 
					title: "临时价格干预范围事项提价申报", 
					competentDepartment: "广东省发展和改革委员会",
					administrativeDivision: "广东省",							
				},
			},
		},
		item_2: { 
			title: "中小学地方课程教材初审、审定、复查", 
			childrens: {
				i_1: { 
					title: "中小学地方课程教材初审", 
					competentDepartment: "广东省教育厅",
					administrativeDivision: "广东省",							
				},
				i_2: { 
					title: "中小学地方课程教材审定", 
					competentDepartment: "广东省教育厅",
					administrativeDivision: "广东省",							
				},
				i_3: { 
					title: "中小学地方课程教材复查", 
					competentDepartment: "广东省教育厅",
					administrativeDivision: "广东省",							
				},
			} 
		},
		item_3: { 
			title: "高等职业学校（专科层次）设置审核", 
			childrens: {
				i_1: { 
					title: "高等职业学校设立（含设置分校区）(民办高等职业学校设置审核)", 
					competentDepartment: "广东省教育厅",
					administrativeDivision: "广东省",							
				},
				i_2: { 
					title: "高等职业学校设立（含设置分校区）(公办高等职业学校设置审核)", 
					competentDepartment: "广东省教育厅",
					administrativeDivision: "广东省",							
				},
				i_3: { 
					title: "高等职业学校设立（含设置分校区）(民办高等职业学校设置异地校区)", 
					competentDepartment: "广东省教育厅",
					administrativeDivision: "广东省",							
				},
			} 
		},
		item_4: { 
			title: "开办外籍人员子女学校审批", 
			childrens: {
				i_1: { 
					title: "设立外籍人员子女学校", 
					competentDepartment: "广东省教育厅",
					administrativeDivision: "广东省",							
				},
			} 
		},
		item_5: { 
			title: "教师资格认定", 
			childrens: {
				i_1: { 
					title: "高等学校教师资格认定", 
					competentDepartment: "广东省教育厅",
					administrativeDivision: "广东省",							
				},
			} 
		},
		item_6: { 
			title: "民办高校（专科层次）举办者变更核准", 
			childrens: {
				i_1: { 
					title: "民办高校（专科层次）举办者变更核准", 
					competentDepartment: "广东省教育厅",
					administrativeDivision: "广东省",							
				},
			} 
		},
		item_7: { 
			title: "需要履行项目审批、核准手续的依法必须招标项目的招标范围、招标方式和招标组织形式核准", 
			childrens: {
				i_1: { 
					title: "需要履行项目审批、核准手续的依法必须招标的基建工程、特许经营项目招标方式和招标范围的核准(申请自行招标事项)", 
					competentDepartment: "广东省发展和改革委员会",
					administrativeDivision: "广东省",							
				},
				i_2: { 
					title: "需要履行项目审批、核准手续的依法必须招标的基建工程、特许经营项目招标方式和招标范围的核准(申请邀请招标事项)", 
					competentDepartment: "广东省发展和改革委员会",
					administrativeDivision: "广东省",							
				},
				i_3: { 
					title: "需要履行项目审批、核准手续的依法必须招标的基建工程、特许经营项目招标方式和招标范围的核准(申请公开招标事项)", 
					competentDepartment: "广东省发展和改革委员会",
					administrativeDivision: "广东省",							
				},
				i_4: { 
					title: "需要履行项目审批、核准手续的依法必须招标的基建工程、特许经营项目招标方式和招标范围的核准(申请不招标事项)", 
					competentDepartment: "广东省发展和改革委员会",
					administrativeDivision: "广东省",							
				},
			} 
		},
		item_8: { 
			title: "企业投资项目核准", 
			childrens: {
				i_1: { 
					title: "企业投资项目变更", 
					competentDepartment: "广东省发展和改革委员会",
					administrativeDivision: "广东省",							
				},
				i_2: { 
					title: "企业投资项目延期", 
					competentDepartment: "广东省发展和改革委员会",
					administrativeDivision: "广东省",							
				},
				i_3: { 
					title: "企业投资项目核准", 
					competentDepartment: "广东省发展和改革委员会",
					administrativeDivision: "广东省",							
				},
			} 
		},
		item_9: { 
			title: "临时价格干预范围事项提价申报", 
			childrens: {
				i_1: { 
					title: "临时价格干预范围事项提价申报", 
					competentDepartment: "广东省发展和改革委员会",
					administrativeDivision: "广东省",							
				},
			} 
		},
		item_10: { 
			title: "中外合作办学审核审批", 
			childrens: {
				i_1: { 
					title: "高等专科学历教育中外合作项目和机构审批(高等专科学历教育中外（内地与港澳台）合作办学项目)", 
					competentDepartment: "广东省教育厅",
					administrativeDivision: "广东省",							
				},
				i_2: { 
					title: "高等专科学历教育中外合作项目和机构审批(高等专科学历教育中外（内地与港澳台）合作办学机构)", 
					competentDepartment: "广东省教育厅",
					administrativeDivision: "广东省",							
				},
			} 
		},
		item_11: { 
			title: "中外合作办学审核审批", 
			childrens: {
				i_1: { 
					title: "高级中等学历教育中外合作项目和机构审批(高级中等学历教育内地与港澳台合作办学项目)", 
					competentDepartment: "广东省教育厅",
					administrativeDivision: "广东省",							
				},
				i_2: { 
					title: "高级中等学历教育中外合作项目和机构审批(高级中等学历教育中外合作办学项目)", 
					competentDepartment: "广东省教育厅",
					administrativeDivision: "广东省",							
				},
				i_3: { 
					title: "高级中等学历教育中外合作项目和机构审批(高级中等学历教育内地与港澳台合作办学机构)", 
					competentDepartment: "广东省教育厅",
					administrativeDivision: "广东省",							
				},
				i_4: { 
					title: "高级中等学历教育中外合作项目和机构审批(高级中等学历教育中外合作办学机构)", 
					competentDepartment: "广东省教育厅",
					administrativeDivision: "广东省",							
				},
				i_5: { 
					title: "非学历高等教育中外合作办学项目和机构审批(非学历高等教育内地与港澳台合作办学项目)", 
					competentDepartment: "广东省教育厅",
					administrativeDivision: "广东省",							
				},
				i_6: { 
					title: "非学历高等教育中外合作办学项目和机构审批(非学历高等教育中外合作办学机构)", 
					competentDepartment: "广东省教育厅",
					administrativeDivision: "广东省",							
				},
				i_7: { 
					title: "非学历高等教育中外合作办学项目和机构审批(非学历高等教育中外合作办学项目)", 
					competentDepartment: "广东省教育厅",
					administrativeDivision: "广东省",							
				},
				i_8: { 
					title: "非学历高等教育中外合作办学项目和机构审批(非学历高等教育内地与港澳台合作办学机构)", 
					competentDepartment: "广东省教育厅",
					administrativeDivision: "广东省",							
				},
			}, 
		},
		item_12: { 
			title: "中小学地方课程教材初审、审定、复查", 
			childrens: {
				i_1: { 
					title: "中小学地方课程教材初审", 
					competentDepartment: "广东省教育厅",
					administrativeDivision: "广东省",							
				},						
				i_2: { 
					title: "中小学地方课程教材审定", 
					competentDepartment: "广东省教育厅",
					administrativeDivision: "广东省",							
				},						
			},
		},					
	},	
}	
</script>
<style scoped>
	.section-head-bg {
    background: url(https://static.gdzwfw.gov.cn/portal/static/banner/gd_bianminliqi.jpg) no-repeat 50% transparent;
    background-size: cover;
	 	height: 200px;
	}
</style>