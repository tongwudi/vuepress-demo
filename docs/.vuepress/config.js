module.exports = {
    title: '桐无敌', // 网站标题
    description: '桐无敌的博客', // 网站描述
    base: '/', // 部署站点的基础路径。如 Github pages，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"，它的值应当总是以斜杠开始，并以斜杠结束
    port: 2333, // 端口号
    dest: './dist', // 设置输出目录
    head: [ // 额外的需要被注入到当前页面的HTML"head"中的标签，其中路径的"/"就是public资源目录
        ['link', {
            rel: 'icon',
            href: '/img/logo.jpg'
        }],
    ],
    themeConfig: {
        nav: [ // 导航栏
            {
                text: '主页',
                link: '/'
            },
            {
                text: '学习',
                items: [ // 这里是下拉列表展现形式。
                    {
                        text: '掘金',
                        link: 'https://juejin.im/'
                    },
                    {
                        text: '技术胖',
                        link: 'http://jspang.com/'
                    },
                ]
            }
        ],
        sidebar: { // 侧边栏

        }
    }
}