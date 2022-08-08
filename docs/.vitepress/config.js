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
        sidebar: [
            {
                text: 'Section Title A',
                items: [
                    {text: 'Sidebar Item A', link: '/side-item-a'},
                    {text: 'Sidebar Item B', link: '/side-item-b'}
                ]
            },
            {
                text: 'Section Title B',
                link: '/sec',
                items: [
                    {text: 'Sidebar Item C', link: '/side-item-c'},
                    {text: 'Sidebar Item D', link: '/side-item-d'}
                ]
            }
        ]
    }
}
