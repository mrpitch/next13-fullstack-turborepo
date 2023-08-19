'use client'
import { Dispatch, SetStateAction } from 'react'
import { Button, buttonVariants } from './button'
import { Icons } from './icons'
import * as Dialog from '@radix-ui/react-dialog'

export interface IDrawerNavProps {
	children?: React.ReactNode
	className?: string
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

export const DrawerNav: React.FC<IDrawerNavProps> = ({
	className,
	children,
	open,
	setOpen,
	...props
}) => {
	const handleDrawer = () => {
		setOpen(!open)

		setTimeout(
			() => (document.body.style.setProperty('pointer-events', 'auto'), 0)
		)
	}
	return (
		<>
			<Dialog.Root open={open} onOpenChange={handleDrawer}>
				<Dialog.Trigger asChild>
					<Button
						variant="ghost"
						size="icon"
						className={`${!open ? '' : 'hidden'}`}
					>
						<Icons.menu className="h-5 w-5 fill-current z-100" />
						<span className="sr-only">Menu</span>
					</Button>
				</Dialog.Trigger>
				<Dialog.Close asChild>
					<Button
						variant="ghost"
						size="icon"
						className={`${!open ? 'hidden' : ''}`}
					>
						<Icons.x className="h-5 w-5 fill-current" />
						<span className="sr-only">Close</span>
					</Button>
				</Dialog.Close>
				{/* <Dialog.Overlay className="fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" /> */}

				<Dialog.Content
					className="inset-y-0 top-[60px] right-0 h-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right w-full fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
"
				>
					<h1>Hurdi Gurdi!</h1>
				</Dialog.Content>
			</Dialog.Root>
		</>
	)
}
