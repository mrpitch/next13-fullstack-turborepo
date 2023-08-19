'use client'
import { useState } from 'react'

import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { buttonVariants } from 'ui'
import { DrawerNav } from 'ui'
import { Icons } from 'ui'
import { MainNav } from '@/components/MainNav'
import { ThemeToggle } from '@/components/ThemeToggle'

export function SiteHeader() {
	const [open, setOpen] = useState(false)
	return (
		<header className="bg-background sticky top-0 z-40 w-full border-b">
			<div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
				<MainNav items={siteConfig.mainNav} />
				<div className="flex flex-1 items-center justify-end space-x-4">
					<nav className="flex items-center space-x-1">
						<Link
							href={siteConfig.links.github}
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={buttonVariants({
									size: 'icon',
									variant: 'ghost',
								})}
							>
								<Icons.gitHub className="h-5 w-5" />
								<span className="sr-only">GitHub</span>
							</div>
						</Link>
						<Link
							href={siteConfig.links.twitter}
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={buttonVariants({
									size: 'icon',
									variant: 'ghost',
								})}
							>
								<Icons.twitter className="h-5 w-5 fill-current" />
								<span className="sr-only">Twitter</span>
							</div>
						</Link>
						<ThemeToggle />
						<DrawerNav open={open} setOpen={setOpen} />
					</nav>
				</div>
			</div>
		</header>
	)
}
