'use client'

import { useRef, useEffect, useState } from 'react'

import { useThemeStore } from '@/lib/store/themeStore'

export function ThemeStoreInitializer() {
	const { theme } = useThemeStore()
	const initialized = useRef(false)

	useEffect(() => {
		//check OS theme setting & listen to changes
		const isDarkTheme = () =>
			window.matchMedia('(prefers-color-scheme: dark)').matches

		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', ({ matches }) => {
				useThemeStore.setState((state) => ({
					theme: matches ? 'dark' : 'light',
				}))
			})

		//initialize client side store
		if (!initialized.current) {
			useThemeStore.setState((state) => ({
				theme: isDarkTheme() ? 'dark' : 'light',
			}))
			initialized.current = true
		}

		//store theme settings in session storage
		try {
			const localTheme = JSON.parse(sessionStorage.getItem('theme'))
			if (localTheme) {
				document.documentElement.setAttribute(
					'data-mode',
					localTheme.state.theme
				)
				document.documentElement.className = localTheme.state.theme
			}
		} catch (err) {
			console.log('error loading the color theme')
		}
	}, [theme])

	return null
}
