import { Metadata } from 'next'

import { cn } from 'ui'

import { siteConfig } from '@/config/site'
import { fontSans } from '@/lib/fonts'
import '@/lib/styles/globals.css'

import { ThemeStoreInitializer } from '@/components/ThemeStoreInitializer'
import { SiteHeader } from '@/components/SiteHeader'

import { useThemeStore } from '@/lib/store/themeStore'

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
}

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<ThemeStoreInitializer />
			<html
				lang="en"
				data-mode={useThemeStore.getState().theme}
				className={useThemeStore.getState().theme}
			>
				<head />
				<body
					className={cn(
						'min-h-screen font-sans antialiased',
						fontSans.variable
					)}
				>
					<div className="relative flex min-h-screen flex-col">
						<SiteHeader />
						<div className="flex-1">{children}</div>
					</div>
				</body>
			</html>
		</>
	)
}
