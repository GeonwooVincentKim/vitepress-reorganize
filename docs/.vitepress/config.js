export default {
	title: "GeonwooKim's VitePress Project",
	description: 'Learn Vitepress again',
    themeConfig: {
        // siteTile: "GeonwooKim's VitePress Project"
        nav: [
            {text: 'Guide', link: '/guide'},
            {
                text: 'Dropdown Menu',
                items: [
                    {text: 'Item A', link: '/item-1'},
                    {text: 'Item B', link: '/item-2'},
                    {text: 'Item C', link: '/item-3'}
                ]
            },
            {text: 'Configs', link: '/configs'},
            {text: 'Changelog', link: 'https://github.com/GeonwooVincentKim'}
        ]
    }
}
