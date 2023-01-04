export default defineAppConfig({
	docus: {
		title: 'Quick',
		description:
			'一个编程快速入门视频栏目，帮助你快速学会编程知识',
		url: 'https://dishait.github.io/quick/',

		socials: {
			bilibili: {
				icon: 'fa-brands:youtube',
				label: 'bilibili',
				href: 'https://space.bilibili.com/590784571'
			},
			github: 'dishait/quick'
		},
		header: {
			title: 'Quick',
			showLinkIcon: true
		},
		github: {
			edit: true,
			contributors: true
		},
		footer: {
			credits: {
				text: 'dishait.cn',
				href: 'http://dishaxy.dishait.cn/'
			}
		}
	}
})
