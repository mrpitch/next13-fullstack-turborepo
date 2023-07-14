import { Button } from 'ui'
export default function Home() {
	return (
		<main className="mt-20 w-2/3 mx-auto">
			<h1 className="text-2xl mb-2">Hello World</h1>
			<Button className="bg-primary-700 text-secondary-100 p-2 rounded-md">
				Click Me!
			</Button>
		</main>
	)
}
