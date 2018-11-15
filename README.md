# seo-project-server

前后端分离，多页面 seo server tpl。

## 树🌲

```
.
├── LICENSE
├── README.md
├── README.zh-CN.md
├── app
│   ├── api
│   │   ├── common.js
│   │   ├── index.js
│   │   └── testProject.js
│   ├── controller
│   │   ├── common.js
│   │   └── testProject.js
│   ├── extend
│   │   ├── context.js
│   │   └── helper.js
│   ├── init
│   │   ├── initAssets.js
│   │   └── initTImestramp.js
│   ├── middleware
│   │   └── robot.js
│   ├── public
│   ├── router
│   │   └── testProject.js
│   ├── router.js
│   ├── service
│   │   ├── common
│   │   └── testProject
│   └── view
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