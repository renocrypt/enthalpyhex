// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'EnthalpyHex',
			description: 'Advanced Chemistry Documentation and Resources',
			defaultLocale: 'en',
			social: {
				github: 'https://github.com/your-username/EnthalpyHex',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'introduction' },
						{ label: 'About', slug: 'about' },
					],
				},
				{
					label: 'Physical Chemistry',
					autogenerate: { directory: 'physical' }
				},
				{
					label: 'Quantum Chemistry',
					autogenerate: { directory: 'quantum' }
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],
});
