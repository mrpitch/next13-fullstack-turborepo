export type SiteConfig = typeof siteConfig

export const siteConfig = {
	name: 'Next.js',
	description:
		'Beautifully designed components built with Radix UI and Tailwind CSS.',
	mainNav: [
		{
			label: 'Home',
			href: '/',
		},
		{
			label: 'Page 1',
			href: '/page-1',
		},
		{
			label: 'Page 2',
			href: '/page-2',
		},
	],
	links: {
		twitter: 'https://twitter.com/shadcn',
		github: 'https://github.com/shadcn/ui',
		docs: 'https://ui.shadcn.com',
	},
}
