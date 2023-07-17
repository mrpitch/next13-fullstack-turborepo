'use client'
import { Moon, Sun } from 'lucide-react'

import { Button } from 'ui'

import { useThemeStore } from '@/lib/store/themeStore'

export function ThemeToggle() {
	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={() => {
				useThemeStore.setState((state) => ({
					theme: state.theme == 'light' ? 'dark' : 'light',
				}))
			}}
		>
			<Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
			<Moon className="hidden h-5 w-5 dark:block" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	)
}
