import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { buttonVariants, Button } from 'ui'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from 'ui'

import config from 'tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'

export default function Home() {
	const resolvedConfig = resolveConfig(config)
	return (
		<section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
			<div className="flex max-w-[980px] flex-col items-start gap-2">
				<h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
					Beautifully designed components <br className="hidden sm:inline" />
					built with Radix UI and Tailwind CSS.
				</h1>
				<p className="max-w-[700px] text-lg text-muted-foreground">
					Accessible and customizable components that you can copy and paste
					into your apps. Free. Open Source. And Next.js 13 Ready.
				</p>
			</div>
			<div className="flex gap-4">
				<Link
					href={siteConfig.links.docs}
					target="_blank"
					rel="noreferrer"
					className={buttonVariants()}
				>
					Documentation
				</Link>
				<Link
					target="_blank"
					rel="noreferrer"
					href={siteConfig.links.github}
					className={buttonVariants({ variant: 'outline' })}
				>
					GitHub
				</Link>
				<Button variant="outline" className="animate-bounce">
					Click Me
				</Button>
			</div>
			<div className="mt-6">
				<Accordion type="single" collapsible className="w-full">
					<AccordionItem value="item-1">
						<AccordionTrigger>Is it accessible?</AccordionTrigger>
						<AccordionContent>
							Yes. It adheres to the WAI-ARIA design pattern.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>Is it styled?</AccordionTrigger>
						<AccordionContent>
							Yes. It comes with default styles that matches the other
							components&apos; aesthetic.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>Is it animated?</AccordionTrigger>
						<AccordionContent>
							Yes. It&apos;s animated by default, but you can disable it if you
							prefer.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
			<pre className="mt-8">
				{JSON.stringify(resolvedConfig.plugins, null, 2)}
			</pre>
		</section>
	)
}
