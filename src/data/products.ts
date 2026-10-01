export interface Product {
	id: string;
	title: string;
	description: string;
	price: string;
	badge?: string;
	imageUrl?: string;
	actionText: string;
	actionUrl: string;
	featured?: boolean;
	perks?: string[];
}

export const products: Product[] = [
	{
		id: 'premium-themes',
		title: 'Lonus Pro: Premium Themes',
		description:
			'Unlock all current and upcoming premium themes inside the app. Includes lifetime access and instant in-app activation.',
		price: 'From $0',
		badge: 'Lifetime',
		actionText: 'Unlock Premium',
		actionUrl: 'https://dodo.pe/1tyqb4xhgha',
		featured: true,
		perks: [
			'Lifetime Premium License Key',
			'Access to all current & future premium themes',
			'Discord Supporter Role',
		],
	},
];
