import { defineConfig } from "vitepress";

export default defineConfig({
    lang: 'zh-CN',
    title: '笔记仓库',
    description: '汪崽zzy的笔记仓库',
    base: '/NoteRepository/',

    appearance: true,
    lastUpdated: true,
    cleanUrls: 'without-subfolders',
    
    themeConfig: {
        // 导航栏
        nav: [
            { text: '目录', link: '/guide/index', activeMatch: '/guide'},
            { text: '前端', link: '/development/front-end/introduction', activeMatch: '/development/front-end'},
            { text: '后端', link: '/development/back-end/introduction', activeMatch: '/development/back-end'},
            { text: '知识图谱', link: '/application/knowledge-graph/introduction', activeMatch: '/application/knowledge-graph'},
        ],

        // 侧边栏
        sidebar: {
            '/development/front-end/': [
                {
                    text: '前端',
                    items: [
                        { text: '内容前瞻', link: '/development/front-end/introduction' },
                        { text: '三足鼎立', link:'/development/front-end/tripod'},
                    ]
                },
                {
                    text: 'HTML',
                    items: [
                        { text: '基础', link: '/development/front-end/html/fundamental' }
                    ],
                    collapsible: true,
                    collapsed: true
                },
                {
                    text: 'CSS',
                    items: [
                        { text: '基础', link: '/development/front-end/css/fundamental' }
                    ],
                    collapsible: true,
                    collapsed: true
                },
                {
                    text: 'JavaScript',
                    items: [
                        { text: '基础', link: '/development/front-end/javascript/fundamental' }
                    ],
                    collapsible: true,
                    collapsed: true
                }
            ],

            '/development/back-end/': [
                {
                    text: '后端',
                    items: [
                        { text: '内容前瞻', link: '/development/back-end/introduction' }
                    ]
                }
            ],

            '/application/knowledge-graph/': [
                {
                    text: '知识图谱',
                    items: [
                        { text: '内容前瞻', link: '/application/knowledge-graph/introduction' }
                    ]
                }
            ]
        },

        // 在线编辑
        editLink: {
            pattern: 'https://github.com/WangZai-ZZY/NoteRepository/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        }
    }
});