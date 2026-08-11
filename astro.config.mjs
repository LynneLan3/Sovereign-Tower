// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import { game } from './src/config/game.ts';
import { sidebarFromCategories } from './src/config/sidebar.ts';
import { categoryHref } from './src/lib/category-url.ts';

function isCategoryLandingUrl(page) {
	const path = new URL(page).pathname.replace(/\/+$/, '') || '/';
	return game.categories.some((category) => {
		const href = categoryHref(category.id).replace(/\/+$/, '') || '/';
		return path === href;
	});
}

// https://astro.build/config
export default defineConfig({
	site: game.siteUrl,
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: game.shortName,
			description: game.description,
			lastUpdated: true,
			...(game.logoImage
				? { logo: { src: `./src/assets/${game.logoImage}`, alt: game.name } }
				: {}),
			customCss: ['./src/styles/custom.css'],
			head: [
				{
					tag: 'style',
					content: `:root { --game-accent: ${game.accentColor}; }`,
				},
			],
			sidebar: sidebarFromCategories(),
			components: {
				PageTitle: './src/components/overrides/PageTitle.astro',
				Footer: './src/components/overrides/Footer.astro',
				SiteTitle: './src/components/overrides/SiteTitle.astro',
				Header: './src/components/overrides/Header.astro',
			},
		}),
	sitemap({
			filter: (page) => !isCategoryLandingUrl(page) && (new URL(page).pathname.replace(/\/+$/, '') || '/') !== '/',
		}),
	],
});
