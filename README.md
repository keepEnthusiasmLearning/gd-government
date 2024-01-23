# 广东政务服务网 Vuetify UI

本例使用 Vuetify UI 重构广东政务服务网，并通过 mockjs 和 Axios 模拟 HTTP 请求。

- [广东政务服务网（原网页）](https://www.gdzwfw.gov.cn/)
- [广东政务服务网 Vuetify UI](https://keepenthusiasmlearning.github.io/gd-government/)

## 技术栈

| Module                  | Description |
| ----------------------- | ----------- |
| Vue                     | 渐进式 JavaScript 框架，实现双向绑定 |
| Vue Router              | 路由 |
| Vuetify                 | 实现 Material 的 UI 库 |
| Axios                   | 基于 promise 的网络请求库 |
| mockjs、vite-plugin-mock | 拦截 Ajax 请求, 生成模拟数据 |

## 项目目录

```
mock
|- mock_home            - 定义 mock 数据
src  
|- assets               - 静态数据：background-image、logo、img
|- mock-prod-server     - 引入和创建 mockjs
|- components
|  |- footer.vue
|  └- header.vue
|- router
|  └- index.vue
|- styles
|  |- main.sass         - 引入 scss 变量，初始化样式和通用类
|  └- variable.scss     - 定义 scss 变量，包括：字体、行高、颜色
|- util
|  └- request.ts        - 引入 Axios 定义 request() 请求方法
|- views
|  |- home              - 定义主页
|  └- ...moreView       - 定义其他页
|- App.vue
└- main.ts
```

## Display 项目断点

| Display | Range            | Code  |
| ------- | ---------------- | ----- |
| lg      | 1264px ~ 1904px* | `@media(min-width: 1280px)` |
| md      | 960px ~ 1264px   | `@media(min-width: 960px)` |
| sm      | 600px ~ 960px    | `@media(min-width: 600px)` |
| xs      | < 600px          | |

-------------------------------------------------------------------------------------------------------

## Home 主页

### 主页结构

```
Home
|- Header
|  |- Toolbar               - 工具栏
|  └- Hero                  - 主角
|- ServiceField             - 服务栏
|- PortalGallery            - 特色创新
|- PortalPerson
|  |- person
|  |  |- service            - 个人服务
|  |  └- life_event         - 人生事件
|  └- legal
|     |- service            - 法人服务
|     └- enterprise_history - 企业历程
|- PortalKstb
|  |- across_handle         - 跨域通办
|  |- business_environment  - 营商环境
|  └- convenient_service    - 便民服务
|- Rating                   - 政务服务好差评
|- News                     - 政策新闻
└- Footer
   |- Information           - 网页信息
   └- Copyright             - 版权
```

### 自适应处理

| Display | Module         | Component      | Description |
| ------- | -------------- | -------------- | ----------- |
| md      | toolbar        | links          | 隐藏工具栏右侧链接 |
| xs      | toolbar        | tabs           | 隐藏工具栏导航选择卡 |
| md      | toolbar hero   | universal item | 从双列变为单列布局 |
| sm      | toolbar hero   | universal box  | 隐藏右侧信息栏 |
| xs      | portal gallery | gallery card   | 放大美术画廊卡宽度 |
| lg      | portal person  | service item   | 从双列变为四列布局 |
| xs      | portal kstb    | all            | 隐藏 kstb 模块 |
| lg      | rating         | item           | 从双列变为四列布局, 添加外边距和边框 |
| lg      | news           | item           | 从单列变为三列布局  |
| lg      | footer         | information    | 从双列变为四列布局, 增加列内边距 |
| xs & sm | footer         | copyright      | 从 flex-row 变为 flex-column 布局 |

### Vuetify Components

本页用到的 Vuetify 组件。