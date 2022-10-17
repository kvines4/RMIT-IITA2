import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')

export default defineConfig({
	root,
	base: '/RMIT-IITA2/',
	publicDir: resolve(__dirname, 'assets'),
	build: {
		outDir: resolve(__dirname, 'dist'),
		rollupOptions: {
			input: {
				main:			resolve(root, 'index.html'),
				tools:			resolve(root, 'tools/index.html'),
				industrydata:	resolve(root, 'industrydata/index.html'),
				itwork:			resolve(root, 'itwork/index.html'),
				ittechnologies:	resolve(root, 'ittechnologies/index.html'),
				projectidea:	resolve(root, 'projectidea/index.html'),
			}
		},
	},
})

