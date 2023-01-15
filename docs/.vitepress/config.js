import { defineConfig } from "vitepress";

export default defineConfig({
    lang: 'zh-CN',
    title: '汪崽zzyの笔记仓库',
    description: '汪崽zzyの笔记仓库',
    base: '/NoteRepository/',

    appearance: true,
    lastUpdated: true,
    cleanUrls: 'without-subfolders',
    
    themeConfig: {
        // 导航栏
        nav: [
            { text: '导航', link: '/guide/index', activeMatch: '/guide'},
            {
                text: '开发',
                items: [
                    { text: '前端', link: '/development/front-end/introduction'},
                    { text: '后端', link: '/development/back-end/introduction' }
                ],
                activeMatch: '/development'
            },
            {
                text: '应用',
                items: [
                    { text: '知识图谱', link: '/application/knowledge-graph/introduction' }
                ],
                activeMatch: '/application'
            }
        ],
        // 侧边栏
        sidebar: {
            '/application/knowledge-graph/': [
                {
                    text: '知识图谱',
                    items: [
                        { text: '入门简介', link: '/application/knowledge-graph/introduction' },
                    ],
                    collapsible: true,
                }
            ],
        }
    }
});