
import { cn } from 'ui'

export interface IComponentTemplateProps {
	children: React.ReactNode
	as?: 'div' | 'main' | 'nav' | 'section'
	className?: string
}

export const ComponentTemplate: React.FC<IComponentTemplateProps> = ({
	className,
	as = 'div',
	children,
	...props
}) => {
	const baseStyles = {
		default: 'mx-auto px-2 md:px-12 lg:px-24',
	}
	className = cn(baseStyles.default, className)

	switch (as) {
		case 'main':
			return <main className={className}>{children}</main>
		case 'nav':
			return <nav className={className}>{children}</nav>
		case 'section':
			return <section className={className}>{children}</section>
		default:
			return <div className={className}>{children}</div>
	}
}
