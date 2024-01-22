import { MockMethod, MockConfig } from 'vite-plugin-mock'
export default [
  {
    url: '/mock/characteristic',
    method: 'get',
    response: () => {
      return  {
        "head": {
          "title": "特色创新",
          "subtitle": "推进“一门式、一网式”政府服务模式改革，让群众和企业少跑腿、好办事，持续改善营商环境，共享“互联网+政务服务”发展成果。"
        },
        "list": {
          "businessEnv": { 
            "title": "特色营商环境服务",
            "items": {
              "1": { "title": "粤公平", "subtitle": "为市场主体提供一站式的交易服务", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20220718/7bc2910e-4969-4947-8945-ffdc2bf6f2e0.jpg", "href": "https://ygp.gdzwfw.gov.cn/ggzy-yhzx/", "chips": ["营商环境"] },
              "2": { "title": "工程建设项目“一网通办”", "subtitle": "提供工程建设项目报批一网通办服务", "imgSrc": "//static.gdzwfw.gov.cn/mhyy-be/20210130/ba2a61b1-12a5-48d0-95df-7c976b1a5fa9.jpg", "href": "//gcjs.gdzwfw.gov.cn/ywtb_gcjs/#/index", "chips": ["营商环境", "免审即享"] },
              "3": { "title": "助企纾困服务专区", "subtitle": "推动惠企政策一键直达、助企服务一网通办", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211216/c11f60ad-f1ca-48c1-ab71-7dcc3ec5999b.jpg", "href": "http://apps.gdzwfw.gov.cn/zqsk/#/" },
              "4": { "title": "一站式企业开办", "subtitle": "实现企业开办一表填报、一窗通取。", "imgSrc": "//static.gdzwfw.gov.cn/portal/static/portal/guangdong/gd_qiyekaiban.jpg", "href": "//qykb.gdzwfw.gov.cn" },
              "5": { "title": "广东财政惠企利民服务专区", "subtitle": "各项政策易于知晓，各项服务一站式办理", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20210914/1501e42c-c516-4750-a283-c186d98fb274.jpg", "href": "https://czbt.czt.gd.gov.cn/#/home?access_authCode=true" },
              "6": { "title": "小微企业和个体商户", "subtitle": "各项政策易于知晓，各项服务一站式办理", "imgSrc": "//static.gdzwfw.gov.cn/mhyy-be/20201025/0620fbac-3745-4b86-a1eb-e1ce31fe6f97.jpg", "href": "//apps.gdzwfw.gov.cn/special-topic/individual-business.html" },
              "7": { "title": "工程建设项目审批", "subtitle": "为工程建设项目审批提供一站式服务。", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20210926/62041d40-5116-4ec4-bd25-f915653090f7.jpg", "href": "http://jsgc.gdzwfw.gov.cn/xmjg/portal.do" },
              "8": { "title": "投资项目审批一站式服务", "subtitle": "提供投资项目登记，备案、核准及审批等事项办理服务", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20220318/8d037235-bd1c-4e0e-bb98-f35fb341a7e9.jpg", "href": "https://www.gdtz.gov.cn/tybm/index!zwfw.action?fromType=1&urlType=22" },
              "9": { "title": "多证合一", "subtitle": "外商投资企业商务备案、房地产经纪机构及其分支机构备案等。", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211022/913efce8-d7a1-4819-aabf-ab13ab49b466.jpg", "href": "https://bsxt.gdzwfw.gov.cn/apprUnionApply#/index" },
              "10": { "title": "营商环境专区", "subtitle": "一站式、免证办、营商通", "imgSrc": "//static.gdzwfw.gov.cn/mhyy-be/20210517/83c099a6-fa8b-48c9-ade4-6f304a8cd452.png", "href": "//apps.gdzwfw.gov.cn/yszq/index.html", "chips": ["营商环境"]  },
              "11": { "title": "跨境贸易", "subtitle": "面向社会公众，为个人和企业提供跨境贸易相关的公共服务及业务应用。", "imgSrc": "//static.gdzwfw.gov.cn/mhyy-be/20191014/6e08d4b8-ebc1-41d1-8676-60e02b2b528d.jpg", "href": "//apps.gdzwfw.gov.cn/kjmy/" },
              "12": { "title": "企业注销网上服务专区", "subtitle": "'一窗通办注销企业业务，减少跑动次数'", "imgSrc": "//static.gdzwfw.gov.cn/mhyy-be/20201026/ccfe4c43-96d5-41b3-8138-c8f64a78f9e0.png", "href": "//qyzx.gdzwfw.gov.cn" },
              "13": { "title": "企业名称自主申报", "subtitle": "申请人可以通过本系统自主申报企业名称，企业名称不再实行预先核准。", "imgSrc": "//static.gdzwfw.gov.cn/portal/20180917/qymczzsb.jpg", "href": "http://amr.gd.gov.cn/qcdzhdj/loginbase//invoke_qcdzh_sso.do?a=1&" },
              "14": { "title": "自贸区专属网页", "subtitle": "为区内每一家企业配置一个专属网页，提供个性化电子政务服务", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211223/2958fe72-a910-4809-8895-4d9adb24c3a1.jpg", "href": "http://apps.gdzwfw.gov.cn/portal-ftz/" },
              "15": { "title": "广东省中小企款项支付投诉与处理", "subtitle": "受理和办理中小企业款项支付投诉，维护中小企业合法权益。", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20220303/bfdcd539-77dd-4c0a-b6e2-591ab2ed2042.png", "href": "https://tyrz.gd.gov.cn/tif/sso/connect/page/oauth2/authorize?client_id=tyrz_zxqikxzftsdj&service=initService&scope=all&response_type=code&redirect_uri=https://kxzf.gdzwfw.gov.cn/yst_debt_complain_platform/#/" }
            }
          },
          "convenience": {
            "title": "特色便民服务",
            "items": {
              "1": { "title": "粤复用", "subtitle": "为服务商提供数字政府应用超市产品登记服务", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20221010/55872764-3577-4db7-8f34-61a3f1c1fd8b.jpg", "chips": ["应用推广复用"] },
              "2": { "title": "视频办服务专区", "subtitle": "为群众和企业提供面对面服务，网上办理有人帮", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20220728/dd0d2de5-debf-48be-bcb0-2d916662991f.jpg", "chips": ["在线帮办"] },
              "3": { "title": "泛珠跨域通办", "subtitle": "提供线上一网通办和线下代收代办深度融合的跨域通办服务体验", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20220724/a30251f0-48dc-42fe-955a-6fe8c0fc71bf.png" },
              "4": { "title": "企业留抵退税服务", "subtitle": "留抵退税政策查询、在线办理、服务评价等“一站式”服务", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20220714/c01210f9-1022-4c5e-9663-ee259f8297f1.png" },
              "5": { "title": "广东省“跨域通办”", "subtitle": "足不出户办理异地事务，实现“跨省通办、省内通办”", "imgSrc": "//static.gdzwfw.gov.cn/mhyy-be/20201024/afee7e10-0c08-4af0-978f-6876553c4d69.png", "chips": ["授权代办"] },
              "6": { "title": "主题集成服务", "subtitle": "按主题集合多个服务事项，一件事一站式办理", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211116/8debab87-e90b-461a-8b51-94620bd93e5a.jpg" },
              "7": { "title": "基层服务专区", "subtitle": "推动政务服务向基层延伸", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211031/d1e9c606-bbfb-4f52-95f8-cb14eb127c70.jpg" },
              "8": { "title": "政策直达专栏", "subtitle": "汇聚各类惠民利企政策，提供权威政策解读及一站式申报服务", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211003/cead4b0f-8c68-43a5-bb2d-8d604089c198.jpg", "chips": ["政策直达"] },
              "9": { "title": "便民服务专栏", "subtitle": "提供生产生活各类便捷服务", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211005/c1739ef7-68ee-4758-96db-7e092b86304c.jpg" },
              "10": { "title": "法律服务专区", "subtitle": "提供各类法律咨询、援助等法律服务", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211019/ddceff97-7b0c-404b-a958-fc2fc18873e8.jpg" },
              "11": { "title": "公证服务专区", "subtitle": "提供各类公证指引、查询等公证服务", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211019/a7d22c95-9d18-4707-bf65-3ee2131e512e.jpg" },
              "12": { "title": "用能报装业务", "subtitle": "提供供水、供电、燃气、排水、通信及有线广播电视“一站式”用能报装接入服务", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20210903/48b34048-b6ab-4dbb-81d6-a4ca2076aeef.png" },
              "13": { "title": "用电报装服务", "subtitle": "提供用电扩报装全过程办理、项目跟进、问题协调等相关服务", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211019/5e15306f-09fd-424a-8dea-a5343cfd74c6.png" },
              "14": { "title": "燃气报装服务", "subtitle": "简化办事程序，提高办事效率", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211019/26a1d778-0f09-4e38-ae78-2a4af2ab8cfb.png" },
              "15": { "title": "有线电视报装服务", "subtitle": "为有线电视报装提供“一站式”服务，缩短审批流程", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211019/5d9a567f-a95f-42e8-8495-11e9ce603b64.png" },
              "16": { "title": "通信报装服务", "subtitle": "为通信报装提供“一站式”服务，缩短审批流程", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211019/0c078fba-663b-4e50-bea0-54fe6269b346.png" },
              "17": { "title": "用水报装服务", "subtitle": "用水报装“一站式”服务", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211019/61f46b24-fd37-41ba-a4f9-8bb8a2136d7e.png" },
              "18": { "title": "智慧审批专区", "subtitle": "办事零等待，秒批秒办，省心省事", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211012/cf160d75-2dc6-44ea-b6c7-873dbea012a4.jpg", "chips": ["智能审批"] },
              "19": { "title": "湾区社保服务通", "subtitle": "湾区社保通，办事好轻松", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211118/424e20bc-99c1-4ae4-93b2-67b41f3bf83e.png" },
              "20": { "title": "粤省心自助服务专题", "subtitle": "全省政务服务“总客服”，方便群众企业提诉求", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20210914/9329c9f4-0664-4a9d-b0e2-f4447b5be677.png" },
              "21": { "title": "不动产登记", "subtitle": "不动产交易、办税、登记全过程“一窗受理、一次办成”", "imgSrc": "//static.gdzwfw.gov.cn/mhyy-be/20201110/160fd46c-c893-4f65-945e-09f4d9317c45.jpg" },
              "22": { "title": "科技阳光政务", "subtitle": "公开、公平、公正、高效、便民、廉洁的科技业务管理阳光政务平台。", "imgSrc": "//static.gdzwfw.gov.cn/portal/20180917/kjygzw.jpg" },
              "23": { "title": "中介服务超市", "subtitle": "技术审查、论证、评估等中介服务网上交易的综合性服务平台。", "imgSrc": "//static.gdzwfw.gov.cn/mhyy-be/20191014/7e5188b7-8b9e-4945-99c4-3deb0f9e28c9.jpg", "chips": ["授权代办"] },
              "24": { "title": "人才专区", "subtitle": "提供一站式人才服务，粤有才越精彩！", "imgSrc": "//static.gdzwfw.gov.cn/mhyy-be/20200426/01430e43-5858-4186-9f40-07dfc3cae67d.png" },
              "25": { "title": "治安基础信息自助申报", "subtitle": "租赁房屋责任人、单位(企业)向公安机关报送租赁房屋及居住人员信息、单位(企业)及从业人员信息", "imgSrc": "//static.gdzwfw.gov.cn/mhyy-be/20200717/eec204e1-48ea-4db4-bb72-cc5eef9dd43c.png" },
              "26": { "title": "惠农惠民补贴专区", "subtitle": "惠民惠农补贴政策，温暖直达群众", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211019/70d54592-73a6-45d7-b7c6-02cfb4f6a866.png" },
              "27": { "title": "粤港澳大湾区服务专区", "subtitle": "方便港澳居民、华侨人士和内地居民办理大湾区相关服务", "imgSrc": "//static.gdzwfw.gov.cn/mhyy-be/20191014/5d74cfb5-8ca5-4e3d-9d91-f0fd55dec34f.jpg" },
              "28": { "title": "用林政务服务专题", "subtitle": "面向企业、群众的用林政务服务事项申报和进度查询功能", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20221010/556b8230-81b7-4de1-a6a1-2d08b08faf90.png" }
            }
          },
          "vulnerableGroups": {
            "title": "弱势群体服务",
            "items": {
              "1": { "title": "关爱弱势群体专栏", "subtitle": "多一份关爱，多一份温暖", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211010/ce749f44-a52a-4fb7-867e-35927ac061ba.jpg" },
              "2": { "title": "尊老爱老服务专区", "subtitle": "提供老年人养老退休等服务事项及适老化生活服务", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211002/71c9b038-ff69-47ad-b089-2135e28d7e24.jpg" },
              "3": { "title": "助残服务专区", "subtitle": "致力于为残疾人士提供更加便利的服务", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211010/1137fc8c-5dee-48b2-a284-bd4eb1abff44.jpg" },
              "4": { "title": "失业帮助", "subtitle": "为人才就业、创业提供更多渠道及服务", "imgSrc": "//static.gdzwfw.gov.cn/mhyy-be/20201016/fe5d86bb-13d0-4574-bfe0-7e2758c099e4.png" },
              "5": { "title": "妇幼关怀", "subtitle": "多一些关爱，让妇女和儿童多一份温暖。", "imgSrc": "//static.gdzwfw.gov.cn/mhyy-be/20201016/074b91a0-b970-4d89-bf5b-1eda097d1dc0.png" },
              "6": { "title": "困难救助", "subtitle": "落实扶贫开发政策，竭诚服务困难群众", "imgSrc": "//static.gdzwfw.gov.cn/mhyy-be/20201016/4dadce39-9957-43ed-b69c-151b652fcc87.jpg" }
            }
          },
          "prefectureCity": {
            "title": "特色地市服务",
            "items": {
              "1": { "title": "琶洲专项服务", "subtitle": "一号申请、一窗受理、一网通办、24小时不打烊自助政务服务。", "imgSrc": "//static.gdzwfw.gov.cn/mhyy-be/20191014/93878f15-5a98-40af-ac8f-83098f337bf3.jpg" },
              "2": { "title": "特色民族自治县", "subtitle": "乳源、连山、连南少数民族自治县特色事项、政策等。", "imgSrc": "//static.gdzwfw.gov.cn/mhyy-be/20191014/2f2236a6-081c-40a1-9662-c6f1dfe5218c.jpg" },
              "3": { "title": "连南旅游", "subtitle": "连南瑶族自治县，这块充满神奇色彩的瑶族聚居区，位于广东省西北部。境内崇山峻岭，连绵百余里。", "imgSrc": "//apps.gdzwfw.gov.cn/zzx/images/ln-in.69ce2958.jpg" },
              "4": { "title": "连山旅游", "subtitle": "连山壮族瑶族自治县位于粤、湘、桂三省交界处，古有“九山半水半分田”之称。", "imgSrc": "//apps.gdzwfw.gov.cn/zzx/images/ls-in.fc0d1e1e.jpg" },
              "5": { "title": "少数民族服务（韶关）", "subtitle": "汇聚韶关市少数民族聚居区特色政务服务事项", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211022/89db707b-02f3-4cf4-9410-94ebf110df07.jpg" },
              "6": { "title": "以证找事（珠海）", "subtitle": "通过证照名称查询服务事项", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211022/3d5736e9-1555-4da3-abcf-b8f3fffc8be2.png" },
              "7": { "title": "妇幼主题服务", "subtitle": "为妇女幼儿提供政策、资讯、沟通的一站式服务", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211104/593d1bcb-93d0-4c41-b0e4-0748abc4eca1.png" },
              "8": { "title": "跨城通办专区（深圳、珠海、中山、江门、东莞、肇庆）", "subtitle": "推进政务服务事项异地办理", "imgSrc": "//static.gdzwfw.gov.cn/mhyy-be/20201026/ea3bfb0b-ac85-4ff7-9057-804c168c0ff0.png" },
              "9": { "title": "佛山市跨省通办", "subtitle": "提供多地政务服务“跨省通办”服务", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211122/c4394ba1-ab9d-4074-af19-863606f0ef6c.jpg" },
              "10": { "title": "政务服务跨省专栏（韶关）", "subtitle": "开展跨省通办政务服务合作，逐步实现两地政务服务", "imgSrc": "//static.gdzwfw.gov.cn/mhyy-be/20201026/32f9cfad-86a3-4598-a625-53b142febf42.jpg" },
              "11": { "title": "茂名市政务服务“跨省通办”专栏", "subtitle": "开展政务服务“跨省通办”合作，逐步实现业务通、系统通、数据通", "imgSrc":" https://static.gdzwfw.gov.cn/mhyy-be/20211122/466536f6-5622-4fb1-8937-208eb364b993.png" },
              "12": { "title": "秒批专区（珠海）", "subtitle": "为办事人提供政务秒批服务", "imgSrc": "//static.gdzwfw.gov.cn/mhyy-be/20201026/94e3f12d-f2c8-4116-b060-72dc38c065b2.jpg" },
              "13": { "title": "秒报秒批一体化（深圳）", "subtitle": "提供秒报秒批一体化专区", "imgSrc": "//static.gdzwfw.gov.cn/mhyy-be/20201026/80fc5c0a-9106-46d6-9deb-f409393aa49d.png" },
              "14": { "title": "汕头市秒报秒批", "subtitle": "推进政务服务事项在申报过程中表单信息自动填充，证照材料自动获取，无人工干预自动审批。", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211224/86ece6d4-22de-4295-9c48-b665067b2396.jpg" },
              "15": { "title": "“智惠批”服务（惠州）", "subtitle": "无人工干预，全流程智能自动审批", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211021/a20fbf16-6393-4ca1-9fc9-ef86e0333637.jpeg" },
              "16": { "title": "智惠批服务（仲恺高新区）", "subtitle": "应用电子证照和共享数据，推动自动化审查，实现无人干预审批、自动出具审批", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211022/cca6a918-b58c-4bae-9848-83d31ff22559.png" },
              "17": { "title": "政策兑现专区（韶关）", "subtitle": "将惠企便民扶持政策按照事项形式梳理，实现线上+线下一窗式服务办理", "imgSrc": "//static.gdzwfw.gov.cn/mhyy-be/20201026/14872b0b-7f3e-4e8d-8b78-9ce789629f17.png" },
              "18": { "title": "不动产登记（佛山）", "subtitle": "不动产交易、办税、登记全过程“一窗受理、一次办成”", "imgSrc": "//static.gdzwfw.gov.cn/mhyy-be/20201026/143dd3ef-3b46-4c63-8a81-1a3fb9a06c3c.png" },
              "19": { "title": "惠预约（惠州）", "subtitle": "政务服务事项办理网上预约", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211021/f7019c01-e3e8-4bfa-9ada-0943c90db465.jpg" },
              "20": { "title": "民生服务专区（东莞）", "subtitle": "为群众提供民生事项多维度智能导服，实现民生政策统一汇集和发布", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211022/5b0203e4-d3ec-4d82-84fa-1022ca8026ed.png" },
              "21": { "title": "公共资源交易（佛山）公开", "subtitle": "公平 公正 廉洁 高效 便捷", "imgSrc": "//static.gdzwfw.gov.cn/mhyy-be/20201026/3c42cb1b-45d1-455b-8f00-2ddf82736e9f.jpg" },
              "22": { "title": "工商易注册专窗（珠海）", "subtitle": "为商事主体一照一码登记提供全程电子化服务", "imgSrc": "//static.gdzwfw.gov.cn/mhyy-be/20201026/59cf5000-1eb2-4af4-8b61-46d629f78cc5.jpg" },
              "23": { "title": "复工复产服务专区（佛山）", "subtitle": "提供企业复工复产政策查询、服务办理、咨询诉求等", "imgSrc": "//static.gdzwfw.gov.cn/mhyy-be/20201026/695a2d0a-1b64-48a6-87cf-3afa669915f8.png" },
              "24": { "title": "公共服务平台（肇庆市）", "subtitle": "一键申请水电气报装，企业上门服务。", "imgSrc": "//static.gdzwfw.gov.cn/mhyy-be/20190529/7171d3dd-d90d-4f3c-9ff6-905610bbda48.jpg" },
              "25": { "title": "清企通", "subtitle": "提供惠企政策查询、政策兑现、政企互动、复工复产抗疫撑企等服务", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211021/3551fb2f-6dc6-485b-a50e-ead06324eab0.png" },
              "26": { "title": "工程建设联合审批（汕头）", "subtitle": "实现建设工程项目一站式审批，项目全程工学材料信息", "imgSrc": "//static.gdzwfw.gov.cn/mhyy-be/20201026/d6613a5e-2f4d-4cbc-8459-cab4c5bc4fcc.jpg" },
              "27": { "title": "东莞市政公用基础设施一键装", "subtitle": "同时将供水、供电、燃气、通信、有限广播电视五大类一并报装。", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211224/eca7314a-2e6c-4ae0-9d2c-24bded73d2cf.png" },
              "28": { "title": "财政惠企利民政策服务", "subtitle": "让政府扶持像网购一样便捷", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20211231/6a443682-ae98-4ac5-8008-072588739fbb.jpg" },
              "29": { "title": "就业创业专区（中山）", "subtitle": "提供稳岗就业、技能培训、政策指引相关信息", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20221206/44811547-e152-440f-a16b-cce68d8866bb.jpg" },
              "30": { "title": "中山数字贷", "subtitle": "助力企业数字化智能化转型发展", "imgSrc": "https://static.gdzwfw.gov.cn/mhyy-be/20221206/e135552a-5a76-49bd-9eba-df932a9a878d.jpg" }
            }
          }
        }
      }
    },
  },
  {
    url: '/mock/govPublic',
    method: 'get',
    response: () => {
      return {
        "head": {
          "title": "政务公开",
          "subtitle": "向社会公开各类政务信息、政务清单（权责清单、公共服务事项清单、秒批清单等）及办事指南。" 
        },  
        "list": {
          "govInfoPublicity": {
            "title": "政府信息公开",
            "items": {
              "1": { "title": "政务服务事项通用目录", "href": "//www.gdzwfw.gov.cn/portal/v2/public/catalog" },
              "2": { "title": "权责清单", "href": "//www.gdzwfw.gov.cn/portal/v2/affairs-public-duty-list?region=440000" },
              "3": { "title": "行政许可事项清单（2022年版）", "href": "https://static.gdzwfw.gov.cn/mhyy-be/20220922/广东省行政许可事项清单（2022年版）.pdf" },
              "4": { "title": "公共服务清单（8个）", "href": "//www.gdzwfw.gov.cn/portal/v2/public/second-index?region=440000#gonggong" },
              "5": { "title": "保留为行政审批必要条件的中介服务事项", "href": "https://www.gdzwfw.gov.cn/portal/v2/retain-audit-agent-list" },
              "6": { "title": "支付事项清单", "href": "//www.gdzwfw.gov.cn/portal/v2/affairs-public-second-list?region=440000&type=16" },
              "7": { "title": "物流事项清单", "href": "//www.gdzwfw.gov.cn/portal/v2/affairs-public-second-list?region=440000&type=17" },
              "8": { "title": "最多跑一次清单", "href": "//www.gdzwfw.gov.cn/portal/v2/public/activity?region=440000&catalogCode=#" },
              "9": { "title": "跑零次清单", "href": "//www.gdzwfw.gov.cn/portal/v2/affairs-public-second-list?region=440000&type=8" },
              "10": { "title": "全省通办清单", "href": "//apps.gdzwfw.gov.cn/tbsx/" },
              "11": { "title": "容缺受理事项清单", "href": "//www.gdzwfw.gov.cn/portal/v2/affairs-public-second-list?region=440000&type=10" },
              "12": { "title": "告知承诺事项清单", "href": "//www.gdzwfw.gov.cn/portal/v2/affairs-public-second-list?region=440000&type=11" },
              "13": { "title": "即办件事项清单", "href": "//www.gdzwfw.gov.cn/portal/v2/affairs-public-second-list?region=440000&type=12" },
              "14": { "title": "秒批清单", "href": "//www.gdzwfw.gov.cn/portal/v2/affairs-public-second-list?region=440000&type=13" },
              "15": { "title": "指尖办清单", "href": "//www.gdzwfw.gov.cn/portal/v2/affairs-public-second-list?region=440000&type=14" },
              "16": { "title": "一窗办理清单", "href": "//www.gdzwfw.gov.cn/portal/v2/affairs-public-second-list?region=440000&type=15" },
              "17": { "title": "“马上办、网上办、就近办、一次办”事项目录", "href": "//www.gdzwfw.gov.cn/portal/v2/public/four-deal?region=440000" },
              "18": { "title": "免证办清单", "href": "http://www.gdzwfw.gov.cn/portal/v2/public/mzb/index" },
              "19": { "title": "广东省设定的证明事项取消清单", "href": "//static.gdzwfw.gov.cn/mhyy-be/20191118/fef860b9-9530-4676-b93d-8dfa741c1205.pdf" },
              "20": { "title": "广东省设定的证明事项保留清单", "href": "//static.gdzwfw.gov.cn/mhyy-be/20191118/2f5cf6ce-7f35-4eff-aac8-8559c1e39dd7.pdf" },
              "21": { "title": "中介服务事项清单（1个）", "href": "//www.gdzwfw.gov.cn/portal/v2/public/second-index?region=440000#zhongjie" },
              "22": { "title": "广东省政府性基金目录清单（2个）", "href": "//www.gdzwfw.gov.cn/portal/v2/public/second-index?region=440000#guangdong" },
              "23": { "title": "行政事业性收费目录清单（4个）", "href": "//www.gdzwfw.gov.cn/portal/v2/public/second-index?region=440000#xingzheng" },
              "24": { "title": "经营服务性收费目录（2个）", "href": "//www.gdzwfw.gov.cn/portal/v2/public/second-index?region=440000#jingying" },
              "25": { "title": "公证机构服务收费清单", "href": "http://drc.gd.gov.cn/ywtz/content/post_2592155.html" },
              "27": { "title": "企业投资项目准入负面清单（2个）", "href": "" },
              "28": { "title": "省公共资源交易目录", "href": "" },
              "29": { "title": "信用广东（4个）", "href": "" },
              "30": { "title": "行政执法公开", "href": "" },
              "31": { "title": "广东省养老机构基本信息目录", "href": "" },
              "32": { "title": "互联网+护理服务试点医疗机构目录", "href": "" },
              "33": { "title": "产品质量监管目录", "href": "" },
              "34": { "title": "外商投资产业指导目录", "href": "" },
              "35": { "title": "禁止进口限制进口技术目录", "href": "" },
              "36": { "title": "鼓励进口技术和产品目录", "href": "" },
              "37": { "title": "广东省A级旅游景区名录", "href": "" },
              "38": { "title": "广东省星级饭店名录", "href": "" },
              "39": { "title": "广东省旅行社名录", "href": "" },
              "40": { "title": "广东驻海外旅游合作推广中心名录", "href": "" },
              "41": { "title": "职业病目录", "href": "" },
              "42": { "title": "专业技术人员资格考试目录", "href": "" },
              "43": { "title": "公务员考试目录", "href": "" },
              "44": { "title": "广东省人事任免清单", "href": "" },
              "45": { "title": "广东省建筑节能技术产品推荐目录（5个）", "href": "" },
              "46": { "title": "鼓励外商投资产业目录", "href": "" },
              "47": { "title": "跨境电商零售进口商品清单", "href": "" },
              "48": { "title": "重大技术装备和产品进口关键零部件、原材料商品目录", "href": "" },
              "49": { "title": "进口不予免税的重大技术装备和产品目录", "href": "" },
              "50": { "title": "国家支持发展的重大技术装备和产品目录", "href": "" },
              "51": { "title": "广东省广播影视奖拟获奖作品目录", "href": "" },
              "52": { "title": "中国康复辅助器具目录", "href": "" },
              "53": { "title": "广东省需清理整治的不规范地名清单", "href": "" },
              "54": { "title": "广东省社会救助对象长期公示名单", "href": "" },
              "55": { "title": "广东省创新产品清单", "href": "" },
              "56": { "title": "2021年省财政重点绩效评价报告和2022年重点项目绩效目标表", "href": "" },
              "57": { "title": "财政收支情况", "href": "" },
              "58": { "title": "律师事务所名单", "href": "" },
              "59": { "title": "律师协会名单", "href": "" },
              "60": { "title": "公证处名单", "href": "" },
              "61": { "title": "公证协会名单", "href": "" },
              "62": { "title": "基层法律服务所名单", "href": "" },
              "63": { "title": "法律援助机构名单", "href": "" },
              "64": { "title": "人民调解委员会名单", "href": "" },
              "65": { "title": "仲裁委员会", "href": "" },
              "66": { "title": "公共法律服务中心名单", "href": "" },
              "67": { "title": "司法鉴定机构名单", "href": "" },
              "68": { "title": "执业律师(代表、顾问)名单", "href": "" },
              "69": { "title": "公证员名单", "href": "" },
              "70": { "title": "司法鉴定人名单", "href": "" },
              "71": { "title": "基层法律服务工作者名单", "href": "" },
              "72": { "title": "人民调解员名单", "href": "" },
              "73": { "title": "律师实习人员名单", "href": "" },
              "74": { "title": "村（社区）法律顾问名单", "href": "" },
              "75": { "title": "法援案例", "href": "" },
              "76": { "title": "临床教学基地总名单", "href": "" },
              "77": { "title": "广东省乙类大型医用设备评审专家库专家清单", "href": "" },
              "78": { "title": "产前诊断和辅助生殖机构清单", "href": "" },
              "79": { "title": "城市空气和水环境质量排名清单", "href": "" },
              "80": { "title": "江河水质量状况清单", "href": "" },
              "81": { "title": "药品医疗器械化妆品违法违规企业黑名单", "href": "" },
              "82": { "title": "工业和信息化各项指标目录", "href": "" },
              "83": { "title": "电信企业违规行为曝光台（1个）", "href": "" },
              "84": { "title": "药品质量检验目录", "href": "" },
              "85": { "title": "医疗器械质量检验目录", "href": "" },
              "86": { "title": "化妆品质量检验目录", "href": "" },
              "87": { "title": "医疗器械召回目录", "href": "" },
              "88": { "title": "粮油价格检测报告", "href": "" },
              "89": { "title": "广东省季度生产总值目录（2个）", "href": "" },
              "90": { "title": "主要农作物产量状况目录", "href": "" },
              "91": { "title": "建筑业企业生产状况目录", "href": "" },
              "92": { "title": "工伤保险服务协议机构清单", "href": "" },
              "93": { "title": "乙类大型医用设备配置许可机构清单", "href": "" },
              "94": { "title": "甲级政府采购代理机构清单", "href": "" },
              "95": { "title": "农业公园候选名单目录", "href": "" },
              "96": { "title": "农林牧渔业总产值、增加值目录（3个）", "href": "" },
              "97": { "title": "农业农情预警目录", "href": "" },
              "98": { "title": "房地产开发状况目录（2个）", "href": "" },
              "99": { "title": "固定资产投资情况目录（2个）", "href": "" },
              "100": { "title": "外商投资情况目录", "href": "" },
              "101": { "title": "进出口总额及占全国比重清单", "href": "" },
              "102": { "title": "各时段旅游接待人数目录", "href": "" },
              "103": { "title": "从业人员情况及从业人员工作总额清单（4个）", "href": "" },
              "104": { "title": "化妆品生产企业监督检查情况清单", "href": "" },
              "105": { "title": "药品GMP认证及药品生产安全监管检查情况目录", "href": "" },
              "106": { "title": "药品医疗器械化妆品类生产经营企业注销撤销生产及经营许可证目录（3个）", "href": "" },
              "107": { "title": "物理类及化学类进口仪器设备清单", "href": "" },
              "108": { "title": "外省登记备案甲级职业卫生技术服务机构清单", "href": "" },
              "109": { "title": "母婴安全优质服务单位清单", "href": "" },
              "110": { "title": "公共就业服务机构", "href": "" },
              "111": { "title": "社会救助和社会福利情况目录", "href": "" },
              "112": { "title": "土地利用总体规划批复情况目录", "href": "" },
              "113": { "title": "招标投标信息目录（3个）", "href": "" },
              "114": { "title": "国民经济和社会发展情况目录", "href": "" },
              "115": { "title": "重点项目工程施工许可目录", "href": "" },
              "116": { "title": "施工图审查结果目录", "href": "" },
              "117": { "title": "重点项目进展情况目录", "href": "" },
              "118": { "title": "重点项目竣工验收情况目录", "href": "" },
              "119": { "title": "工程建设企业目录（2个）", "href": "" },
              "120": { "title": "工程建设企业与人员信用目录（4个）", "href": "" },
              "121": { "title": "工程建设企业与人员黑名单（2个）", "href": "" },
              "122": { "title": "工程建设企业信息一览表", "href": "" },
              "123": { "title": "国有土地上房屋征收补偿信息目录", "href": "" },
              "124": { "title": "国控企业污染物自动监控信息目录", "href": "" },
              "125": { "title": "国家重点监控企业污染源监督性监测信息", "href": "" },
              "126": { "title": "企业环境信用评价信息目录", "href": "" },
              "127": { "title": "核与辐射安全信息目录", "href": "" },
              "128": { "title": "教育教学成果奖学校清单（3个）", "href": "" },
              "129": { "title": "医疗救护与卫生防疫目录", "href": "" },
              "130": { "title": "魅力广东出行旅游清单（3个）", "href": "" },
              "131": { "title": "非遗文化清单", "href": "" },
              "132": { "title": "拟录用公务员清单", "href": "" },
              "133": { "title": "各时段环境状况目录", "href": "" },
              "134": { "title": "生态环境指数目录", "href": "" },
              "135": { "title": "环境违法曝光台（1个）", "href": "" },
              "136": { "title": "广东省重大决策事项目录", "href": "" },
              "137": { "title": "军用技术转民用推广目录", "href": "" },
              "138": { "title": "国防科技工业社会投资领域指导目录", "href": "" },
              "139": { "title": "国家军用标准目录", "href": "" },
              "140": { "title": "广东省广播电视局收费目录清单", "href": "" },
              "141": { "title": "用人单位重大劳动保障违法行为社会公布目录（1个）", "href": "" },
              "142": { "title": "拖欠农民工工资“黑名单”（1个）", "href": "" },
              "143": { "title": "保安员资格考试收费目录清单", "href": "" },
              "144": { "title": "2020年度广东省绿色矿山名单", "href": "" },
              "145": { "title": "住房保障信息目录", "href": "" },
              "146": { "title": "残疾人服务定点机构清单（2个）", "href": "" },
              "147": { "title": "计算机软件考试用书目录", "href": "" },
              "148": { "title": "信息技术水平考试教材目录", "href": "" },
              "149": { "title": "事故调查报告目录", "href": "" },
              "150": { "title": "事故调查处理挂牌督办目录", "href": "" },
              "151": { "title": "应急减灾等级划分及防御指南目录（10个）", "href": "" },
              "152": { "title": "广东文联艺术展览大师目录（2个）", "href": "" },
              "153": { "title": "林业产业目录（7个）", "href": "" },
              "156": { "title": "林业龙头企业名单目录", "href": "" },
              "157": { "title": "广东省重点保护野生植物名录", "href": "" }
            }
          },
          "affairsInfoPublicity": {
            "title": "办事信息公开",
            "items": {
              "1": { "title": "中共广东省委宣传部", "href": "" },
              "2": { "title": "中共广东省委机构编制委员会办公室", "href": "" },
              "3": { "title": "广东省发展和改革委员会", "href": "" },
              "4": { "title": "广东省教育厅", "href": "" },
              "5": { "title": "广东省科学技术厅", "href": "" },
              "6": { "title": "广东省工业和信息化厅", "href": "" },
              "7": { "title": "广东省民族宗教事务委员会", "href": "" },
              "8": { "title": "广东省公安厅", "href": "" },
              "9": { "title": "广东省民政厅", "href": "" },
              "10": { "title": "广东省司法厅", "href": "" },
              "11": { "title": "广东省财政厅", "href": "" },
              "12": { "title": "广东省人力资源和社会保障厅", "href": "" },
              "13": { "title": "广东省自然资源厅", "href": "" },
              "14": { "title": "广东省生态环境厅", "href": "" },
              "15": { "title": "广东省住房和城乡建设厅", "href": "" },
              "16": { "title": "广东省交通运输厅", "href": "" },
              "17": { "title": "广东省水利厅", "href": "" },
              "18": { "title": "广东省农业农村厅", "href": "" },
              "19": { "title": "广东省商务厅", "href": "" },
              "20": { "title": "广东省文化和旅游厅", "href": "" },
              "21": { "title": "广东省卫生健康委员会", "href": "" },
              "22": { "title": "广东省退役军人事务厅", "href": "" },
              "23": { "title": "广东省应急管理厅", "href": "" },
              "24": { "title": "广东省审计厅", "href": "" },
              "25": { "title": "广东省市场监督管理局", "href": "" },
              "26": { "title": "广东省广播电视局", "href": "" },
              "27": { "title": "广东省体育局", "href": "" },
              "28": { "title": "广东省统计局", "href": "" },
              "29": { "title": "广东省地方金融监督管理局", "href": "" },
              "30": { "title": "广东省国家保密局", "href": "" },
              "31": { "title": "广东省档案局", "href": "" },
              "32": { "title": "广东省粮食和物资储备局", "href": "" },
              "33": { "title": "广东省能源局", "href": "" },
              "34": { "title": "广东省社会组织管理局", "href": "" },
              "35": { "title": "广东省戒毒管理局", "href": "" },
              "36": { "title": "广东省林业局", "href": "" },
              "37": { "title": "广东省中医药局", "href": "" },
              "38": { "title": "广东省药品监督管理局", "href": "" },
              "39": { "title": "广东省妇女联合会", "href": "" },
              "40": { "title": "广东省残疾人联合会", "href": "" },
              "41": { "title": "广东省人民政府地方志办公室", "href": "" },
              "42": { "title": "广东省国家安全厅", "href": "" },
              "43": { "title": "国家税务总局广东省税务局", "href": "" },
              "44": { "title": "广东省通信管理局", "href": "" },
              "45": { "title": "广东省地震局", "href": "" },
              "46": { "title": "广东省气象局", "href": "" },
              "47": { "title": "中华人民共和国海关总署广东分署", "href": "" },
              "48": { "title": "广东省医疗保障局", "href": "" },
              "49": { "title": "中华人民共和国广东海事局", "href": "" },
              "50": { "title": "广东电网有限责任公司", "href": "" },
              "51": { "title": "广东省邮政管理局", "href": "" },
              "52": { "title": "广东省工商业联合会", "href": "" },
              "53": { "title": "广东省海洋综合执法总队", "href": "" },
              "54": { "title": "广东省消防救援总队", "href": "" }  
            }
          }
        }
      }
    },
  },  
  {
    url: '/mock/xnjd',
    method: 'get',
    response: () => {
      return  {
        "head": {
          "title": "效能监督",
          "subtitle": "政务服务能力监督，通过公开公示的部门和事项服务数据，促进政府部门做好服务工作。"
        },
        "panelfoot": "截止到上个自然月统计的数据",
        "panels": {
          "statistics": {
            "title": "服务部门统计",
            "items": {
              "provincial": { "title": "省级部门", "value": "71" },
              "municipal": { "title": "市级部门", "value": "1042" },
              "county": { "title": "区/县级部门", "value": "4872" }
            }
          },
          "standard": {
            "title": "业务申办规范",
            "items": {
              "passingRate": { "title": "受理通过率", "value": "97.30%" },
              "approvalRate": { "title": "办结批准率", "value": "98.09%" }
            }
          },
          "postpone": {
            "title": "办件流程推延",
            "items": {
              "furtherRate": { "title": "补齐补正发生率", "value": "0.12%" },
              "specialRate": { "title": "特办程序发生率", "value": "0.87%" }
            }
          },
          "distribution": {
            "title": "申办类型分布",      
            "items": {
              "windows": { "title": "窗口办理", "value": "55.20%" },
              "online": { "title": "网上办理", "value": "44.80" },
              "express": { "title": "快递申请", "value": "0.00%" }        
            }
          }
        }
      }
    },
  },
  {
    url: '/mock/govPeopleInteract',
    method: 'get',
    response: () => {
      return   {
        "head": {
          "title": "政民互动",
          "subtitle": "围绕网上办事，向办事人提供直播访谈、网上咨询、评议、建议等互动服务。"
        },
        "sheets": {
          "live": {
            "bgImageUrl": "background-image: url('//static.gdzwfw.gov.cn/portal/static/gov-interact/icon_wangluowenzheng@2x.png')",
            "href": "http://www.gd.gov.cn/hdjl/zxft/index.html",
            "title": "直播互动",
            "subtitle": "广东省政府网"
          },
          "suggest": {
            "bgImageUrl": "background-image: url('//static.gdzwfw.gov.cn/portal/static/gov-interact/icon_luntan@2x.png')",
            "href": "http://www.gd.gov.cn/hdjl/zjdc/index.html",
            "title": "政民互动建议",
            "subtitle": "脚踏实地为人民服务"     
          },
          "governorDialogue": {
            "bgImageUrl": "background-image: url('//static.gdzwfw.gov.cn/portal/static/gov-interact/icon_liuyan@2x.png')",
            "href": "http://lygl.gd.gov.cn",
            "title": "我有话对省长说",
            "subtitle": "你可根据需要给省长留言"
          },
          "Petition": {
            "bgImageUrl": "background-image: url('//static.gdzwfw.gov.cn/portal/static/gov-interact/icon_wangshangxinfang@2x.png')",
            "href": "http://gdwsxf.gd.gov.cn/wsxf/index.html",
            "title": "信访大厅",
            "subtitle": "快捷、方便、节省、透明"     
          }
        }
      } 
    },
  },
]  