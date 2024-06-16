import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ContainerProps {
    children: React.ReactNode
    className?: string
}

const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={twMerge('container mx-auto max-w-[900px]', className)}>{children}</div>
    )
}

export default Container