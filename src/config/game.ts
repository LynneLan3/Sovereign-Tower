export interface GameCategory {
	id: string;
	label: string;
	description: string;
	icon: string;
	order: number;
}

export interface GamePortalQuestion {
	label: string;
	href: string;
}

export interface GamePortalConfig {
	popularQuestions?: readonly GamePortalQuestion[];
	showRecentlyUpdated?: boolean;
	maxRecent?: number;
	showAbout?: boolean;
}

export interface GameConfig {
	name: string;
	shortName: string;
	description: string;
	tagline: string;
	siteUrl: string;
	hubPath: string;
	hubTitle?: string;
	releaseDate: string;
	developer: string;
	publisher: string;
	platforms: readonly string[];
	accentColor: string;
	heroImage?: string;
	logoImage?: string;
	categories: readonly GameCategory[];
	portal?: GamePortalConfig;
}

export const game: GameConfig = {
	name: 'Sovereign Tower',
	shortName: 'Sovereign Tower',
	description:
		'A source-led Sovereign Tower guide covering the Round Table management RPG loop, Knights, quests, time rewind, romance context, and confirmed PC platform.',
	tagline: 'Confirmed gameplay and player guidance for the magical tower management RPG.',
	siteUrl: 'https://sovereign-tower.vercel.app/',
	hubPath: '/sovereign-tower/',
	hubTitle: 'Sovereign Tower Guide & Wiki',
	releaseDate: '2026-08-06',
	developer: 'WILD WITS GAMES',
	publisher: 'Curve Games',
	platforms: ['PC via Steam', 'Steam Deck Verified'],
	accentColor: '#0f766e',
	portal: {
		popularQuestions: [
			{ label: 'What is Sovereign Tower gameplay like?', href: '/sovereign-tower/gameplay/' },
			{ label: 'Where should beginners start?', href: '/sovereign-tower/beginners-guide/' },
			{ label: 'Does it have romance options?', href: '/sovereign-tower/romance-options/' },
			{ label: 'Is Sovereign Tower on console?', href: '/sovereign-tower/platforms/' },
		],
		showRecentlyUpdated: true,
		maxRecent: 4,
	},
	categories: [
		{
			id: 'gameplay-systems',
			label: 'Gameplay',
			description: 'Round Table management, Knights, quests, tower expansion, and time rewind.',
			icon: 'puzzle',
			order: 1,
		},
		{
			id: 'getting-started',
			label: 'Getting Started',
			description: 'Source-backed first steps for the daily ruling loop.',
			icon: 'rocket',
			order: 2,
		},
		{
			id: 'story-romance',
			label: 'Story & Romance',
			description: 'What official descriptions confirm about relationships and romance.',
			icon: 'open-book',
			order: 3,
		},
		{
			id: 'platform-support',
			label: 'Platforms',
			description: 'Confirmed PC/Steam status and the current console evidence boundary.',
			icon: 'laptop',
			order: 4,
		},
	],
};
