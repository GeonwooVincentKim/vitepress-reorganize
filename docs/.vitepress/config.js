export default {
	title: "GeonwooKim's VitePress Project",
	description: 'Learn Vitepress again',
    themeConfig: {
        // siteTile: "GeonwooKim's VitePress Project"
        nav: [
            {text: 'Guide', link: '/guide', activeMatch: '/config/'},
            {
                text: 'Dropdown Menu',
                items: [
                    {text: 'Item A', link: '/item-1'},
                    {text: 'Item B', link: '/item-2'},
                    {text: 'Item C', link: '/item-3'}
                ]
            },
            {text: 'Configs', link: '/configs'},
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
            // This Sidebar gets displayed when user is under `guide` directory
            '/side-guide/': [
                {
                    text: 'Guide',
                    items: [
                        // This shows `/guide/index.md` page.
                        {text: 'Index', link: '/side-guide/'}, // /guide/index.md
                        {text: 'One', link: '/side-guide/one'}, // /guide/one.md
                        {text: 'Two', link: '/side-guide/two'}, // /guide/two.md
                    ]
                }
            ],

            // This Sidebar gets displayed when user is under `config` directory
            '/side-config/': [
                {
                    text: 'Config',
                    items: [
                        // This shows `/config/index.md` page.
                        {text: 'Config', link: '/side-config/'}, // /config/index.md
                        {text: 'Three', link: '/side-config/three'}, // /config/three.md
                        {text: 'Four', link: '/side-config/four'}, // /config/four.md
                    ]
                }
            ]
        }
    }
}
