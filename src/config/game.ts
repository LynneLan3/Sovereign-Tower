export interface GameCategory {
	id: string;
	label: string;
	description: string;
	icon: string;
	order: number;
	/** Optional filename in `src/assets/` for Browse category cards. */
	image?: string;
}

export interface GamePortalQuestion {
	label: string;
	href: string;
}

/** Player-task entry for Start Here. Not the same as category browse. */
export interface GameHubStartHereItem {
	title: string;
	description: string;
	href: string;
	/** Optional filename in `src/assets/`. */
	image?: string;
	/** Small eyebrow label (e.g. Beginner, Systems). */
	label?: string;
	badge?: string;
}

export interface GameHubEvidenceItem {
	/** Filename in `src/assets/`. */
	image: string;
	alt: string;
	caption?: string;
	href?: string;
}

/** Optional Hub evidence / gameplay visual block. Omit entirely to hide the section. */
export interface GameHubEvidence {
	title?: string;
	description?: string;
	items: readonly GameHubEvidenceItem[];
}

export interface GameHubRecentUpdate {
	title: string;
	href: string;
	/** ISO date string, e.g. 2026-08-13 */
	date: string;
	changeSummary?: string;
	tag?: string;
}

export interface GamePortalCta {
	label: string;
	href: string;
}

export interface GamePortalConfig {
	/** Compact question chips on the Hub. Each href should point at a real guide. */
	popularQuestions?: readonly GamePortalQuestion[];
	/** Recently Updated list. Defaults to true when omitted. */
	showRecentlyUpdated?: boolean;
	/** Max items in Recently Updated. Defaults to 3. */
	maxRecent?: number;
	/** Compact About / Game Info on the Hub. Defaults to true when omitted. */
	showAbout?: boolean;
	/** Optional badge above the Hub H1. */
	heroBadge?: string;
	/** Optional primary Hero CTA. Falls back to the first Start Here entry. */
	primaryCta?: GamePortalCta;
	/** Optional secondary Hero CTA. */
	secondaryCta?: GamePortalCta;
	/**
	 * Player-task Start Here cards (typically 4).
	 * When omitted, Hub falls back to guides with `featured: true`.
	 */
	startHere?: readonly GameHubStartHereItem[];
	/**
	 * Optional gameplay / official media strip.
	 * When omitted or when `items` is empty, the section is not rendered.
	 */
	evidence?: GameHubEvidence;
	/**
	 * Optional curated Recently Updated rows.
	 * When omitted, Hub auto-builds from guide `lastUpdated` (+ optional `changeSummary`).
	 */
	recentUpdates?: readonly GameHubRecentUpdate[];
}

export type AnalyticsProvider = 'ga4';

export interface GameAnalyticsConfig {
	enabled: true;
	provider: AnalyticsProvider;
	measurementId: string;
	trackOutbound: boolean;
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
	heroAlt?: string;
	heroPosition?: string;
	logoImage?: string;
	categories: readonly GameCategory[];
	portal?: GamePortalConfig;
	analytics?: GameAnalyticsConfig;
}

export const game: GameConfig = {
	name: 'Sovereign Tower',
	shortName: 'Sovereign Tower',
	description:
		'A source-led Sovereign Tower guide covering the Round Table management RPG loop, Knights, quests, time rewind, romance context, and confirmed PC platform.',
	tagline:
		'Guide and wiki entry for beginners, gameplay systems, and confirmed platform information.',
	siteUrl: 'https://sovereign-tower.vercel.app/',
	hubPath: '/sovereign-tower/',
	hubTitle: 'Sovereign Tower Guide & Wiki',
	releaseDate: '2026-08-06',
	developer: 'WILD WITS GAMES',
	publisher: 'Curve Games',
	platforms: ['PC via Steam', 'Steam Deck Verified'],
	accentColor: '#0f766e',
	heroImage: 'hero.jpg',
	heroAlt: 'Official Steam screenshot for Sovereign Tower',
	heroPosition: 'center 42%',
	portal: {
		primaryCta: { label: 'Beginners Guide', href: '/sovereign-tower/beginners-guide/' },
		secondaryCta: { label: 'Browse guides', href: '#browse-guides' },
		popularQuestions: [
			{ label: 'Where should I start in Sovereign Tower?', href: '/sovereign-tower/beginners-guide/' },
			{
				label: 'Is Sovereign Tower on console?',
				href: '/sovereign-tower/platforms/#is-sovereign-tower-on-console',
			},
			{ label: 'What is Sovereign Tower gameplay like?', href: '/sovereign-tower/gameplay/' },
			{ label: 'Does it have romance options?', href: '/sovereign-tower/romance-options/' },
		],
		startHere: [
			{
				title: 'Beginners Guide',
				description: 'Learn the ruling loop: Knights, quests, relationships, annexes, and time rewind.',
				href: '/sovereign-tower/beginners-guide/',
				label: 'Getting started',
				badge: 'Start here',
			},
			{
				title: 'Gameplay Systems',
				description: 'Round Table management, Knights, quests, tower expansion, and time rewind.',
				href: '/sovereign-tower/gameplay/',
				label: 'Systems',
			},
			{
				title: 'Platforms',
				description: 'Confirmed PC/Steam and Steam Deck status, plus the console evidence boundary.',
				href: '/sovereign-tower/platforms/',
				label: 'Platforms',
			},
			{
				title: 'Romance Options',
				description: 'What official descriptions confirm about forbidden romances and Knights.',
				href: '/sovereign-tower/romance-options/',
				label: 'Story',
			},
		],
		showRecentlyUpdated: true,
		maxRecent: 4,
	},
	analytics: {
		enabled: true,
		provider: 'ga4',
		measurementId: 'G-FCM51HDVC1',
		trackOutbound: true,
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
