import { cn } from 'ui'

interface IContainerProps {
	children: React.ReactNode
	as?: 'div' | 'main' | 'nav' | 'section'
	className?: string
}

const baseStyles = {
	default: 'mx-auto px-2 md:px-12 lg:px-24',
}

const Container: React.FC<IContainerProps> = ({
	className = '',
	as = 'div',
	children,
	...props
}) => {
	className = cn(baseStyles.default, className)

	const Component = as === 'div' ? 'div' : as

	return <Component className={className}>{children}</Component>
}
Container.displayName = 'Container'

export { Container }
