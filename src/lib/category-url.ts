import { game } from '../config/game';

function normalizedHubPath() {
	return game.hubPath.replace(/\/+$/, '') || '/';
}

/** Public URL for a category landing. Built from hubPath + category.id. */
export function categoryHref(categoryId: string) {
	const hub = game.hubPath.endsWith('/') ? game.hubPath : `${game.hubPath}/`;
	return `${hub}${categoryId}/`;
}

export function categoryIdFromPath(pathname: string) {
	const path = pathname.replace(/\/+$/, '') || '/';
	const hub = normalizedHubPath();
	if (hub === '/') {
		const rest = path.replace(/^\//, '');
		return game.categories.find((category) => category.id === rest)?.id;
	}
	const prefix = `${hub}/`;
	if (!path.startsWith(prefix)) return undefined;
	const rest = path.slice(prefix.length);
	return game.categories.find((category) => category.id === rest)?.id;
}

export function isCategoryLandingPath(pathname: string) {
	return Boolean(categoryIdFromPath(pathname));
}
