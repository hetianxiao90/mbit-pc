## 前言

本项目由 `react+ts+antd`搭建而成；使用 `eslint+pettier`作为代码检查工具；采用 `mobx`状态管理；国际化使用的是 `i18n`；使用 `sass `作为css扩展；路由使用 `react-router-dom`组件进行封装；封装 `axios`作为 `http`请求工具

## 规范

### git提交规范

```js
规范：
<类型>（可选）：<描述信息>

<详细描述>

其中，类型有以下几种：
- feat：新功能、新特性
- fix：修复 bug
- docs：文档修改
- style：代码格式（不影响功能，例如空格、分号等格式修正）
- refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动
- perf：性能优化
- revert：回退到上一个版本
- build：影响编译的修改

示例：
feat: 添加reademe.md文件

- 增加描述、规范、目录信息等信息


```

## 目录结构

```js
├── node_modules          // 依赖文件
├── public                // 静态资源目录
	├── index.html          // html入口
	├── manifest.json       // pwa配置文件
	├── robots.txt          // 爬虫规则文件
└── src                   // 源码目录
	└── api                 // 网络层
	  ├── config            // 网络请求配置
	  ├── http              // http封装
    ├── interface         // 接口定义
    ├── modules           // 按模块划分
    ├── index.ts          // 统一封装
	├── assets              // 静态资源
	├── components          // 全局组件文件夹
	├── config              // 系统配置文件夹
  ├── data                // 数据层
  ├── enums               // 枚举
  ├── lang  					    // 多语言
  ├── layout              // 布局
  ├── mock                // mock数据文件夹
  ├── routers  					  // 路由文件夹
  ├── store  					    // 状态管理文件夹
  ├── utils  					    // 工具类文件夹
  ├── views  					    // jsx文件夹
  ├── App.tsx  					  // 入口文件
  ├── index.tsx  				  // 总入口文件
  ├── react-app-env.d.ts  // ts兼容文件
├── .eslintrc.js   			  // eslint配置文件
├── .gitignore 					  // git忽略文件配置
├── .prettierignore 			// prettier忽略文件配置
├── .craco.config.js 		  // craco配置文件
├── .package.json
├── READNE.md 					  // 当前文件
├── tsconfig.json 				// ts配置文件
├── yarn.lock
```

## 使用

- 安装依赖：yarn
- 启动：yarn start
- 打包：yarn build
- 测试：yarn test
- 弹出：yarn eject 不要使用！！
- 格式检查：yarn lint
- 代码格式化：yarn format

## 日志

### 2024-05-22 xxx

`yarn add xxx`
