# 创建项目步骤

:::warning
注意 VuePress 需要 >= node 8.6
:::

1. 创建并进入一个新目录

```sh
mkdir vuepress-demo && cd vuepress-demo
```

2. 安装 vuePress 依赖

> 我们已经不再推荐全局安装 VuePress

```sh
npm install -D vuepress
```

3. 项目初始化

```sh
npm init -y
```

4. 目录结构

> VuePress 遵循 “约定优于配置” 的原则，推荐的目录结构如下：

```js
myblog
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│
└── package.json
```

5. 配置 package.json 片段

```js
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

6. 配置 config.js

```js
module.exports = {
  title: '桐无敌', // 网站标题
  description: '桐无敌的博客', // 网站描述
  base: '/', // 部署站点的基础路径。如 Github pages，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"，它的值应当总是以斜杠开始，并以斜杠结束
  port: 2333, // 端口号
  dest: './dist', // 设置输出目录
  head: [
    // 额外的需要被注入到当前页面的HTML"head"中的标签，其中路径的"/"就是public资源目录
    [
      'link',
      {
        rel: 'icon',
        href: '/img/logo.jpg'
      }
    ]
  ],
  themeConfig: {
    nav: [
      // 导航栏
      {
        text: '主页',
        link: '/' // 指向docs文件夹下
      },
      // {
      //     text: '组件文档',
      //     link: '/baseComponents/'
      // },
      {
        text: '学习',
        items: [
          // 这里是下拉列表展现形式。
          {
            text: '掘金',
            link: 'https://juejin.im/'
          },
          {
            text: '技术胖',
            link: 'http://jspang.com/'
          }
        ]
      }
    ],
    sidebar: {
      // 侧边栏
      // '/baseComponents/': [
      //     {
      //         title: '后台管理',
      //         collapsable: true,
      //         children: [
      //             'admin/table',
      //             'admin/backtotop',
      //             'admin/edit'
      //         ]
      //     },
      //     {
      //         title: '函数方法',
      //         collapsable: true,
      //         children: [
      //             'func/api'
      //         ]
      //     }
      // ]
    }
  }
}
```

7. 运行项目

```sh
npm run docs:dev
```
