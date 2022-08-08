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
        ]
    }
}
