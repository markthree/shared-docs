import {
	genPrerenderRoutesSync,
	createDefaultGenPrerenderRoutesSyncOptions as defaultOptions
} from 'nuxt3-intelligence'

const routes = genPrerenderRoutesSync(defaultOptions())

routes.push('/sitemap.xml', '/config')

export default defineNuxtConfig({
	extends: '@nuxt-themes/docus',
	modules: [
		'nuxt-size',
		'@unocss/nuxt',
		'@nuxt/devtools',
		'@nuxtjs/fontaine',
		'@nuxt/image-edge',
		'./modules/beastcss'
	],
	app: {
		head: {
			htmlAttrs: {
				lang: 'zh-CN'
			}
		}
	},
	unocss: {
		uno: true,
		attributify: true
	},
	experimental: {
		asyncEntry: true, // 异步入口
		payloadExtraction: false // 禁止 payload 提取
	},
	vite: {
		define: {
			__VUE_OPTIONS_API__: false // 明确不使用 options api
		}
	},
	sourcemap: false,
	typescript: {
		shim: false
	},
	nitro: {
		minify: true,
		prerender: {
			routes,
			crawlLinks: true
		}
	}
})
