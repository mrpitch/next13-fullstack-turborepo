'use client'

import * as React from 'react'

interface IButtonProps {
	className: string
	children: React.ReactNode
}

export const Button: React.FC<IButtonProps> = ({ className, children }) => {
	return (
		<button className={className} onClick={() => alert('boop')}>
			{children}
		</button>
	)
}
