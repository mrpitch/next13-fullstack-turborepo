import { Avatar, AvatarFallback, AvatarImage } from 'ui'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from 'ui'
import { Button } from 'ui'
export default function Home() {
	return (
		<main className="mt-20 w-2/3 mx-auto">
			<h1 className="text-2xl mb-2 text-primary-600">Hello World</h1>
			<div>
				<Avatar>
					<AvatarImage src="https://avatars.githubusercontent.com/u/16068185?v=4" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</div>
			<div className="">
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
			<div className="flex justify-start gap-3 w-2/5">
				<Button>Button</Button>
				<Button variant="outline">Button</Button>
				<Button variant="secondary">Button</Button>
			</div>
		</main>
	)
}
