
const moment = require('moment');
const path = require("path");

module.exports = {
    title: 'etsou.hk',
    description: '天主敎朝聖、聖經資源',
    transpileDependencies: [
        'vue-echarts',
        'resize-detector'
      ],
    head: [
        ['link',
            {
                rel: 'icon',
                href: '/logo.png'
            }
        ],
    ],
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': '../../../docs/image'
            }
        }
    },
    themeConfig: {
        docsDir: 'docs',
        // repo: 'jkwchui/chem-jon-hk',
        nav: [
            // {
            //     text: 'Home',
            //     link: '/'
            // },
            {
                text: '朝聖',
                link: '/pilgrimage/'
            },
            {
                text: '聖經',
                link: '/bible/'
            },
            {
                text: 'Sandbox',
                link: '/sandbox/'
            },
        ],
        sidebarDepth: 0,
        sidebar: {
            '/pilgrimage/': [
                {
                    title: '朝聖',
                    collapsable: false,
                    children: [
                        {
                            title: '中東',
                            children: [
                                ['./middleeast/israel/', '以色列'],
                                ['./middleeast/turkey/', '土耳其'],
                            ]
                        },
                        {
                            title: '歐洲',
                            children: [
                                ['./europe/france/', '法國'],
                                ['./europe/greece/', '希臘'],
                                ['./europe/ireland/', '愛爾蘭'],
                                ['./europe/italy/', '意大利'],
                                ['./europe/portugal/', '葡萄牙'],
                                ['./europe/spain/', '西班牙'],
                            ]
                        },
                        {
                            title: '美洲',
                            children: [
                                ['./america/cuba/', '古巴'],
                                ['./america/mexico/', '墨西哥'],
                            ]
                        },
                        {
                            title: '亞洲',
                            children: [
                                ['./asia/china/', '中國'],
                                ['./asia/korea/', '韓國'],
                                ['./asia/malaysia/', '馬來西亞'],
                                ['./asia/singapore/', '星加玻'],
                                ['./asia/taiwan/', '台灣'],
                            ]
                        },
                    ]
                },
   
                // {
                //     title: 'Sandbox',
                //     children: [
                //         './sandbox/fa/',
                //         './sandbox/bootstrap/',
                //         './sandbox/chart/',
                //         './sandbox/math/',
                //         './sandbox/pug/'
                //     ]
                // },
            ],

            '/bible/': [{
                    title: '聖經',
                    collapsable: true,
                    children: [
                        ['./chronology/', '耶穌生平事列']
                    ],
                },
            ],
            '/sandbox/': [{
                title: 'Sandbox',
                children: [
                    ['./', 'All features'],
                ],
            }, ]
        },
        displayAllHeaders: true,
    },
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    // Don't forget to install moment yourself
                    // const moment = require('moment')
                    moment.locale(lang)
                    return moment(timestamp).fromNow()
                }
            }
        ],
        // [
        //     '@vuepress/blog',
        //     {
        //         postsDir: '../jon/_posts'
        //     }
        // ],
        // ['@vuepress/register-components',
        //     {
        //         componentsDir: [
        //             '.'
        //         ]
        //     }
        // ],
        '@vuepress/active-header-links',
        '@vuepress/medium-zoom',
        '@vuepress/back-to-top',
        [ 
            '@vuepress/google-analytics',
            {
              'ga': 'UA-134636637-1' // UA-00000000-0
            }
        ],
        [
            'vuepress-plugin-smooth-scroll',
            { 'vuepress-plugin-smooth-scroll': true }
        ],
        [
            '@goy/svg-icons',
            {
                // Specific the folder with absolute path
                // where your gonna put svg icons in
                svgsDir: `${__dirname}/svgs`
            }
        ],
        'tabs'
        // 'flowchart',
    ],
    markdown: {
        // options for markdown-it-anchor
        anchor: {
            permalink: true
        },
        // options for markdown-it-toc
        toc: {
            includeLevel: [1, 2, 3, 4],
            forceFullToC: true
        },
        extendMarkdown: md => {
            // use more markdown-it plugins!
            md.use(require('markdown-it-checkbox'), {
                divWrap: true,
                divClass: 'cb',
                idPrefix: 'cbx_'
            })
            md.use(require('markdown-it-footnote'))
            md.use(require('markdown-it-attrs'))
            md.use(require('markdown-it-abbr'))
            md.use(require('markdown-it-video'), {
                youtube: {
                    width: 640,
                    height: 390
                },
                vimeo: {
                    width: 640,
                    height: 400
                },
                vine: {
                    width: 600,
                    height: 600,
                    embed: 'simple'
                },
                prezi: {
                    width: 550,
                    height: 400
                }
            })
            md.use(require('markdown-it-sup'))
            md.use(require('markdown-it-sub'))
            md.use(require('markdown-it-imsize'), { autofill: true })
            // md.use(require('markdown-it-center-text'))
            md.use(require('markdown-it-implicit-figures'), {
                dataType: true,  // <figure data-type="image">, default: false
                figcaption: true,  // <figcaption>alternative text</figcaption>, default: false
                tabindex: true, // <figure tabindex="1+n">..., default: false
                link: true
            })
        }
    }
};