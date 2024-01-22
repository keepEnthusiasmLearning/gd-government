export default [
  {
    url: '/mock/popular',
    method: 'get',
    response: () => {
      return ["高考准考证", "基层就业补贴", "食品经营许可证", "特种设备", "营业执照"]
    },
  },
  {
    url: '/mock/universals',
    method: 'get',
    response: () => {
      return {
        personal: [ 
          "高考准考证打印", "小汽车摇号/竞价", 
          "社保查询", "基层就业补贴", 
          "办理往来港澳通行证", "人才引进（市外迁入）", 
          "生育津贴支付", "租房提取（公积金）" 
        ],
        legal: [ 
          "内资企业变更登记", "个体工商户设立登记", 
          "不动产登记资料查询", "内资企业设立登记", 
          "食品经营许可核发", "单位参保证明查询打印", 
          "仅销售预包装食品首次备案", "建筑工程施工许可证核发" 
        ]        
      }
    },
  },
  {
    url: '/mock/portal/gallerys',
    method: 'get',
    response: () => {
      return [
        { 
          src: 'https://static.gdzwfw.gov.cn/mhyy-be/20230427/19c61fa7-eb6a-4756-9aba-9b4becb63fdc.png', 
          href: 'https://ygp.gdzwfw.gov.cn/ggzy-yhzx/', 
          title: '社会服务“跨省通”专区', 
          text: '社保服务异地办事更畅通' 
        },
        { 
          src: 'https://static.gdzwfw.gov.cn/mhyy-be/20220728/832cbf65-0aba-4fa4-8057-5c964cc238d6.jpg', 
          href: 'https://ygp.gdzwfw.gov.cn/ggzy-yhzx/', 
          title: '视频办服务专区', 
          text: '为群众和企业提供面对面服务，网上办理有人帮', 
          chip: '在线帮办' 
        },
        { 
          src: 'https://static.gdzwfw.gov.cn/mhyy-be/20220723/08d80774-1b51-4885-be4c-7a028cd37459.png', 
          href: 'https://ygp.gdzwfw.gov.cn/ggzy-yhzx/', 
          title: '泛珠跨域通办', 
          text: '提供线上一网通办和线下代收代办深度融合的跨域通办服务体验' 
        },
        { 
          src: 'https://static.gdzwfw.gov.cn/mhyy-be/20221010/2fd24476-874d-4945-b22f-e85de2936197.jpg', 
          href: 'https://ygp.gdzwfw.gov.cn/ggzy-yhzx/', 
          title: '粤复用', 
          text: '为服务商提供数字政府应用超市产品登记服务', 
          chip: '应用推广' 
        },
        { 
          src: 'https://static.gdzwfw.gov.cn/mhyy-be/20220713/0f74eb97-2ba6-4653-84c7-2d94323a8ec7.jpg', 
          href: 'https://ygp.gdzwfw.gov.cn/ggzy-yhzx/', 
          title: '粤公平', 
          text: '为市场主体提供一站式的交易服务', 
          chip: '营商环境' 
        },
        { 
          src: 'https://static.gdzwfw.gov.cn/mhyy-be/20220704/7f767c24-eb81-43c1-ad24-9bcb3ed159a1.png', 
          href: 'https://ygp.gdzwfw.gov.cn/ggzy-yhzx/', 
          title: '企业留抵退税服务', 
          text: '留抵退税政策查询、在线办理、服务评价等“一站式”服务' 
        },
        { 
          src: 'https://static.gdzwfw.gov.cn/mhyy-be/20210130/ba2a61b1-12a5-48d0-95df-7c976b1a5fa9.jpg', 
          href: 'https://ygp.gdzwfw.gov.cn/ggzy-yhzx/', 
          title: '工程建设项目“一网通办”', 
          text: '提供工程建设项目报批一网通办服务' 
        },
        { 
          src: 'https://static.gdzwfw.gov.cn/mhyy-be/20211011/fd8290a3-f049-4c3b-b21a-9eec4e22bb24.jpg', 
          href: 'https://ygp.gdzwfw.gov.cn/ggzy-yhzx/', 
          title: '广东省“跨域通办”', 
          text: '足不出户办理异地事务，实现“跨省通办、省内通办”', 
          chip: '授权代办' 
        },
        { 
          src: 'https://static.gdzwfw.gov.cn/mhyy-be/20211116/21392a22-8e83-4c90-9ffd-35b403fd7754.jpg', 
          href: 'https://ygp.gdzwfw.gov.cn/ggzy-yhzx/', 
          title: '主题集成服务', 
          text: '按主题集合多个服务事项，一件事一站式办理' 
        },
        { 
          src: 'https://static.gdzwfw.gov.cn/mhyy-be/20211216/c11f60ad-f1ca-48c1-ab71-7dcc3ec5999b.jpg', 
          href: 'https://ygp.gdzwfw.gov.cn/ggzy-yhzx/', 
          title: '助企纾困服务专区', 
          text: '推动惠企政策一键直达、助企服务一网通办', 
          chip: '营商环境' 
        },
        { 
          src: 'https://static.gdzwfw.gov.cn/portal/static/portal/guangdong/gd_qiyekaiban.jpg', 
          href: 'https://ygp.gdzwfw.gov.cn/ggzy-yhzx/', 
          title: '企业开办专区', 
          text: '实现企业开办一表填报、一窗通取。' 
        },
        { 
          src: 'https://static.gdzwfw.gov.cn/mhyy-be/20230602/173ff0e6-e446-4c82-a815-52999d0aa834.png', 
          href: 'https://ygp.gdzwfw.gov.cn/ggzy-yhzx/', 
          title: '助残服务专区', 
          text: '提供残疾人就业补贴等服务事项，便利残疾人工作生活。' 
        },
        { 
          src: 'https://static.gdzwfw.gov.cn/mhyy-be/20211005/b3612c68-a24b-477f-8272-00aec3f95334.jpg', 
          href: 'https://ygp.gdzwfw.gov.cn/ggzy-yhzx/', 
          title: '便民服务专栏', 
          text: '提供生产生活各类便捷服务' 
        },
        { 
          src: 'https://static.gdzwfw.gov.cn/mhyy-be/20211003/4f329124-3c3e-4522-bf65-bdbf3485cea3.jpg', 
          href: 'https://ygp.gdzwfw.gov.cn/ggzy-yhzx/', 
          title: '政策直达专栏', 
          text: '汇聚各类惠民利企政策，提供权威政策解读及一站式申报服务', 
          chip: '政策直达' 
        },
        { 
          src: 'https://static.gdzwfw.gov.cn/mhyy-be/20211031/e01e208e-a400-44b5-9b98-79de4a5669ee.jpg', 
          href: 'https://ygp.gdzwfw.gov.cn/ggzy-yhzx/', 
          title: '基层服务专区', 
          text: '推动政务服务向基层延伸' 
        },
        { 
          src: 'https://static.gdzwfw.gov.cn/mhyy-be/20210914/1501e42c-c516-4750-a283-c186d98fb274.jpg', 
          href: 'https://ygp.gdzwfw.gov.cn/ggzy-yhzx/', 
          title: '广东财政惠企利民服务专区', 
          text: '各项政策易于知晓，各项服务一站式办理' 
        },
        { 
          src: 'https://static.gdzwfw.gov.cn/mhyy-be/20201025/0620fbac-3745-4b86-a1eb-e1ce31fe6f97.jpg', 
          href: 'https://ygp.gdzwfw.gov.cn/ggzy-yhzx/', 
          title: '小微企业和个体商户', 
          text: '各项政策易于知晓，各项服务一站式办理' 
        },
        { 
          src: 'https://static.gdzwfw.gov.cn/mhyy-be/20211002/71c9b038-ff69-47ad-b089-2135e28d7e24.jpg', 
          href: 'https://ygp.gdzwfw.gov.cn/ggzy-yhzx/', 
          title: '尊老爱老服务专区', 
          text: '提供老年人养老退休等服务事项及适老化生活服务' 
        },
        { 
          src: 'https://static.gdzwfw.gov.cn/mhyy-be/20211010/89f29826-409f-4b34-a24c-99b84ec2fef0.jpg', 
          href: 'https://ygp.gdzwfw.gov.cn/ggzy-yhzx/', 
          title: '智慧审批专区', 
          text: '办事零等待，秒批秒办，省心省事', 
          chip: '智能审批' 
        },
        { 
          src: 'https://static.gdzwfw.gov.cn/mhyy-be/20210914/9329c9f4-0664-4a9d-b0e2-f4447b5be677.png', 
          href: 'https://ygp.gdzwfw.gov.cn/ggzy-yhzx/', 
          title: '粤省心自助服务专题', 
          text: '全省政务服务“总客服”，方便群众企业提诉求' 
        }    
      ]
    }        
  },
  {
    url: '/mock/portal/person',
    method: 'get',
    response: () => {
      return {
        service: [
          {
            "title": "护照、通行证",
            "icon": "mdi-passport",
            "links": [ "办理及加注普通护照", "办理往来港澳通行证", "办理往来台湾通行证" ]
          },
          {
            "title": "社保",
            "icon": "mdi-heart-multiple",
            "links": [ "社保查询", "一次性失业保险金申领", "养老保险待遇申领" ]
          },
          {
            "title": "户政",
            "icon": "mdi-home-account",
            "links": [ "开具户籍证明", "人才引进（市外迁入）", "出生登记" ]
          },
          {
            "title": "就业创业",
            "icon": "mdi-card-account-details",
            "links": [ "一次性创业资助", "灵活就业社保补贴申领", "创业租金补贴" ]
          },
          {
            "title": "职业资格",
            "icon": "mdi-book-account",
            "links": [ "律师事务所设立许可", "高等学校教师资格认定", "中医医疗机构医师执业注册" ]
          },
          {
            "title": "教育服务",
            "icon": "mdi-school",
            "links": [ "省内学校查询", "高等教育学籍查询", "四六级成绩查询" ]
          },
          {
            "title": "税务",
            "icon": "mdi-currency-usd",
            "links": [ "发票查询", "开具个人所得税纳税记录", "个人所得税申报记录查询" ]
          },
          {
            "title": "水电气",
            "icon": "mdi-water",
            "links": [ "用水报装/变更", "用电报装/变更", "燃气报装/变更" ]
          }
        ],
        life_event: ["就业", "车辆", "住房", "婚姻", "生育", "退休"],
      }
    }
  },  
  {
    url: '/mock/portal/legal',
    method: 'get',
    response: () => {
      return {
        service: [
          {
            "title": "办理企业注册",
            "icon": "mdi-file-certificate",
            "links": [ "外商投资企业设立登记", "内资企业设立登记" ]
          },
          {
            "title": "办税服务",
            "icon": "mdi-currency-usd",
            "links": [ "税务办税服务厅" ]
          },        
          {
            "title": "办理公司银行账户",
            "icon": "mdi-text-box",
            "links": [ "银行账户开户许可证核发", "银税三方（委托）划缴协议", "银行账户开户许可证核发办事指南" ]
          },        
          {
            "title": "市场主体诉求响应",
            "icon": "mdi-laser-pointer",
            "links": [ "用工、融资、税务出口等诉求在线反馈，政府协调处理" ]
          },        
          {
            "title": "日常企业管理",
            "icon": "mdi-file-star",
            "links": [ "职工社保", "企业申请培训补贴", "企业登记业务办理状态查询" ]
          },
          {
            "title": "企业变更",
            "icon": "mdi-briefcase-arrow-left-right",
            "links": [ "外商投资企业变更登记", "内资企业变更登记", "个人独资企业变更登记" ]
          },        
          {
            "title": "境外投资备案",
            "icon": "mdi-airplane",
            "links": [ "境外投资备案（非深圳企业境外投资备案）", "境外投资备案（深圳企业境外投资备案）" ]
          },        
          {
            "title": "福利补贴",
            "icon": "mdi-cash",
            "links": [ "小微企业社保补贴申领", "企业吸纳社会保险补贴", "创业带动就业补贴" ]
          }       
        ],
        enterprise_history: ["企业开办", "企业经营", "企业注销"],        
      }
    }
  },
  {
    url: '/mock/kstb',
    method: 'get',
    response: () => {
      return {
        across_handle: [
          {
            "tab": "全程网办", 
            "src": "https://static.gdzwfw.gov.cn/portal/index-assets/img/bg-kstb-qcwb.0b631b2.png",
            "links": [
              "一次不用跑就能实现跨省办理",
              "广东业主在外地办理企业相关事情",
              "王先生是广东一家内资企业的老板，由于业务需要，长时间在全国各地出差，王先生的企业需要办理变更登记，以往他要赶回广东办理，现在，实现了全程网办，王先生在全国各地都可以直接在线办理了。"
            ]
          },
          {
            "tab": "异地代收", 
            "src": "https://static.gdzwfw.gov.cn/portal/index-assets/img/bg-kstb-ydds.da607b7.jpg",
            "links": [
              "再也不用“两头跑”",
              "各省人员在广东办理身份证",
              "在广东工作的李先生，户籍在广西，需要办理身份证换领，以往，李先生需要搭车回到广西本地办理，现在通过“跨省通办”，李先生只需在广东按要求提供材料，很快就能顺利拿到新的身份证了！"
            ]        
          },
          {
            "tab": "多地联办", 
            "src": "https://static.gdzwfw.gov.cn/portal/index-assets/img/bg-kstb-dllb.cc7928e.jpg",
            "links": [
              "多地事项一次办成",
              "基本医疗保险关系转移联办",
              "刚刚在广东茂名入职的王先生原来在广西玉林工作，现在需要将基本医疗保险关系转移到广东茂名，按照以往王先生需要到广西玉林办理基本医疗保险关系转出，然后返回广东茂名办理基本医疗保险关系转入手续，需要两地跑，自"
            ]        
          },
          {
            "tab": "一体机办理", 
            "src": "https://static.gdzwfw.gov.cn/portal/index-assets/img/bg-kstb-ytjbl.70dbac0.jpg",
            "links": [
              "不见面24小时自助办理",
              "驾驶证遗失补证",
              "张师傅是广东东莞的一名司机，工作需要经常要在湖北武汉跑运输，不慎遗失了自己的驾驶证，以前他还要回到广东办理，现在只需要来到武汉市民之家，在一体机上操作即可完成。"
            ]        
          },
          {
            "tab": "跨境办理", 
            "src": "https://static.gdzwfw.gov.cn/portal/index-assets/img/bg-kstb-kjbl.49933bf.jpg",
            "links": [
              "零通关，业务办理更方便",
              "不动产抵押登记",
              "珠海的黄先生长期在港澳地区工作，因资金周转问题，需要为自己在珠海的一套房屋办理抵押登记，现在他只需要来到港澳的一站式便民服务点，提交相关资料即可办理，无需再回珠海了！"
            ]        
          }
        ],
        business_environment: [
          {
            title: "4步完成企业开办",
            items: [ "选择企业类型", "一表填报", "业务批准", "一窗领取" ]      
          },
          {
            title: "小微企业和个体户服务",
            items: [ "市场主体诉求响应", "企业注销", "中介服务超市" ]
          },
          {
            title: "用能报装服务",
            items: [ "用电报装", "燃气报装", "用水报装", "通讯报装" ]
          },
          {
            title: "贸易服务",
            items: [ "口岸收费公示", "自贸试验区资讯", "通关状态查询" ]
          }
        ],
        convenient_service: [
          "生育登记", "导游查询", "法律援助机构查询", "个税证明", 
          "车检计算器", "结婚登记预约", "港澳通行证预约", "出入境业务办理", 
          "电费查缴", "在线学历认证", "学位证书查询", "技校毕业证书查询" 
        ],
      }  
    }    
  },
  {
    url: '/mock/rating',
    method: 'get',
    response: () => {
      return [
        { "title": "办件数", "value": "145.5", "unit": "万件" },
        { "title": "收到差评数", "value": "249", "unit": "条" },
        { "title": "差评整改率", "value": "100", "unit": "%" },
        { "title": "平均分", "value": "9.9", "unit": "分", "rate": true }
      ]
    } 
  },
  {
    url: '/mock/news',
    method: 'get',
    response: () => {
      return [
        { 
          "title": "广东拟出台科技创新条例 全过程创新生态链成为立法主线", 
          "text": "",
          "date": "2023-07-4 09:51:12" 
        },
        { 
          "title": "促进高校毕业生就业！我国延续实施一次性扩岗补助政策", 
          "text": "为深入实施扩大内需战略，围绕“十四五”时期实施扩大内需战略主要目标，坚持问题导向，明确工作任务，结合我省实际制定本实施方案。",
          "date": "2023-07-4 09:34:10" 
        },
        { 
          "title": "水利部首次批复珠江流域水库群联合调度运用计划",
          "text": "",
          "date": "2023-07-3 10:31:09" 
        }
      ]
    } 
  },
  {
    url: '/mock/footer',
    method: 'get',
    response: () => {
      return {
        website_information: ["网站介绍", "网站纠错", "隐私政策", "服务建议"],
        quickMark: {
          icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAY1BMVEVHcEwOHyorKysOHSkOHCtVVVUNHSgNHCgQHSszMzMQHSqAgIANHigOHykPHSoOHykNHSgQHCkOHSkNHigOHSsUIS4RHiv///8VKysOHikOHSkNIigQHygOIikPHy4OHCsgIEDsoq9TAAAAIXRSTlMASQaXSAOYmU4FTwJMS3RKclGUTUcnTQEMb5UmUiUhJAhdLWYcAAAA4UlEQVRIx+WV2Q6DIBBFRxCqoNal+/7/X1l0TFhC1ZpAmvS+CHNP0HEGgI1POUDqNSA4XmWmao03llGNeAamEo0Ty8ii4ZQPYgBbC2cYpw7OMXPmrs4wzv8XZyhwf6RhxKlqnZg6a7yzjDrK9vgGz31SiclPRkilPkmAB452Crnj46mmc6n220jYPRMWb4ipTuMnNe2bkpBX27Z0eYtJo6or8JntkVNK+e+fBMa334QQZVlWiF/VcHJ1u0yD1uHeA1sFLiMupTwa+FSZBL6oiIJPXZQ9sy+Kw4gt6XenxcLhb5uiKClJmNpOAAAAAElFTkSuQmCC",
          list: [
            {
              "title": "广东省人民政府门户网站",
              "url": "url(/portal/assets/img/qrcode-gov.2956ec8.png)"            
            },
            {
              "title": "粤省事小程序",
              "url": "url(/portal/assets/img/minapp.dd5b15f.png)"            
            },
            {
              "title": "粤商通APP",
              "url": "url(/portal/assets/img/yst.37815f0.png)"            
            }
          ],
        },
        copyright: [
          { "title": "主办", "value": "广东省人民政府办公厅" },
          { "title": "承办", "value": "广东省政务服务数据管理局" },
          { "title": "技术支持", "value": "数字广东网络建设有限公司" },
          { "title": "版权所有", "value": "广东政务服务网" }
        ],
        licence: [
          { 
            "title": "粤ICP备", 
            "value": "05070829号-2" 
          },
          { 
            "iconUrl": "/portal/assets/img/beian.e6f2938.png", 
            "title": "粤公网安备", 
            "value": "44010402001768", isImg: true 
          },
          { 
            "title": "网站标识码", 
            "value": "440000084" 
          }
        ],
      }
    }    
  }    
]