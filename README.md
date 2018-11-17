# seo-project-server

前后端分离，多页面 seo server tpl。

## tree 🌲

```
.
├── LICENSE
├── README.md
├── README.zh-CN.md
├── app
│   ├── api 
│   │   ├── common.js 
│   │   ├── index.js // api 配置
│   │   └── testProject.js // 当个项目 api 目录
│   ├── controller // 用于解析用户的输入，处理后返回相应的结果
│   │   ├── common.js
│   │   └── testProject.js
│   ├── extend
│   │   ├── context.js
│   │   └── helper.js
│   ├── init // 项目启动初始化执行 js
│   │   ├── initAssets.js
│   │   └── initTImestramp.js
│   ├── middleware // 中间件
│   │   └── robot.js
│   ├── public
│   ├── router // 用于配置 URL 路由规则
│   │   └── testProject.js
│   ├── router.js // 全局路由配置
│   ├── service // 用于编写业务逻辑层
│   │   ├── common
│   │   └── testProject
│   └── view // 页面
│       ├── default
│       └── index.nj
├── app.js
├── appveyor.yml
├── config
│   ├── config.default.js
│   ├── config.dev.js
│   ├── config.prod.js
│   └── plugin.js
├── logs
│   └── seo-project-server
│       ├── common-error.log
│       ├── egg-agent.log
│       ├── egg-schedule.log
│       ├── egg-web.log
│       └── seo-project-server-web.log
├── package-lock.json
├── package.json
```

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org
