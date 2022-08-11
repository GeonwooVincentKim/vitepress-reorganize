export default {
	title: "GeonwooKim's VitePress Project",
	description: 'Learn Vitepress again',
    themeConfig: {
        // siteTile: "GeonwooKim's VitePress Project"
        nav: [
            {text: 'Guide', link: '/guide', activeMatch: '/guide/'},
            {
                text: 'Dropdown Menu',
                items: [
                    {text: 'Item A', link: '/item-1'},
                    {text: 'Item B', link: '/item-2'},
                    {text: 'Item C', link: '/item-3'}
                ]
            },
            {text: 'Configs', link: '/configs', activeMatch: '/configs/'},
            {
                items: [
                    {text: 'Section B Item A', link: '/item-a'},
                    {text: 'Section B Item B', link: '/item-b'},
                    {text: 'Section B Item C', link: '/item-c'}
                ]
            },
            {text: 'Changelog', link: 'https://github.com/GeonwooVincentKim'}
        ],

        // Single Sidebars
        // sidebar: [
        //     {
        //         text: 'Section Title A',
        //         items: [
        //             {text: 'Sidebar Item A', link: '/side-item-a'},
        //             {text: 'Sidebar Item B', link: '/side-item-b'}
        //         ]
        //     },
        //     {
        //         text: 'Section Title B',
        //         link: '/sec',
        //         items: [
        //             {text: 'Sidebar Item C', link: '/side-item-c'},
        //             {text: 'Sidebar Item D', link: '/side-item-d'}
        //         ]
        //     },
        // ],

        // Multiple Sidebars
        sidebar: {
            // '/': [
            //     {
            //         items: [
            //             // {text: 'Guide', link: '/guide/'},
            //             // {text: 'Config', link: '/config/'}
            //             {
            //                 text: 'Guide',
            //                 collapsible: true,
            //                 collapsed: false,
            //                 items: [
            //                     // This shows `/guide/index.md` page.
            //                     {text: 'Index', link: '/guide/index'}, // /guide/index.md
            //                     {text: 'One', link: '/guide/one'}, // /guide/one.md
            //                     {text: 'Two', link: '/guide/two'}, // /guide/two.md
            //                 ]
            //             }
            //         ]
            //         // '/guide/': [
            //         //     {
            //         //         text: 'Guide',
            //         //         collapsible: true,
            //         //         collapsed: true,
            //         //         items: [
            //         //             // This shows `/guide/index.md` page.
            //         //             {text: 'Index', link: '/guide/index'}, // /guide/index.md
            //         //             {text: 'One', link: '/guide/one'}, // /guide/one.md
            //         //             {text: 'Two', link: '/guide/two'}, // /guide/two.md
            //         //         ]
            //         //     }
            //         // ],

            //         // '/config/': [
            //         //     {
            //         //         text: 'Config',
            //         //         collapsible: true,
            //         //         collapsed: true,
            //         //         items: [
            //         //             // This shows `/config/index.md` page.
            //         //             {text: 'Config', link: '/config/index'}, // /config/index.md
            //         //             {text: 'Three', link: '/config/three'}, // /config/three.md
            //         //             {text: 'Four', link: '/config/four'}, // /config/four.md
            //         //         ]
            //         //     }
            //         // ]
            //     }
            // ],
            // This Sidebar gets displayed when user is under `guide` directory
            '/guide/': [
                {
                    text: 'Guide',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        // This shows `/guide/index.md` page.
                        {text: 'Index', link: '/guide/index'}, // /guide/index.md
                        {text: 'One', link: '/guide/one'}, // /guide/one.md
                        {text: 'Two', link: '/guide/two'}, // /guide/two.md
                    ]
                }
            ],

            // This Sidebar gets displayed when user is under `config` directory
            '/config/': [
                {
                    text: 'Config',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        // This shows `/config/index.md` page.
                        {text: 'Config', link: '/config/index'}, // /config/index.md
                        {text: 'Three', link: '/config/three'}, // /config/three.md
                        {text: 'Four', link: '/config/four'}, // /config/four.md
                    ]
                }
            ]
        }

        // sidebar: [
        //     // "/",
        //     // {
        //     //     title: 'Index',
                
        //     // }
        //     {
        //         title: "level1",
        //         collapsible:true,
        //         collapsed:false,
        //         items:[
        //            {
        //               title: "level1-1",
        //               collapsible: true,
        //               collapsed: false,
        //               items: [
        //                  {
        //                     title:"level1-1-1 ",
        //                     link:"/01.1"
        //                  },
        //                  {
        //                     title:"level1-1-2 ",
        //                     link:"/01.2"
        //                  }
        //               ]
        //            },
        //            {
        //               title:"level1-2",
        //               collapsible:true,
        //               collapsed:false,
        //               items:[
        //                  {
        //                     title:"level1-2-1 ",
        //                     link:"/02.1"
        //                  },
        //                  {
        //                     title:"level1-2-2 ",
        //                     link:"/02.2"
        //                  }
        //               ]
        //            }
        //         ]
        //      }
        // ]
    }
}
