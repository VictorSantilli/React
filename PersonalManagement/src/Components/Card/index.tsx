import type { ReactNode } from 'react'
import './card.styles.css'

interface CardProps {
    children: ReactNode
}

export function Card({ children }: CardProps) {
    return (
        <div className='card-container'>
            {children}
        </div>
    )
}